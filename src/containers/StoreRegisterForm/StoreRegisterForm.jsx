import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../_actions/index';
import styled from 'styled-components';

const Wrap = styled.div`
    width:100%; 
    height:100%;
    position:absolute;
    left: 0px;
    top: 0px;
    z-index:100; 
    display:${props => props.showStoreRegFormState === true ? 'static' : 'none'};
`

const LightBox = styled.div`
    width:100%;
    z-index:101;
    height:100%;
    background-color:rgba(247,247,247,0.75); 
    position:absolute; 
    top:0px; 
    left:0px;
`

const Content = styled.div`
    width:600px;
    height:680px;
    border:solid 1px #f7dd8c;
    background-color:#FFF;
    position:absolute;
    z-index:105;
    top:50%;
    left: 50%;
    margin-top:-340px;
    margin-left:-300px;
    @media (max-width: 520px) {
        width:350px;
        height:800px;
        margin-left:-175px;
  }
`
const BoxHeader = styled.div`
    background-color:#c0d2f0;
    height:30px;
`
const RegisterHeader = styled.h4`
    margin-left:25px;
`
const CloseButton = styled.button`
    position:absolute;
    right:5px;
    padding:2px;
`
const StyledStoreRegForm = styled.form`
    margin:10px 30px;
`

class StoreRegForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            store: {
                storeName: '',
                address: '',
                city: '',
                state: '',
                postcode: '',
                phone: '',
                wechat: '',
                tradeState: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { store } = this.state;
        this.setState({
            store: {
                ...store,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { store } = this.state;
        const { registerStore } = this.props;
        if (store.storeName && (store.phone || store.wechat)) {
            registerStore(store);
        }
    }

    render() {
        const { disableStoreRegForm, showStoreRegFormState } = this.props;
        const { store, submitted } = this.state;
        const stateList = ['','All Australia', 'NSW', 'VIC', 'QLD', 'SA', 'TAS', 'WA', 'ACT', 'NT'];
        return (
            <Wrap showStoreRegFormState={showStoreRegFormState}>
                <LightBox></LightBox>
                <Content>
                    <BoxHeader><CloseButton className="close" onClick={() => disableStoreRegForm()}>x</CloseButton></BoxHeader>
                    <RegisterHeader>Please register a Store</RegisterHeader>
                    <StyledStoreRegForm onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Store name</label>
                            <input
                                className="form-control"
                                placeholder="Enter username"
                                name="storeName"
                                value={store.storeName}
                                onChange={this.handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                                className="form-control"
                                placeholder="Enter username"
                                name="address"
                                value={store.address}
                                onChange={this.handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>City</label>
                                <input
                                    className="form-control"
                                    placeholder="Enter username"
                                    name="city"
                                    value={store.city}
                                    onChange={this.handleChange}
                                >
                                </input>
                            </div>
                            <div className="form-group col-md-4">
                                <label>State</label>
                                <select className="form-control" name="state" value={store.state} onChange={this.handleChange}>
                                    {stateList.map((singleState) => <option key={singleState} value={singleState}>{singleState}</option>)}
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label>Postcode</label>
                                <input
                                    className="form-control"
                                    placeholder="Enter username"
                                    name="postcode"
                                    value={store.postcode}
                                    onChange={this.handleChange}
                                >
                                </input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                className="form-control"
                                placeholder="Enter username"
                                name="phone"
                                value={store.phone}
                                onChange={this.handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Wechat微信</label>
                            <input
                                className="form-control"
                                placeholder="Enter username"
                                name="wechat"
                                value={store.wechat}
                                onChange={this.handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group ">
                            <label>Trade state</label>
                            <select className="form-control" name="tradeState" value={store.tradeState} onChange={this.handleChange}>
                                {stateList.map((singleState) => <option key={singleState} value={singleState}>{singleState}</option>)}
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary">Register</button>
                    </StyledStoreRegForm>
                </Content>
            </Wrap>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showStoreRegFormState: state.userStore.storeReg.storeRegForm.showStoreRegForm,
        hasStore: state.userInformation.hasOwnProperty('userStore') ? true : false
    }
}


const connectedStoreRegForm = withRouter(connect(mapStateToProps, actions)(StoreRegForm));

export { connectedStoreRegForm as StoreRegForm }
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
    display:${props => props.showLoginFormState === true ? console.log('ABBBBCCCCC') : 'none'};
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
    width:500px;
    height:500px;
    border:solid 1px #f7dd8c;
    background-color:#FFF;
    position:absolute;
    z-index:105;
    top:50%;
    left: 50%;
    margin-top:-250px;
    margin-left:-250px;
`

class LoginForm extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         username: '',
    //         password: '',
    //         submitted: false
    //     };

    //     // this.handleChange = this.handleChange.bind(this);
    //     // this.handleSubmit = this.handleSubmit.bind(this);
    // }
    render() {
        const { disableLoginForm, showLoginFormState } = this.props;
        console.log('Props:',this.props)
        return (
            <Wrap showLoginFormState={showLoginFormState}>
                <LightBox></LightBox>
                <Content>
                    <p><button onClick={()=>disableLoginForm()}>x</button></p>
                    这里是弹窗内容
                </Content>
            </Wrap>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showLoginFormState: state.loginForm.showLoginForm
    }
}


const connectedLoginForm = withRouter(connect(mapStateToProps, actions)(LoginForm));

export { connectedLoginForm as LoginForm }
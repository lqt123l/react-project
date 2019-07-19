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
    display:${props => props.showRegisterFormState === true ? 'static' : 'none'};
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
    width:400px;
    height:600px;
    border:solid 1px #f7dd8c;
    background-color:#FFF;
    position:absolute;
    z-index:105;
    top:50%;
    left: 50%;
    margin-top:-300px;
    margin-left:-200px;
    @media (max-width: 520px) {
        width:350px;
        height:300px;
        margin-top:-100px;
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
`
const StyledRegisterForm = styled.form`
    margin:10px 30px;
`

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: '',
                repeatPassword: '',
                email: '',
                phone: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { register } = this.props;
        if (user.username && user.password && user.email && user.phone) {
            register(user);
        }
    }

    render() {
        const { disableRegisterForm, showRegisterFormState } = this.props;
        const { user, submitted } = this.state;
        return (
            <Wrap showRegisterFormState={showRegisterFormState}>
                <LightBox></LightBox>
                <Content>
                    <BoxHeader><CloseButton className="close" onClick={() => disableRegisterForm()}>x</CloseButton></BoxHeader>
                    <RegisterHeader>Register</RegisterHeader>
                    <StyledRegisterForm onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                className="form-control"
                                placeholder="Enter username"
                                name="username"
                                value={user.username}
                                onChange={this.handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={this.handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Repeat Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat Password"
                                name="repeatPassword"
                                value={user.repeatPassword}
                                onChange={this.handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={user.email}
                                onChange={this.handleChange}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                className="form-control"
                                placeholder="Phone"
                                name="phone"
                                value={user.phone}
                                onChange={this.handleChange}
                            >
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </StyledRegisterForm>
                </Content>
            </Wrap>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showRegisterFormState: state.registration.registerForm.showRegisterForm
    }
}


const connectedRegisterForm = withRouter(connect(mapStateToProps, actions)(RegisterForm));

export { connectedRegisterForm as RegisterForm }
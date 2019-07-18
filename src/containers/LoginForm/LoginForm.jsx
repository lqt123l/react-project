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
    width:400px;
    height:300px;
    border:solid 1px #f7dd8c;
    background-color:#FFF;
    position:absolute;
    z-index:105;
    top:50%;
    left: 50%;
    margin-top:-150px;
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
const LoginHeader = styled.h4`
    margin-left:25px;
`
const CloseButton = styled.button`
    position:absolute;
    right:5px;
`
const StyledLoginForm = styled.form`
    margin:10px 30px;
`
const RegisterButton = styled.button`
    margin-left:20px;
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
        console.log('Props:', this.props)
        return (
            <Wrap showLoginFormState={showLoginFormState}>
                <LightBox></LightBox>
                <Content>
                    <BoxHeader><CloseButton className="close" onClick={() => disableLoginForm()}>x</CloseButton></BoxHeader>
                    <LoginHeader>Login</LoginHeader>
                    <StyledLoginForm>
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" id="loginUsername" placeholder="Enter username"></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="loginPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <RegisterButton type="submit" className="btn btn-outline-primary">Register</RegisterButton>
                    </StyledLoginForm>
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
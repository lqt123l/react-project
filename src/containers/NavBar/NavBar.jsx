import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import * as actions from '../../_actions/index';

const NavTag = styled.span`

`
const UserInfoBtn = styled.button`

`
const LogoutBtn = styled.button`
`

class NavBar extends Component {
    render() {
        const {loggedIn,username,showLoginForm,showRegisterForm,logout} = this.props;
        return (
            <div className='container'>
                <nav className="row navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to='/'>Product Search</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="dropdown-item" to='/product-manage'>Manage Product</NavLink>
                            </li>
                            {!loggedIn&&<li className="nav-item active">
                                <NavTag className="dropdown-item" onClick={()=>showLoginForm()}>Login</NavTag>
                            </li>}
                            
                            {!loggedIn&&<li className="nav-item active">
                                <NavTag className="dropdown-item" onClick={()=>showRegisterForm()}>Register</NavTag>
                            </li>}
                        </ul>
                    </div>
                    {loggedIn && <div>Welcome! <UserInfoBtn>{username}</UserInfoBtn><LogoutBtn onClick={()=>logout()}>Logout</LogoutBtn></div>}
                </nav>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn:state.login.loginStatus.loggedIn,
        username:state.userInformation.username
    }
}


const connectedNavBar = withRouter(connect(mapStateToProps, actions)(NavBar));

export { connectedNavBar as NavBar }

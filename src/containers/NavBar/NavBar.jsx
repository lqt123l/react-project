import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import * as actions from '../../_actions/index';

const NavTag = styled.span`
    cursor:pointer;
`
const UserInfoBtn = styled.button`

`
const LogoutBtn = styled.button`
`

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const { loggedIn, username, showLoginForm, showRegisterForm, logout, isAdmin } = this.props;
        const collapsed = this.state.collapsed;
        const toggleClass = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        return (
            <div className='container'>
                <nav className="row navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to='/'>Product Search</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>this.toggleNavbar()}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={toggleClass} id="navbarNav">
                        <ul className="navbar-nav">
                            {isAdmin && <li className="nav-item active">
                                <NavLink className="dropdown-item" to='/product-manage'>Manage Product</NavLink>
                            </li>}
                            <li className="nav-item active">
                                <NavLink className="dropdown-item" to={`/store/${username}`}>My Store</NavLink>
                            </li>
                            {!loggedIn && <li className="nav-item active">
                                <NavTag className="dropdown-item" onClick={() => showLoginForm()}>Login</NavTag>
                            </li>}

                            {!loggedIn && <li className="nav-item active">
                                <NavTag className="dropdown-item" onClick={() => showRegisterForm()}>Register</NavTag>
                            </li>}
                        </ul>
                    </div>
                    {loggedIn && <div>Welcome! <UserInfoBtn>{username}</UserInfoBtn><NavLink  to='/' onClick={() => logout()}>Logout</NavLink></div>}
                </nav>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.login.loginStatus.loggedIn,
        username: state.userInformation.username,
        isAdmin:state.userInformation.hasOwnProperty('isAdmin')
    }
}


const connectedNavBar = withRouter(connect(mapStateToProps, actions)(NavBar));

export { connectedNavBar as NavBar }

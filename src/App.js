import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from './_actions/index';
import { ProductManage } from './AdminManagePage';
import { Home } from './HomePage';
import { NavBar } from './containers/NavBar';
import { MyStore } from './MyStorePage';



class App extends Component {
  componentDidMount() {
    const { getUserInformation } = this.props;
    getUserInformation()
  }
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path='/product-manage' component={ProductManage} />
            <Route path='/store/:username' render={props => <MyStore {...props}></MyStore>} />
            <Route exact path='/' component={Home} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

const connectedApp = withRouter(connect(null, actions)(App));

export { connectedApp as App };

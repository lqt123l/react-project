import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {ProductManage} from './AdminManagePage';
import {Home} from './HomePage';
import {NavBar} from './containers/NavBar';


const App = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <main className="container">
        <Switch>
          <Route path='/product-manage' component={ProductManage} />
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

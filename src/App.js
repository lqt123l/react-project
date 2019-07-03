import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductManage from './containers/productManage';
import Home from './containers/home';
import NavBar from './containers/navBar';


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

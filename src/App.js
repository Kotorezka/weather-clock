  
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";



import './App.css';

import Home from './pages/Home';
import Time from './pages/Time';
import Weather from './pages/Weather';


class App extends Component {
  render() {
    const { history } = this.props

    
    return (
      <div className="App">
        
        <Switch>
        <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/time' component={Time} />
          <Route history={history} path='/weather' component={Weather} />
          <Redirect from='/' to='/Home'/>
        </Switch>
        
      </div>
    );
  }
}

export default withRouter(App)

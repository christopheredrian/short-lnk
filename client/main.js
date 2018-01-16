import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/links" component={Link}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

/**
 * When meteor is ready
 */
Meteor.startup(function(){
  /**
   * React router
   */
  ReactDOM.render(routes, document.getElementById("app"));
});

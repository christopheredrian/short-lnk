import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';

const unauthenticatedPages = ['/', 'signup'];
const authenticatedPages = ['/links'];

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
 * A method for tracking variables
 */
Tracker.autorun(() => {
  const pathname = history.location.pathname
  const isAuthenticated = !!Meteor.userId(); // make boolean
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  // this.props.history.push('/logout');
  console.log("isAuthenticated",isAuthenticated);
  console.log("pathname",pathname);
  console.log(history);
  if(isUnauthenticatedPage && isAuthenticated){
    history.push('/links');
  }
  if (isAuthenticatedPage && !isAuthenticated) {
    history.push('/');
  }

});

/**
 * When meteor is ready
 */
Meteor.startup(function(){
  /**
   * React router
   */
  ReactDOM.render(routes, document.getElementById("app"));
});

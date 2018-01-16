import React from 'react';
import {withRouter} from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
class Link extends React.Component{

  logoutHandler(){
    // this.props.history.push('/logout');
    Accounts.logout();
  }

  render(){
    return (
      <div>
        <p>Link component here..</p>
        <button onClick={this.logoutHandler.bind(this)}>Logout</button>
      </div>

    );
  }
}

export default withRouter(Link);

import React from 'react';
import {withRouter} from 'react-router-dom';

class Link extends React.Component{

  logoutHandler(){
    this.props.history.push('/logout');
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

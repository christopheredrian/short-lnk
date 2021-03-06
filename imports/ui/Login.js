import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    // Note: Properties for this component
    this.state = {
      error: ''
    };
  }

  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword({ email }, password, (err) => {
      console.log("login callback", err);
    });
  }

  render(){
    return(
      <div>
        <h1>Login to Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref="email" type="email" name="email" placeholder="Email"/>
          <input ref="password" type="password" name="password" placeholder="Password"/>
          <button>Login</button>
        </form>
        <Link to="/signup">Don't have an account?</Link>
      </div>
    );
  }
}

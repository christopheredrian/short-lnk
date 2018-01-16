import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component{
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

    Accounts.createUser( {email,  password} , (err) =>{
      console.log("Signup callback", err);
    });
    // this.setState({
    //   error: 'Server error'
    // });
  }



  render(){
    return (
      <div>
        <h1>Join Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref="email" type="email" name="email" placeholder="Email"/>
          <input ref="password" type="password" name="password" placeholder="Password"/>
          <button>Create account</button>
        </form>
        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}

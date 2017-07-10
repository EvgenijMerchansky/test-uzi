import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link , Redirect } from 'react-router-dom';

import { userCheck } from '../actions/baseAction';

class Login extends Component {
  constructor(props) {
    super(props)
  }

  loginCheck(e){

    e.preventDefault();
    this.props.userCheck(this.inputNewLogin.value, this.inputNewPassword.value);

  }

  render(){

    return(
      <div>
        <div>
          <form onSubmit={this.loginCheck.bind(this)}>
            <input ref={(input) => {this.inputNewLogin = input}} type="text"  placeholder="type new login" name="new-login"></input><br/><br/>

            <input ref={(input) => {this.inputNewPassword = input}} type="password" placeholder="type new password" name="password"></input><br/>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return{
    login: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userCheck
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

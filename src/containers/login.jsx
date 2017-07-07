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
    console.log(this);
    const redirect = this.props.login.registerReducer.redirect;
    // console.log(redirect)

    return(
      <div>
        <div>
          <form onSubmit={this.loginCheck.bind(this)}>
            <input ref={(input) => {this.inputNewLogin = input}} type="text"  placeholder="type new login" name="new-login"></input><br/><br/>
            {/* {messageLogin ? <div className="error">{messageLogin}</div> : null}<br/> */}

            <input ref={(input) => {this.inputNewPassword = input}} type="password" placeholder="type new password" name="password"></input><br/>
            {/* {messagePassword ? <div className="error">{messagePassword}</div> : null}<br/> */}

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

//            <button disabled={disabled == true ? true : false} type="submit">{disabled == true ? "Logined!" : 'login'}</button>

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

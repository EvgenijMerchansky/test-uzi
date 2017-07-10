import React, { Component } from 'react';
// import { modal } from 'react-redux-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { newUser } from '../actions/baseAction';
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this);
    const messageLogin = this.props.register.registerReducer.info.ErrorName,
          messagePassword = this.props.register.registerReducer.info.ErrorPassword,
          messageRePassword = this.props.register.registerReducer.info.ErrorRepassword,
          registrated = this.props.register.registerReducer.info.registrated;

    return(
      <div>
        <form onSubmit={(e) => {this.props.newUser(this.inputNewLogin.value, this.inputNewPassword.value, this.inputNewRePassword.value, e.preventDefault())}}>
          <input ref={(input) => {this.inputNewLogin = input}} type="text"  placeholder="type new login" name="new-login"></input><br/>
          {messageLogin ? <div className="error">{messageLogin}</div> : null}<br/>

          <input ref={(input) => {this.inputNewPassword = input}} type="password" placeholder="type new password" name="password"></input><br/>
          {messagePassword ? <div className="error">{messagePassword}</div> : null}<br/>

          <input ref={(input) => {this.inputNewRePassword = input}} type="password" placeholder="password again" name="repasword"></input><br/>
          {messageRePassword ? <div className="error">{messageRePassword}</div> : null}<br/>

          <button disabled={registrated == true ? true : false} type="submit">{registrated == true ? "Complete!" : 'Sign up'}</button><br/>
          {registrated == true ? <div><h4>Go to home page!</h4> <Link to="/"><img width="30" src={require('./../images/arrow.png')}/></Link></div> : null}
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    register: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    newUser
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);

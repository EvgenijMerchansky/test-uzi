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

    return( // короче для быстрой проверки пользователя на зарегистрирован или нет , Можно сделать еще один редюсер который будет получать всех зарегистрированых пользователей и потом по ним проходить во время проверки на залогинен или нет а экшен к этому редюсеру ,впилить в форму второй функцией по сабмиту
      <div>
        <form onSubmit={(e) => {this.props.newUser(this.inputNewLogin.value, this.inputNewPassword.value, this.inputNewRePassword.value, e.preventDefault())}}>
          <input ref={(input) => {this.inputNewLogin = input}} type="text"  placeholder="type new login" name="new-login"></input><br/>
          {messageLogin ? <div className="error">{messageLogin}</div> : null}<br/>

          <input ref={(input) => {this.inputNewPassword = input}} type="password" placeholder="type new password" name="password"></input><br/>
          {messagePassword ? <div className="error">{messagePassword}</div> : null}<br/>

          <input ref={(input) => {this.inputNewRePassword = input}} type="password" placeholder="password again" name="repasword"></input><br/>
          {messageRePassword ? <div className="error">{messageRePassword}</div> : null}<br/>

          <button disabled={registrated == true ? true : false} type="submit">{registrated == true ? "Registered!" : 'Register'}</button>
        </form>
      </div>
    )
  }
}

// на кнопку сабмит можно сделать редирект на главную ,типа как пользователь зарегистрировался

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

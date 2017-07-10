import React, { Component } from 'react';
import './header.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { modal } from 'react-redux-modal';

class Header extends Component{

  render(){

    return (
      <div className="header">

        {typeof this.props.header.loginReducer.name == 'undefined' ? '' :  `welcome! ${this.props.header.loginReducer.name} !`}<br/>

        <Link to={`/login-page`}>Login</Link>' '
        <Link to={`/register-page`}>Registration</Link><br/>
        <Link to={`/`}>Home</Link><br/>

      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    header: state
  }
}

export default connect(mapStateToProps)(Header);

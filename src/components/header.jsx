import React, { Component } from 'react';
import './header.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { modal } from 'react-redux-modal';

class Header extends Component{

  render(){

    const registerStete = this.props.header.registerReducer.info;

    return (
      <div className="header">

        {typeof this.props.header.loginReducer.name == 'undefined' ? '' :  `welcome! ${this.props.header.loginReducer.name} !`}<br/>

        {registerStete != '' ? null : <Link to={`/register-page`}>Sign up</Link>}

        <br/><Link to={`/`}>Home</Link><br/>

        {registerStete != '' ? <Link to={`/favourites`}>Favourites</Link> : null}<br/>
        {registerStete != '' ? <Link to={`/watch-later`}>Watch later</Link> : null}

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

import React, { Component } from 'react';
import './header.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { modal } from 'react-redux-modal';

class Header extends Component{
  // constructor() {
  //
  // }
  render(){
    console.log(this)
    // console.log(this.props.header.loginReducer.name)

    return (
      <div className="header">
        {typeof this.props.header.loginReducer.name == 'undefined' ? '' :  `welcome! ${this.props.header.loginReducer.name} !`}<br/>
        {/* <button>Sign in</button>
        <button disabled={true}>Sign out</button> */}
        <Link to={`/login-page`}>Login</Link>' '
        <Link to={`/register-page`}>Registration</Link><br/>
        <Link to={`/`}>Home</Link><br/>


        {/* <YourComponent/> */}
        {/* 2 links for modal (login and register) */}
        {/* base structure: */}
        {/* <Router>
          <div>
            <ul>
              <li><Link to="/">router test</Link></li>
              <li><Link to="/about">Header</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Slyapa}/>
            <Route path="/about" component={Header}/>
          </div>
        </Router> */}

      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    header: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // newUser
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

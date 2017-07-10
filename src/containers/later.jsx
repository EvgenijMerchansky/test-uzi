import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class WatchLater extends Component {
  constructor(props) {
    super(props)
  }
  
  render(){

    const dataWatchLater = this.props.watchLaterState,
          processingData = dataWatchLater.map((elem,index) => {

            return (
              <li key={index}><Link to={`${elem.alias}`}>{elem.title}</Link></li>
            )

          })

    return(
      <div>
        <h1>Watch later:</h1>
        <ul>{processingData}</ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    watchLaterState: state.laterReducer
  }
}

export default connect(mapStateToProps)(WatchLater)

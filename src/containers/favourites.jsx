import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Favourites extends Component {
  constructor(props) {
    super(props)
  }

  render(){

    const dataFave = this.props.favouritesState,
          faveList = dataFave.map((elem,index) => {

            return (
              <li key={index}><Link to={`${elem.alias}`}>{elem.title}</Link></li>
            )

          })

    return(
      <div>
        <h1>Favourites films:</h1>
        <ul>{faveList}</ul>
      </div>

    )
  }
}


function mapStateToProps(state){
  return{
    favouritesState: state.favouritesReducer
  }
}

export default connect(mapStateToProps)(Favourites)

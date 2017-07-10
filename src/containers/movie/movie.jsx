import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { like } from '../../actions/baseAction';

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render(){

    const movieArray = this.props.movieState,
          singleMovie = movieArray.map((elem, index) => {

            const alias = this.props.location.pathname.substr(11,10),
                  elementID = elem.id;

            if(alias == elementID){
              return (
                <div key={index}>
                  <h1>{elem.title}</h1>
                  <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}/>
                  <p>rate: {elem.popularity} <img width="13" src={require('./../../images/1600.png')}/></p>
                  <p>{elem.release_date}</p>
                  <p>{elem.overview}</p>
                  <q>language: {elem.original_language}</q><br/><br/>
                  {this.props.registerState == '' ? <p>Null</p>  :  <div><button onClick={() => {this.props.like(elem.vote_count)}}>Like + </button><span>{this.props.likeReducer > 0 ? this.props.likeReducer : elem.vote_count}</span></div>}
                  <br/><br/>
                  <Link to="/">Back</Link>
                </div>
              )
            }
          })

    return(
      <div>{singleMovie}</div>
    )
  }
}

function mapStateToProps(state){
  return{
    movieState: state.firstReducer,
    registerState: state.registerReducer.info,
    likeReducer: state.likeReducer.count
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    like
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);

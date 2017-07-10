import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { like, addLike, faveData, laterData } from '../../actions/baseAction';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  // * watch later method
  watch(){

    const aliasLater = this.props.location.pathname.substr(11,10),
          laterElems = this.props.movieState,
          processedLate = laterElems.map((elem,index) => {

            if(elem.id == aliasLater){

              const lateObj = {

                    title: elem.title,
                    alias: this.props.location.pathname

              }

              this.props.laterData(lateObj)

              return elem

            }

          })

  }

  // * add favorites method
  favorites(){

    const aliasFave = this.props.location.pathname.substr(11,10),
          fave = this.props.movieState,
          processedFave = fave.map((elem,index) => {

            if(elem.id == aliasFave){

              const faveObj = {

                    title: elem.title,
                    alias: this.props.location.pathname

              }

              this.props.faveData(faveObj)

              return elem

            }

          })

  }

  render(){

    const likeValue = this.props.likeReducer,
          movieArray = this.props.movieState,

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
                  {this.props.registerState == '' ? <h1>Log in to get more features!</h1> : <div><button onClick={() => {this.props.like(elem.vote_count); this.props.addLike()}}>Like ( +{elem.vote_count} )</button><button onClick={this.favorites.bind(this)}>Favorites</button><button onClick={this.watch.bind(this)}>Watch later</button> <h1><img width="25" src={require('./../../images/like.jpg')}/>{ likeValue }</h1></div>}
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
    like,
    addLike,
    faveData,
    laterData
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);

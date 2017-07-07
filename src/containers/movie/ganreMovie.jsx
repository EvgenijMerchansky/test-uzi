import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class GenreMovie extends Component {
  constructor(props) {
    super(props)
  }

  render(){

    // * === sorting for genreList === *

    const genreList = this.props.GenreMovie,
          processedGenreList = genreList.map((elem,index) => {

            const alias = this.props.location.pathname.substr(17,10),
                  elemId = elem.id;

            if(alias == elemId){

              return(

                <div key={index}>
                  <h1>{elem.original_title}</h1>
                  <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}/>
                  <p>rate: {elem.popularity} <img width="13" src={require('./../../images/1600.png')}/></p>
                  <p>{elem.release_date}</p>
                  <p>{elem.overview}</p>
                  <q>language: {elem.original_language}</q><br/><br/>
                  <Link to="/only-genre">Back</Link>
                </div>

              )

            }

          })

    // * === END sorting for genreList === *


    return(

      <div>{processedGenreList}</div>

    )

  }

}

function mapStateToProps(state){
  return{
    GenreMovie: state.onlyGanreReducer
  }
}

export default connect(mapStateToProps)(GenreMovie)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './childComp.css';

import { getData, change } from '../actions/baseAction';
import { ganres } from '../actions/actionGanreRequests';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// * === my imports === *

import Header from '../components/header.jsx';
import App from '../App';
import Movie from './movie/movie.jsx';

class Chlidr extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){

    this.props.inputState.firstReducer.length > 19 ? null : this.props.getData();
    this.props.ganres();

    this.props.inputState.onlyGanreReducer.length > 19 ? null : this.props.inputState.onlyGanreReducer;

  }

  render(){


    const items = this.props.genreState,
          wrappedItems = items.map((elem, index) => {
            console.log(elem);
            return(

              <option key={index} id={elem.id}>{elem.name}</option>

            )
          })

    const select = <select>{wrappedItems}</select>

    // === sort by genre list ===

    // const genreList = this.props.inputState.onlyGanreReducer,
    //       processedList = genreList.map((elem, index) => {
    //         return (
    //           <div className="film__card" key={index}>
    //
    //             <Link to={`/movie/id/:${elem.id}`}>{elem.original_title}</Link>
    //
    //             <img src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`}/>
    //             <p>rate: {elem.popularity} <img width="13" src={require('./../images/1600.png')}/></p>
    //             <p>{elem.release_date}</p>
    //             <p>{elem.overview}</p>
    //             <q>language: {elem.original_language}</q>
    //           </div>
    //         )
    //       })
    //
    // // === END sort by genre list ===
    //
    // // === all genres ===
    //
    // const allGenres = this.props.genreState,
    //       processedAllGenres = allGenres.map((elem,index) => {
    //
    //     return <Link to={`only-genre/${elem.name}`} className="ganre-item" key={index}>{elem.name}</Link>
    //
    //       })
    //
    // // === END all genres ===
    //
    // const filtered = this.props.filteredState;
    //
    // // === home page films ===
    // const homePFilms = this.props.inputState.firstReducer;
    // const wrappedFilms = homePFilms.map((elem,index) => {
    //
    //   return (
    //     <div className="film__card" key={index}>
    //
    //       <Link to={`/movie/id/:${elem.id}`}>{elem.title}</Link>
    //
    //       <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}/>
    //       <p>rate: {elem.popularity} <img width="13" src={require('./../images/1600.png')}/></p>
    //       <p>{elem.release_date}</p>
    //       <p>{elem.overview}</p>
    //       <q>language: {elem.original_language}</q>
    //     </div>
    //   )
    // })

    // === END home page films ===

    return(
      <div className='film'>
        {/* {processedAllGenres}<br/>
        <br/>
        <input placeholder="search" ref={(input) => {this.inputSearch = input}} name="search" onChange={() => {this.props.change(this.inputSearch.value, wrappedFilms)}}/><br/>
        {filtered.length > 0 ? filtered : wrappedFilms} */}

        genres: {select}  <button className="search-button">search</button>
        {/* {wrappedFilms} */}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    inputState: state,
    filteredState: state.sortReducer.filtered,
    genreState: state.genresReducer,
    onlyGanre: state.onlyGanreReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getData,
    change,
    ganres,
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Chlidr)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './childComp.css';

import { getData, change , tradeData} from '../actions/baseAction';
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

    this.props.inputState.length > 19 ? null : this.props.getData();
    this.props.ganres(this.props.inputState);

  }

  handleClick(){

    const filteredPro = this.props.tradeDataReducer[0].map((elem, index) => {

      console.log(elem)

      return (

        <div className="film__card" key={index}>

          <Link to={`/movie/id/:${elem.id}`}>{elem.original_title}</Link>

          <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}/>
          <p>rate: {elem.popularity} <img width="13" src={require('./../images/1600.png')}/></p>
          <p>{elem.release_date}</p>
          <p>{elem.overview}</p>
          <q>language: {elem.original_language}</q>
        </div>

      )

    })

    this.rend = filteredPro;

    this.forceUpdate();

  }

  dataFunc(){


    const selectedValue2 = this.select;

      const processedCurrentSelect = selectedValue2.value.split(' | ');

      const currentId = processedCurrentSelect[0];

      this.props.tradeData(currentId,this.props.inputState);

  }

  render(){

    console.log(this)

    const items_elemenst = this.props.genreState,
          wrapped_elemenst = items_elemenst.map((elem, index) => {

            const croppArr = this.props.genreState.splice(20,20);

            return <option key={index} id={elem.id}>{elem.id + ' | ' +  elem.name}</option>

          })

    const select = <select ref={(select) => {this.select = select}} onChange={this.dataFunc.bind(this)}>{wrapped_elemenst}</select>

    return(
      <div className='film'>

        genres: {select}  <button onClick={this.handleClick.bind(this)} className="search-button">search</button><br/><br/>

        <input ref={(input) => {this.inputSearch = input}} onChange={() => {this.props.change(this.inputSearch.value, this.rend)}}></input>

        {this.props.filteredState.length > 0 ? this.props.filteredState : this.rend}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    inputState: state.firstReducer,
    filteredState: state.sortReducer.filtered,
    genreState: state.genresReducer,
    onlyGanre: state.onlyGanreReducer,
    tradeDataReducer: state.tradeDataReducer,
    registerState: state.registerReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getData,
    change,
    ganres,
    tradeData,
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Chlidr)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './onlyGenre.css';

import { onlyGanre } from '../actions/actionGanreRequests';
import { changeGanreList } from '../actions/baseAction';

class OnlyGanre extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const location = this.props.location.pathname,
          processedPath = location.substr(12,12);

    this.props.onlyGanreState.length > 19 ? null : this.props.onlyGanre(processedPath);
  }

  render(){
    console.log(this);

    const filteredState = this.props.filteredState;

    const onlyGenre = this.props.onlyGanreState,
          processedGenre = onlyGenre.map((elem,index) => {

            return(
              <div className="film__card" key={index}>

                  <Link to={`/simple-film/id/:${elem.id}`}>{elem.original_title}</Link>

                <img src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`}/>
                <p>rate: {elem.popularity} <img width="13" src={require('./../images/1600.png')}/></p>
                <p>{elem.release_date}</p>
                <p>{elem.overview}</p>
                <q>language: {elem.original_language}</q>
              </div>
            )
          })

    return(
      <div>
        <input type="text" ref={(input) => {this.inputSearch = input}} onChange={() => {this.props.changeGanreList(this.inputSearch.value,processedGenre)}}></input>
        {filteredState.length > 0 ? filteredState : processedGenre}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    onlyGanreState: state.onlyGanreReducer,
    filteredState: state.sortReducer.filteredGenre
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

    changeGanreList,
    onlyGanre
    
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(OnlyGanre)

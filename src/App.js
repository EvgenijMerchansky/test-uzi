import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import registerServiceWorker from './registerServiceWorker';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Childr from './containers/childComp.jsx';
import Header from './components/header.jsx';
import Movie from './containers/movie/movie.jsx';
import Register from './containers/register.jsx';
import Login from './containers/login.jsx';
import OnlyGanre from './containers/onlyGenre.jsx';
import GenreMovie from './containers/movie/ganreMovie.jsx';

class App extends Component{
  render(){

    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={Childr}/>
            <Route path="/movie/id" component={Movie}/>
            <Route path="/login-page" component={Login}/>
            <Route path="/register-page" component={Register}/>
            <Route path="/only-genre" component={OnlyGanre}/>
            <Route path="/simple-film/id" component={GenreMovie}/>
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <App />
    </div>
  </Provider>,document.getElementById('root'));
registerServiceWorker();

export default App;

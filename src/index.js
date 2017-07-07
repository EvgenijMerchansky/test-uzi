import './index.css';
import App from './App';

import { combineReducers } from 'redux';
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// imported reducers
import firstReducer from './reducers/firstReducer';

const reducers = combineReducers({
  firstReducer,
  // somer
})

export default reducers;

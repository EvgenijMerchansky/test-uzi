import { createStore } from 'redux';

import { applyMiddleware } from 'redux';

import  logger  from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

import thunk from 'redux-thunk';
// const store = createStore(rootReducer,applyMiddleware(logger(),thunk));

const middleware = applyMiddleware(logger(),thunk);
const store = createStore(rootReducer,composeWithDevTools(middleware));

export default store

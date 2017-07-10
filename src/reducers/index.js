import { combineReducers } from 'redux';
import firstReducer from '../reducers/firstReducer';
import { reducer as modalReducer } from 'react-redux-modal';
import registerReducer from '../reducers/registerReducer';
import loginReducer from '../reducers/loginReducer';
import sortReducer from '../reducers/sortReducer';
import genresReducer from '../reducers/genresReducer';
import tradeDataReducer from '../reducers/tradeDataReducer';
import likeReducer from '../reducers/likeReducer';
import favouritesReducer from '../reducers/favouritesReducer';
import laterReducer from '../reducers/laterReducer';

const rootReducer = combineReducers({
  firstReducer,
  loginReducer,
  registerReducer,
  sortReducer,
  genresReducer,
  tradeDataReducer,
  likeReducer,
  favouritesReducer,
  laterReducer
})

export default rootReducer;

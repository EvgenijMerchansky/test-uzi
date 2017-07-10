import { combineReducers } from 'redux';
import firstReducer from '../reducers/firstReducer';
import { reducer as modalReducer } from 'react-redux-modal';
import registerReducer from '../reducers/registerReducer';
import loginReducer from '../reducers/loginReducer';
import sortReducer from '../reducers/sortReducer';
import genresReducer from '../reducers/genresReducer';
import onlyGanreReducer from '../reducers/onlyGanreReducer';
import tradeDataReducer from '../reducers/tradeDataReducer';

const rootReducer = combineReducers({
  firstReducer,
  loginReducer,
  registerReducer,
  sortReducer,
  genresReducer,
  onlyGanreReducer,
  tradeDataReducer,
})

export default rootReducer;

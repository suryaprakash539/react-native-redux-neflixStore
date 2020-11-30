import seasonReducer from './season';
import {combineReducers} from 'redux';

export default combineReducers({
  season: seasonReducer,
});

import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import ajaxReducer from './ajaxReducer';

export default combineReducers({
  searchReducer,
  ajaxReducer
});
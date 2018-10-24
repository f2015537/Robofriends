import { combineReducers } from 'redux';
import {searchRobots} from './searchReducer';

export default combineReducers({
  search: searchRobots
});
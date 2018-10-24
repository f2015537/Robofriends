import { combineReducers } from 'redux';
import {searchRobots} from './searchReducer';
import {requestRobots} from './ajaxReducer';

export default combineReducers({
  search: searchRobots,
  ajax: requestRobots
});
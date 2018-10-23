import { createStore } from 'redux'
import { searchRobots } from './reducers/searchReducer'

const store = createStore(searchRobots)

export default store
import { createStore,applyMiddleware } from 'redux'
import { searchRobots } from './reducers/searchReducer'
import { createLogger } from 'redux-logger'

const middleware = [createLogger()]
const store = createStore(searchRobots,applyMiddleware(...middleware))

export default store


import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import auth from './auth'
import loading from './loading'

export default combineReducers({
  todos,
  visibilityFilter,
  auth,
  loading
})

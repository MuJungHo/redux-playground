import { combineReducers } from 'redux'
import auth from './auth'
import loading from './loading'
import locale from './locale'
import theme from './theme'

export default combineReducers({
  auth,
  loading,
  locale,
  theme
})

import { combineReducers } from 'redux'
import auth from './auth'
import loading from './loading'
import locale from './locale'
import theme from './theme'
import drawer from './drawer'
import project from './project'
import media from './media'

export default combineReducers({
  auth,
  loading,
  locale,
  theme,
  drawer,
  project,
  media
})

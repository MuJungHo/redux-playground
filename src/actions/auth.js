import { postAuthApi } from '../apis/auth.js'
import { requestFinish, requestStart } from './loading.js'

const selectLocale = locale => ({
  type: 'SELECT_LOCALE',
  locale
})

const loginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  user
})

const loginFailed = () => ({
  type: 'LOGIN_FAILED'
})

export const doLogOut = () => {

  localStorage.removeItem('userToken')
  localStorage.removeItem('locale')
  return {
    type: 'USER_LOGOUT',
    userToken: ''
  }
}

export const doLogin = ({ email, passWord, locale }) => async dispatch => {

  dispatch(requestStart())
  
  try {
    const data = await postAuthApi({ email, passWord })

    if (data.message === 'SUCCESS') {
      dispatch(loginSuccess(data.user))
      dispatch(selectLocale(locale))
      localStorage.setItem('locale', locale)
      localStorage.setItem('userToken', data.user.userToken)
    } else {
      dispatch(loginFailed())
    }
    
    dispatch(requestFinish())
  } catch (e) {
    console.error(e)
  }
}

import { postAuthApi } from '../apis/auth.js'
import { requestFinish, requestStart } from './loading.js'


const loginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  user
})

const loginFailed = () => ({
  type: 'LOGIN_FAILED'
})

export const doLogOut = () => {

  localStorage.removeItem('userToken')

  return {
    type: 'USER_LOGOUT',
    userToken: ''
  }
}

export const doLogin = ({ email, passWord }) => async dispatch => {

  dispatch(requestStart())

  try {
    const data = await postAuthApi({ email, passWord })

    if (data.message === 'SUCCESS') {
      dispatch(loginSuccess(data.user))
      localStorage.setItem('userToken', data.user.userToken)
    } else {
      dispatch(loginFailed())
    }
    
    dispatch(requestFinish())
  } catch (e) {
    console.error(e)
  }
}

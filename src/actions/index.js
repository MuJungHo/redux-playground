import { postAuthApi } from '../apis/auth.js'

export const requestStart = () => ({
  type: 'REQUEST_START',
  isFetching: true
})

export const requestFinish = () => ({
  type: 'REQUEST_FINISH',
  isFetching: false
})

export const loginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  user
})

export const loginFailed = () => ({
  type: 'LOGIN_FAILED'
})

export const doLogin = ({ email, passWord }) => async (dispatch) => {
  dispatch(requestStart())
  try {
    const data = await postAuthApi({ email, passWord })
    data.message === 'SUCCESS'
    ? dispatch(loginSuccess(data.user))
    : dispatch(loginFailed())

    dispatch(requestFinish())
  } catch (e) {
    console.error(e)
  }
}

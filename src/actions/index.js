import { postAuthApi } from '../apis/auth.js'

let nextTodoId = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

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

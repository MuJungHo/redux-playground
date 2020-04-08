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

export const doLogin = ({ email, passWord }) => ({
  type: 'LOGIN_IN',
  email, 
  passWord 
})

// export const doLogin = ({ email, passWord }) => async (dispatch) => {
//   try {
//     const data = await postAuthApi({ email, passWord })
//     console.log(data)
//   } catch (e) {
//     console.error(e)
//   }
// }

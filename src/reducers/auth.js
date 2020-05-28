const defaultState = {
  id: '',
  displayName: '',
  email: '',
  projectDID: '',
  role: 0,
  permission: [],
  createUnixTimeStamp: 0,
  lastModifiedUnixTimeStamp: 0,
  lastLoginUnixTimeStamp: 0,
  userToken: 'token'
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...action.user }
    case 'LOGIN_FAILED':
      return state
    case 'USER_LOGOUT':
      return { ...state, userToken: action.userToken }
    default:
      return state
  }
}

export default auth

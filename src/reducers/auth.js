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
  userToken: ''
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {...action.user}
    case 'LOGIN_FAILED':
      return state
    default:
      return state
  }
}

export default auth

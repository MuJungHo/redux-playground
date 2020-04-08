const defaultState = {
  token: ''
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        token: 'isLogin'
      }
    case 'LOG_OUT':
      return defaultState
    default:
      return defaultState
  }
}

export default auth

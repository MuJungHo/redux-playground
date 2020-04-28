const defaultState = {
  isOpen: true
}
const drawer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HANDLE_DRAWER_OPEN':
      return { 
        isOpen: action.isOpen 
      }
    case 'HANDLE_DRAWER_CLOSE':
      return { 
        isOpen: action.isOpen 
      }
    default:
      return state
  }
}

export default drawer
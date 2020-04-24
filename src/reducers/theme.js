const defaultState = {
  menuBackgroundColor: localStorage.getItem('menuBackgroundColor') || '#212240'
}
const theme = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MENU_BACKGROUND_COLOR':
      return { 
        menuBackgroundColor: action.color 
      }
    default:
      return state
  }
}

export default theme
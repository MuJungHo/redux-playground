const defaultState = {
    locale: localStorage.getItem('locale') || 'en'
}
const locale = (state = defaultState, action) => {
    switch (action.type) {
      case 'SELECT_LOCALE':
        return { locale: action.locale }
      default:
        return state
    }
  }
  
  export default locale
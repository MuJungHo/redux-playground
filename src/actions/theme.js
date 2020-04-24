export const setMenuBackgroundColor = color => {
  localStorage.setItem('menuBackgroundColor', color)
  return  {
    type: 'SET_MENU_BACKGROUND_COLOR',
    color
  }
}

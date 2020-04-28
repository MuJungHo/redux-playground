export const closeDrawer = () => ({
  type: 'HANDLE_DRAWER_CLOSE',
  isOpen: false
})

export const openDrawer = () => ({
  type: 'HANDLE_DRAWER_OPEN',
  isOpen: true
})
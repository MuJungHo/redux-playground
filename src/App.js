import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import LoginPage from './views/LoginPage'
import DashBoardPage from './views/DashBoardPage'

export const store = configureStore()

const App = () => (
  <Provider store={store}>
    <LoginPage />
  </Provider>
)

export default App

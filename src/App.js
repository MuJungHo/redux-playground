import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AppRouter from './routers/AppRouter.js'
import LoginPage from './views/LoginPage.js'

export const store = configureStore()

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App

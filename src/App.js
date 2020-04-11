import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AppRouter from './routers/AppRouter.js'
import { IntlProvider } from 'react-intl'
import en from './i18n/en.js'
import zh from './i18n/zh.js'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import "./style/normalize.css"
import "./style/font.css"

export const store = configureStore()

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Noto',
      'Roboto'
    ].join(',')
  }
})

const App = () => (
  <ThemeProvider theme={theme}>
    <IntlProvider locale='en' messages={zh}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </IntlProvider>
  </ThemeProvider>
)

export default App

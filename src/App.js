import React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter.js'
import ConfigureStore from './configureStore.js'
import ConnectedIntlProvider from './configureIntlProvider.js'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import "./style/normalize.css"
import "./style/font.css"

export const store = ConfigureStore()

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Noto',
      'Roboto'
    ].join(',')
  }
})

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedIntlProvider >
        <AppRouter />
      </ConnectedIntlProvider>
    </ThemeProvider>
  </Provider>
)

export default App

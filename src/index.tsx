import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { amber, blueGrey } from '@mui/material/colors'

const store = setupStore()

const theme = createTheme({
  palette: {
    primary: { main: blueGrey[600], light: '#819ca9', dark: '#29434e' },
    secondary: { main: amber[700], light: '#ffd149', dark: '#c67100' },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// @ts-ignore
window.store = store

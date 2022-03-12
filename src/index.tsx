import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { orange } from '@mui/material/colors'

const store = setupStore()

const theme = createTheme({
  palette: {
    primary: { main: '#f5f5f6', light: '#fff', dark: '#c2c2c3' },
    secondary: { main: orange[800], light: '#ff9d3f', dark: '#b53d00' },
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

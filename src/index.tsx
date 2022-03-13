import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { setupStore } from 'store/store'
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blueGrey, orange } from '@mui/material/colors'

const store = setupStore()

const theme = createTheme({
  palette: {
    primary: { main: blueGrey[100], light: '#ffffff', dark: '#9ea7aa' },
    secondary: { main: orange[300], light: '#ffe97d', dark: '#c88719' },
  },
  typography: {
    allVariants: {
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: '0em',
      fontWeight: 500,
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       // root: {
  //       //   letterSpacing: '0.1em',
  //       // },
  //     },
  //   },
  // },
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

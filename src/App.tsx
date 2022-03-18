import React from 'react'
import AppBarCustom from './components/shared/appbars/AppBarCustom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import TypingTest from './components/screens/typing-test/TypingTest'
import Tutorial from './components/screens/tutorial/Tutorial'
import About from './components/screens/about/About'
import Page404 from './components/screens/page-404/Page404'
import { Container } from '@mui/material'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBarCustom />
        <Container
          maxWidth='lg'
          sx={{ height: '100vh', paddingTop: '70px', paddingBottom: '70px' }}
        >
          <Routes>
            <Route path='/' element={<TypingTest />} />
            <Route path='/tutorial' element={<Tutorial />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import AppBarCustom from './components/shared/appbars/AppBarCustom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import TypingTest from './components/screens/typing-test/TypingTest'
import Tutorial from './components/screens/tutorial/Tutorial'
import About from './components/screens/about/About'
import Page404 from './components/screens/page-404/Page404'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBarCustom />
        <Routes>
          <Route path='/' element={<TypingTest />} />
          <Route path='/tutorial' element={<Tutorial />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

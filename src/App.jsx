import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout'
import About from '../src/components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Layout />} ></Route>
        <Route exact path='about' element={<About />} ></Route>
        <Route exact path='contact' element={<Contact />} ></Route>
        <Route exact path='portfolio' element={<Portfolio />} ></Route>
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Wrapper from './components/Wrapper'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Wrapper>
    </>
  )
}

export default App

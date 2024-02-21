import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import Home from './Components/Home/Home'
import Signup from './Components/LoginSignup/Signup/Signup'
import Login from './Components/LoginSignup/Login/Login'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/home' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
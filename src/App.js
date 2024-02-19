import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'

// import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
// import Main from './Components/Main/Main'
// import Footer from './Components/Footer/Footer'
import Login from './Components/LoginSignup/Login'
import Signup from './Components/LoginSignup/Signup'



const App = () => {
  return (
    <>

    {/* <Login />
    <Signup/> */}
    {/* <Navbar/> */}
    <Home/>
    {/* <Main/>
    <Footer/> */}
    </>
  )
}

export default App
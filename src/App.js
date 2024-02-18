import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.css'

// import Navbar from './Components/Navbar/Navbar'
// import Home from './Components/Home/Home'
// import Main from './Components/Main/Main'
// import Footer from './Components/Footer/Footer'
import Login from './Components/LoginSignup/Login'
import Signup from './Components/LoginSignup/Signup'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>

    {/* <Login />
    <Signup/> */}
    {/* <Navbar/>
    <Home/>
    <Main/>
    <Footer/> */}
    {/* <LoginSignup /> */}
    </>
  )
}

export default App
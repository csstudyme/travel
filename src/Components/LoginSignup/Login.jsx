import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import './login.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {

  return (
    <>
    <section className="Login containers logsections">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>

          <div className="input-box">
            <input type="email" placeholder='Email' />
            <MdEmail className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' />
            <RiLockPasswordFill className='icon'/>
          </div>
          <div className="forgot">
            <a href='#'>Forgot password</a>
          </div>
          
          <button type='submit'>Login</button>
          <div className="register-link">
            <p>Don't have an account? <a><Link className='linkk' to='/signup'>Register</Link></a></p>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Login
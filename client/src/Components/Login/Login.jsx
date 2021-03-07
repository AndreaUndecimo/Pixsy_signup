import React from 'react'
import './Login.css'

import login_img from '../../assets/login_img.png'
import logo from '../../assets/pixsy_logo.png'

const Login = () => {
  return (
    <div className='login_wrapper'>
      <div className='image'>
        <img src={login_img} alt='login pixsy' id='login_img' />
      </div>
      <div className='login_form'>
        <div className='logo'>
          <img src={logo} alt='pixsy logo' />
        </div>
        <div className='action_call'>
          <h1>Start protecting your creative property in 10 minutes.</h1>
          <h3>
            Enter your email and we'll get right into searching for illegal
            usage of your images.
          </h3>
          <input
            type='email'
            className='email_input'
            placeholder='Enter your email'
          />
          <button type='submit' className='account_btn'>
            Create account
          </button>
          <p>
            Already have an account? <a href='/'>Login</a>
          </p>
        </div>
        <form></form>
      </div>
    </div>
  )
}

export default Login

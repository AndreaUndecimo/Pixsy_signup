import React, { useState, useContext } from 'react';
import { StateContext } from '../../globals/globalStore.reducer';
import './Login.css';

import login_img from '../../assets/login_img.png';
import logo from '../../assets/pixsy_logo.png';
import {
  completeAuthentication,
  registerUser,
} from '../../ApiServices/ApiClientRegister';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { dispatch } = useContext(StateContext);

  const saveEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email }).then((res) =>
        completeAuthentication(res.data)
      );
      dispatch({ type: 'isAuth', payload: true });
    } catch (error) {
      error.response?.data
        ? setError(error.response.data)
        : console.error(error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              className='email_input'
              placeholder='Enter your email'
              onChange={saveEmail}
            />
            <button type='submit' className='account_btn'>
              Create account
            </button>
          </form>
          <p>
            Already have an account? <a href='/'>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

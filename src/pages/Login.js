import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom';
import classes from '../styles/login.module.css';

const Login = ({ location }) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  // prevent ESLint location proptype error
  Login.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  // set variable (isSignup?) ✔️
  // if signup button is clicked, make it true ✔️
  // change title, + inputs if necessary to signup ✔️
  // if login clicked, or page reset, revert variable ✔️
  // if variable is true, change fetch endpoint ✔️

  useEffect(() => {
    // if this is Login
    // if (location.pathname === "/login") {
    //   setIsLogin(true)
    // }
    // console.log(isSignup)
  })

  const handleChangeToSignup = () => {
    setIsSignup(true);
  };

  const handleChangeToLogin = () => {
    setIsSignup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignup) {
      try {
        fetch('http://localhost:9027/login', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data === 'success') {
              history.push('/');
            }
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('this is signup');
    }
  };

  return (
    <div className={classes.Login}>
      <div className={classes.loginHero}>
        <nav className='flex justify-end w-screen p-5 fixed'>
          <Link to='/' className='hover:text-blue-500'>
            Home
          </Link>
        </nav>

        <div className='flex justify-center items-center h-screen'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-center items-center w-1/2 py-10 bg-white bg-opacity-70 shadow-2xl border border-white rounded-3xl'
          >
            <h1 className='text-5xl pt-6 tracking-widest'>
              {
                !isSignup
                ? "Login"
                : "Sign Up"
              }
            </h1>
            <label className='mt-6'>Email</label>
            <input
              value={email}
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              className='border border-black bg-transparent rounded px-5 py-3'
            />
            <label className='mt-6'>Password</label>
            <input
              value={password}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              className='border border-black bg-transparent rounded px-5 py-3'
            />
            <input
              className='border border-black bg-transparent cursor-pointer hover:opacity-50 rounded mt-6 px-5 py-2'
              type='submit'
              value='Login'
            />

            { !isSignup
              ? <div onClick={handleChangeToSignup} className="mt-5 text-green-500 cursor-pointer">Don&apos;t have an account? Signup here.</div>
              : <div onClick={handleChangeToLogin} className="mt-5 text-green-500 cursor-pointer">Return to login</div>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

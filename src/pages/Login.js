import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from '../styles/login.module.css';
import PropTypes from 'prop-types'

// TODO separate login and register

const Login = (props) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
        .then(user => {
          props.loadUser(user)
          history.push('/')
        })
    } catch(e) {
      console.log(e);
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
              Login
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
              value="Login"
            />

            <Link to="/register" className="mt-5 text-green-500 cursor-pointer">Don&apos;t have an account? Signup here.</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loadUser: PropTypes.func,
  updateSignInStatus: PropTypes.func
}

export default Login;

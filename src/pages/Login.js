import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from '../styles/login.module.css';
import PropTypes from 'prop-types'

const Login = (props) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState({});

  // prevent ESLint location proptype error
  // Login.propTypes = {
  //   location: PropTypes.shape({
  //     pathname: PropTypes.string.isRequired,
  //   }).isRequired,
  // };

  useEffect(() => {
    // console.log(isSignup)
  }, [])

  const handleChangeToSignup = () => {
    setIsSignup(true);
  };

  const handleChangeToLogin = () => {
    setIsSignup(false);
  };

  // const createUser = (user) => {
  //   setUserData(user)
  // };

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
          .then(user => {
            // TODO server is returning success instead of user data, which we need here -- fix server response
            console.log(user)
            props.loadUser(user)
          })
          // .then((data) => {
          //   if (data === 'success') {
          //     props.loadUser(data);
          //     console.log(data);
          //     history.push('/');
          //   }
          // });
      } catch(e) {
        console.log(e);
      }
    } else {
      if (email.length > 5 && password.length > 3) {
        try {
          fetch('http://localhost:9027/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          })
            .then((res) => res.json())
            .then((user) => {
              if (user) {
                setUserData(user);
                console.log(userData);
                history.push('/');
              }
            });
        } catch (e) {
          console.log(e);
        }
      } else {
        alert('Email or password is too short');
      }
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
              value={ !isSignup ? 'Login' : 'Sign Up'}
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

Login.propTypes = {
  loadUser: PropTypes.any
}

export default Login;

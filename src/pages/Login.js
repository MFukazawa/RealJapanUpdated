import React, { useState }from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom'
import classes from '../styles/login.module.css';

const Login = (props) => {
  // useEffect(() => {
  // fetch('http://localhost:9027')
  //   .then((res) => res.json())
  //   .then(console.log);
  // });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const handleSubmit = () => {
    console.log(email, password)
  }

  return (
    <div className={classes.Login}>
      <div className={classes.loginHero}>
        <nav className="flex justify-end w-screen p-5 fixed">
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </nav>

        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center w-1/2 py-10 bg-white bg-opacity-70 shadow-2xl border border-white rounded-3xl">
            <h1 className='text-5xl pt-6 tracking-widest'>Login</h1>
            <label className="mt-6">Email</label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black bg-transparent rounded px-5 py-3" />
            <label className="mt-6">Password</label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black bg-transparent rounded px-5 py-3" />
            <input
              onClick={handleSubmit}
              className="border border-black bg-transparent cursor-pointer hover:opacity-50 rounded mt-6 px-5 py-2"
              type="submit"
              value="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
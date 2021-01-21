import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import { useFetch } from '../utils/hooks.js'

// const [prefData, loading] = useFetch("../assets/prefectures.json")

const Home = ({ email, resetUser }) => {
  return (
    <>
      <nav className="flex justify-end m-5">
        { email.length === 0 ?

        <div>
          <Link to="/login" className="mr-4 hover:text-blue-500">Login</Link>
          <Link to="/register" className="hover:text-blue-500">Register</Link>
        </div>

        :
        <div>
          <span className="mr-4">{ email }</span>
          <button onClick={(e) => resetUser(e)}>Logout</button>
          {/* <button onClick={(e) => { updateSignInStatus(e, false); resetUser()}}>Logout</button> */}
        </div>
      }
      </nav>

      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl mt-10 mb-6'>Real Japan</h1>

      <main className='w-screen text-center'>
        <div className='p-4'>Enter your total price and area (m²)</div>
        <label htmlFor='price' />
        <input
          type='text'
          name='price'
          id='price'
          className='border border-black rounded mx-4 p-2'
        />
        <label htmlFor='area' />
        <input
          type='text'
          name='area'
          id='area'
          className='border border-black rounded mx-4 p-2'
        />

        <div className='w-screen'>
          <div className='p-4'>
            Enter your Prefecture, City, Neighborhood, and Property Type
          </div>

          <div className='flex flex-wrap justify-center items-center'>
            <label htmlFor='prefecture' />
            <select
              type='text'
              name='prefecture'
              id='prefecture'
              className='border border-black rounded m-4 p-2'
            >
              <option>hi</option>
            </select>

            <label htmlFor='city' />
            <input
              type='text'
              name='city'
              id='city'
              className='border border-black rounded m-4 p-2'
            />

            <label htmlFor='neighborhood' />
            <input
              type='text'
              name='neighborhood'
              id='neighborhood'
              className='border border-black rounded m-4 p-2'
            />

            <label htmlFor='property-type' />
            <input
              type='text'
              name='property-type'
              id='property-type'
              className='border border-black rounded m-4 p-2'
            />
          </div>
        </div>
        <button className='border rounded bg-blue-400 text-white px-10 py-2 mt-8'>
          Search
        </button>
      </main>
      <Link to="/report">To Report</Link>
      </div>
    </>
  );
}

Home.propTypes = {
  email: PropTypes.string,
  isSignedIn: PropTypes.bool,
  updateSignInStatus: PropTypes.func,
  resetUser: PropTypes.func
}

export default Home;
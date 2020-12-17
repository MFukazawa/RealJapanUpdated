import React, { useEffect } from 'react'
// import { app } from './styles/app.module.css'

function App() {
  useEffect(() => {
    fetch('http://localhost:9027')
      .then(res => res.json())
      .then(console.log)
  })

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <h1 className='text-5xl my-6'>Real Japan</h1>

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
            <input
              type='text'
              name='prefecture'
              id='prefecture'
              className='border border-black rounded m-4 p-2'
            />

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
        <button className="border rounded bg-blue-400 text-white px-10 py-2 mt-8">Search</button>
      </main>
    </div>
  );
}

export default App;

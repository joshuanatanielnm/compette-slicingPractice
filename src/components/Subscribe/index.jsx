import BackgroundSubscribe from './../../assets/subscribeBackground.svg'
import React from 'react'

export default function Subscibe() {
  return (
    <div className='flex justify-center pb-20 mx-2 mt-32'>
      <div
        className='w-full py-16 lg:w-1/2 rounded-2xl'
        style={{
          backgroundImage: `url(${BackgroundSubscribe})`,
          backgroundSize: `cover`,
        }}
      >
        <div className='text-center'>
          <h3 className='text-2xl text-white'>Subscribe New Job</h3>
          <p style={{ color: `#B0C3C9` }}>We promise never send you a spam</p>
        </div>
        <div className='flex flex-col justify-center m-2 mt-10 md:flex-row'>
          <input
            type='text'
            className='w-full py-4 md:w-80 px-7 rounded-xl md:rounded-r-none md:rounded-l-xl focus:outline-none'
            placeholder='Type your email address'
          />
          <button className='px-10 py-2 mt-3 text-yellow-700 bg-yellow-500 rounded-full md:mt-0 md:-ml-6 '>
            Count Me In
          </button>
        </div>
      </div>
    </div>
  )
}

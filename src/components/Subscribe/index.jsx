import BackgroundSubscribe from './../../assets/subscribeBackground.svg'
import React from 'react'

export default function Subscibe() {
  return (
    <div className='flex justify-center pb-20 mt-32'>
      <div
        className='px-64 py-16 rounded-2xl'
        style={{
          backgroundImage: `url(${BackgroundSubscribe})`,
          backgroundSize: `cover`,
        }}
      >
        <div className='text-center'>
          <h3 className='text-2xl text-white'>Subscribe New Job</h3>
          <p style={{ color: `#B0C3C9` }}>We promise never send you a spam</p>
        </div>
        <div className='flex justify-center mt-10'>
          <input
            type='text'
            className='py-4 w-80 px-7 rounded-l-xl focus:outline-none'
            placeholder='Type your email address'
          />
          <button className='px-10 -ml-6 text-yellow-700 bg-yellow-500 rounded-full'>
            Count Me In
          </button>
        </div>
      </div>
    </div>
  )
}

import LandingPageIlus from './../../assets/landingpage-illustration.png'
import React from 'react'

export default function Hero() {
  return (
    <div className='text-center'>
      <div className='pt-32 text-6xl font-semibold text-white'>
        <h1>Build Your Career.</h1>
        <h1>Grow Together & Faster.</h1>
      </div>
      <button className='px-8 py-3 text-lg font-bold text-yellow-700 bg-yellow-500 rounded-full mt-14 hover:bg-yellow-600 hover:text-yellow-800'>
        Explore Mine
      </button>
      <div className='flex justify-center mt-20'>
        <img src={LandingPageIlus} alt='' />
      </div>
    </div>
  )
}

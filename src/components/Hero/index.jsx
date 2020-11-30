import LandingPageIlus from './../../assets/landingpage-illustration.png'
import React from 'react'

export default function Hero() {
  return (
    <div className='text-center'>
      <div className='mt-24 text-6xl text-white'>
        <p>Build Your Career.</p>
        <p>Grow Together & Faster.</p>
      </div>
      <button className='px-8 py-3 text-lg font-bold text-yellow-700 bg-yellow-500 rounded-full mt-14'>
        Explore Mine
      </button>
      <div className='flex justify-center mt-20'>
        <img src={LandingPageIlus} alt='' />
      </div>
    </div>
  )
}

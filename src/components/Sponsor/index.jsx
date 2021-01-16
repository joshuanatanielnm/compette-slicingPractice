import Facebook from './../../assets/facebook-com.svg'
import Google from './../../assets/google-com.svg'
import Miscrosoft from './../../assets/microsoft-com.svg'
import React from 'react'
import Spotify from './../../assets/spotify-com.svg'

export default function Sponsor() {
  return (
    <div className='flex justify-center mt-12'>
      <div className='flex flex-wrap justify-center w-2/4'>
        <img src={Facebook} alt='' className='w-40 m-7' />
        <img src={Miscrosoft} alt='' className='w-40 m-7' />
        <img src={Google} alt='' className='w-40 m-7' />
        <img src={Spotify} alt='' className='w-40 m-7' />
      </div>
    </div>
  )
}

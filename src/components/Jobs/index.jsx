import React from 'react'
import TwitterIcon from './../../assets/twitter-icon.svg'
import GoogleIcon from './../../assets/google-icon.svg'
import AmazonIcon from './../../assets/amazon-icon.svg'
import LinkedinIcon from './../../assets/linkedin-icon.svg'
import Card from './../Card'

export default function Jobs() {
  return (
    <div className='container mx-auto mt-40'>
      <div className='font-semibold text-center'>
        <h2 className='text-5xl'>We help best people</h2>
        <h2 className='text-5xl'>like you across the world</h2>
      </div>
      <div className='flex justify-around mt-20 shadow-sm'>
        {/* CARD */}
        <Card
          img={TwitterIcon}
          company={'Twitter'}
          location={'Tropodo, Sidoarjo'}
          salary={'190'}
          position={'User-Experience Designer'}
        />
        <Card
          img={GoogleIcon}
          company={'Google'}
          location={'Cimahi, Bandung'}
          salary={'563'}
          position={'Expert Software Developer'}
        />

        <Card
          img={AmazonIcon}
          company={'Amazon'}
          location={'Ciputat, Jakarta'}
          salary={'921'}
          position={'User-Interface Designer'}
        />
        <Card
          img={LinkedinIcon}
          company={'LinkedIn'}
          location={'Parung, Bogor'}
          salary={'21'}
          position={'Human Resource Development'}
        />
        {/* CARD */}
      </div>
      <div className='w-full mt-10 text-center '>
        <button>VIEW MORE INCOMING JOBS</button>
      </div>
    </div>
  )
}

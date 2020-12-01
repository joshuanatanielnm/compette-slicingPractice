import React from 'react'
import BenefitImage from './../../assets/benefitimage.png'
import BenefitList from './BenefitList'

export default function index() {
  return (
    <div className='container mx-auto mt-20 '>
      <div className='flex justify-around'>
        <div className='flex self-center'>
          <img src={BenefitImage} alt='' />
        </div>
        <div>
          <div className='font-semibold'>
            <h2 className='text-5xl'>We help best people</h2>
            <h2 className='text-5xl'>like you across the world</h2>
          </div>
          {/* List */}
          <BenefitList />
          {/* End List */}
        </div>
      </div>
    </div>
  )
}

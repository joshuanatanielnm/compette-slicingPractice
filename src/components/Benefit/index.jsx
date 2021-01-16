import BenefitImage from './../../assets/benefitimage.png'
import BenefitList from './BenefitList'
import React from 'react'

export default function index() {
  return (
    <div className='container mx-auto mt-40'>
      <div className='flex justify-around'>
        <div className='self-center hidden lg:flex'>
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

import React from 'react'

export default function Card({ img, company, location, salary, position }) {
  return (
    <button className='w-1/4 px-8 py-10 mx-3 text-left bg-white rounded-2xl'>
      <div className='flex'>
        <div>
          <img src={img} alt='' />
        </div>
        <div className='ml-4'>
          <h3 className='text-2xl'>{company}</h3>
          <p className='text-lg text-gray-300'>{location}</p>
        </div>
      </div>
      <div
        className='text-5xl font-semibold mt-14'
        style={{ color: '#10495C' }}
      >
        ${salary}K{' '}
        <span className='text-xl font-normal text-black'>/ year</span>
      </div>
      <div className='w-10/12 text-2xl mt-14'>{position}</div>
      <div className='flex mt-3'>
        <div
          className='px-5 py-2 text-blue-700 rounded-lg bg-blue-'
          style={{ backgroundColor: '#EBFAFC', color: '#65D9E4' }}
        >
          FULL-TIME
        </div>
      </div>
    </button>
  )
}

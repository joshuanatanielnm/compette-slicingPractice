import React from 'react'

export default function Card({ img, company, location, salary, position }) {
  return (
    <button className='self-center p-6 mx-2 my-2 text-left bg-white lg:w-1/2 xl:w-1/4 rounded-2xl w-80 hover:bg-gray-300'>
      <div>
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
      </div>

      <div>
        <div className='w-9/12 h-24 text-2xl mt-14'>{position}</div>
        <div className='flex mt-3'>
          <div
            className='px-5 py-2 text-blue-700 rounded-lg bg-blue-'
            style={{ backgroundColor: '#EBFAFC', color: '#65D9E4' }}
          >
            FULL-TIME
          </div>
        </div>
      </div>
    </button>
  )
}

import React from 'react'

export default function Nav(num) {
  const { value } = num
  console.log(value)
  return (
    <nav className='group'>
      <button className='self-center block py-5 mx-3 text-xl text-gray-400 transition duration-300 md:mx-6 group-hover:text-yellow-500'>
        {value}
        <div className='h-0.5 group-hover:bg-yellow-500 mt-1 transition duration-500'></div>
      </button>
    </nav>
  )
}

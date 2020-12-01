import React from 'react'

export default function List(param) {
  console.log(param.value)
  console.log(param.circleColor)
  return (
    <div className='flex mt-7'>
      {/* Circle */}
      <div className='flex border-4 border-gray-800 rounded-full w-9 h-9'>
        <div className='flex self-center justify-center w-full'>
          {param.circleColor === 'black' ? (
            <div className='w-5 h-5 bg-gray-800 rounded-full'></div>
          ) : (
            <div className='w-5 h-5 bg-yellow-500 rounded-full'></div>
          )}
        </div>
      </div>
      {/* End Circle */}
      <div>
        <p className='ml-8 text-2xl'>{param.value}</p>
      </div>
    </div>
  )
}

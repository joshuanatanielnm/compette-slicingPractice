import List from './List'
import React from 'react'

export default function BenefitList() {
  const lists = [
    { value: 'Mastering work-life-balance', circleColor: 'black' },
    { value: 'Find the job based on your skills', circleColor: 'yellow' },
    { value: 'Helping preparing the paperwork', circleColor: 'black' },
    { value: '24/7 Best worker support', circleColor: 'yellow' },
    { value: 'Trusted payment protection', circleColor: 'black' },
  ]
  return (
    <div className='mt-14'>
      {lists.map((list, index) => (
        <List value={list.value} circleColor={list.circleColor} key={index} />
      ))}
      <button className='mt-10 text-xl underline'>
        LEARN MORE ABOUT OUR BENEFIT
      </button>
    </div>
  )
}

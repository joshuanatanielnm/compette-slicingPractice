import List from './List'
import React from 'react'

export default function BenefitList() {
  return (
    <div className='mt-14'>
      <List value='Mastering work-life-balance' circleColor='black' />
      <List value='Find the job based on your skills' circleColor='yellow' />
      <List value='Helping preparing the paperwork' circleColor='black' />
      <List value='24/7 Best worker support' circleColor='yellow' />
      <List value='Trusted payment protection' circleColor='black' />
    </div>
  )
}

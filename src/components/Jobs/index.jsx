import AmazonIcon from './../../assets/amazon-icon.svg'
import Card from './../Card'
import GoogleIcon from './../../assets/google-icon.svg'
import LinkedinIcon from './../../assets/linkedin-icon.svg'
import React from 'react'
import TwitterIcon from './../../assets/twitter-icon.svg'

export default function Jobs() {
  const jobs = [
    {
      img: TwitterIcon,
      company: 'Twitter',
      location: 'Tropodo, Sidoarjo',
      salary: '190',
      position: 'User-Experience Designer',
    },
    {
      img: GoogleIcon,
      company: 'Google',
      location: 'Cimahi, Bandung',
      salary: '563',
      position: 'Expert Software Developer',
    },
    {
      img: AmazonIcon,
      company: 'Amazon',
      location: 'Ciputat, Jakarta',
      salary: '921',
      position: 'User-Interface Designer',
    },
    {
      img: LinkedinIcon,
      company: 'LinkedIn',
      location: 'Cibubut, Gedangan',
      salary: '21',
      position: 'Human Resource Development',
    },
  ]
  console.log(jobs)
  return (
    <div className='container mx-auto mt-40'>
      <div className='font-semibold text-center'>
        <h2 className='text-5xl'>Our Feature Jobs</h2>
        <h2 className='text-5xl'>That Might You Need</h2>
      </div>
      <div className='flex flex-col mt-20 shadow-sm lg:justify-around lg:flex-row '>
        {/* CARD */}
        {jobs.map((value, index) => (
          <Card
            key={index}
            img={value.img}
            company={value.company}
            location={value.location}
            salary={value.salary}
            position={value.position}
          />
        ))}
        {/* CARD */}
      </div>
      <div className='w-full mt-10 text-center '>
        <button>VIEW MORE INCOMING JOBS</button>
      </div>
    </div>
  )
}

import React from 'react'
import VideoCard from './VideoCard'

const EmployeesVideoSection = () => {
  return (
    <div className='bg-white'>
        <div className='heading text-left text-3xl font-bold'>
            <h1>What our employees are saying</h1>
        </div>
        <div className='video-cards'>
            <VideoCard />
        </div>
    </div>
  )
}

export default EmployeesVideoSection
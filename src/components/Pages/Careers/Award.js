import React from 'react'
import awardPic from '../../assets/safe-employer-logo.jpg'
import RecognisePic from '../../assets/2022-NCR-Top-Employer.png';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';

export const Award = () => {
  return (
    <div className=''>
        <div className='mx-32 mt-6'>
            <h1 className='text-3xl font-bold text-stone-600 text-justify'>Awards and Recognition</h1>
            <div className='flex my-6'>
                <img src={awardPic} className='mr-8'/>
                <img src={RecognisePic}/>
            </div>
        </div>
        <div className='flex justify-center bg-red-700 pt-8 pb-12'>
        <div><p className='text-red-600 text-3xl mr-1'><BsFillArrowRightCircleFill className='bg-white rounded-full border-2 border-red-600'></BsFillArrowRightCircleFill></p></div>
            <div><p className='hover:text-gray-200 hover:no-underline cursor-pointer text-white font-bold ml-1 text-lg underline'><a href='https://careers.blood.ca/?locale=en&_ga=2.197709935.1513891702.1670055957-1694759038.1662808978&_gl=1*7ntds2*_ga*MTY5NDc1OTAzOC4xNjYyODA4OTc4*_ga_YHMRKTXXVD*MTY3MDA4OTI1My41Mi4wLjE2NzAwODkyNTQuMC4wLjA.'>Search all jobs</a></p></div>
        </div>
    </div>
  )
}

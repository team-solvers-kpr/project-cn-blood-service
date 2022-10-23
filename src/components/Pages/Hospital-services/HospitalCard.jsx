import React from 'react'
import { Link } from 'react-router-dom';
import cardImg from '../../assets/images/adaptability_0.png';

export const HospitalCard = ({
    img = cardImg,
    heading = 'txt',
    pragraph ='txt',
    readMore = 'text',
}) => {
  return (
    <div>
        <div className='bg-white'>
            <div className='cardImg'>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>{heading}</h1>
                <hr className='h-0 w-24  text-left rounded  bg-[#E7131A] border-solid border-2 border-[#E7131A]' />
                <p>{pragraph}</p>
                <Link to='/'>
                    {readMore}
                </Link>
            </div>
        </div>
    </div>
  )
}

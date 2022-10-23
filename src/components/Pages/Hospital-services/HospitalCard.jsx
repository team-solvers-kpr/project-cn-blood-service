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
    <div className='h-[810px] w-[416px]'>
        <div className='bg-white flex flex-col shadow-lg items-center'>
            <div className='cardImg h-48 w-48'>
                <img src={img} alt="" />
            </div>
            <div className='cardContent p-12 text-left'>
                <div>
                    <h1>{heading}</h1>
                    <hr className='h-0 w-24  rounded  bg-[#E7131A] border-solid border-2 border-[#E7131A]' />
                    <p>{pragraph}</p>
                </div>
                <div className=''>
                    <Link to='/'>
                        {readMore}
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

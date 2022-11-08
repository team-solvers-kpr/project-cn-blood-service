import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const HospitalCard = () => {
  const [ hospitalData, setHospitalData ] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('./hospitalcard.JSON');
      const data = await res.json();
      setHospitalData(data);
    }
    fetchData();

  }, []);
  return (
    hospitalData && hospitalData.map(data =>
      <div className='bg-white flex flex-col shadow-lg items-center' key={data.id}>
      <div className='cardImg h-48 w-48'>
          <img src={data.image} alt="" />
      </div>
      <div className='cardContent p-12 text-left'>
          <div>
              <h1 className='py-6'>
                  <span className='text-red-600 text-3xl font-bold'>{data.heading}</span>
              </h1>
              <hr className='h-0 w-24  rounded  bg-red-900 border-solid border-2 border-[#E7131A]' />
              <p className='py-6'>{data.pragraph}</p>
          </div>
          <div className='text-xl text-red-600 '>
              <Link to='/'>
                  {data.morelink} <AiOutlineArrowRight className='inline-block' />
              </Link>
          </div>
      </div>
  </div>)

  )
}

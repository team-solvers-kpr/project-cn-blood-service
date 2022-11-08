import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const HospitalRelatedInformation = () => {
  const [ hospitalRelatedData, setHospitalRelatedData ] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('./hospitalRelatedInformation.JSON');
      const data = await res.json();
      setHospitalRelatedData(data);
    }
    fetchData();

  }, []);
  return (
    hospitalRelatedData && hospitalRelatedData.map(data =>
      <div className='bg-white flex flex-col lg:border-r-2 border-b-2  items-center ' key={data.id}>
      <div className='cardContent p-12 text-left'>
          <div>
              <h1 className='py-6'>
                  <span className='text-2xl font-bold text-slate-700'>{data.heading}</span>
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

  )};

export default HospitalRelatedInformation;

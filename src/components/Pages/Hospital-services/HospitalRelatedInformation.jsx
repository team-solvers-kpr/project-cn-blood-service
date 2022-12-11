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
      <div className='  flex flex-col   items-center mb-10 ' key={data.id}>
        <div className='cardContent  p-6 text-left '>
          <div className="lg:border-l-2 pl-10 ">
          <div>
              <h1 className='py-6 '>
                  <span className='text-2xl font-bold text-slate-700'>{data.heading}</span>
              </h1>
              <hr className='h-0 w-24 rounded  bg-red-900 border-solid border-2 border-[#E7131A]' />
              <p className='py-6'>{data.pragraph}</p>
          </div>
          <div className='text-xl text-red-600 '>
              <Link to='/'>
                  {data.morelink} <AiOutlineArrowRight className='inline-block' />
              </Link>
          </div>
        </div>
        </div>
        
       
  </div>)
   
 

  )

};


export default HospitalRelatedInformation;

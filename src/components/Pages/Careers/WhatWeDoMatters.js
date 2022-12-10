import React from "react";
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import bgImage from '../../assets/img.jpg';


const WhatWeDoMatters = () => {
  return (
    <div className="md:flex ">
      <div className=" md:relative hidden md:block md:ml-48 ">
            <img src={bgImage} alt="" className=" 2xl:ml-96 2xl:h-96"/>
        </div>
        <div className=" md:absolute mt-2 p-1 lg:p-4 2xl:mx-32 lg:mt-8">
        
            <h1 className="lg:text-6xl text-5xl font-bold text-justify mb-4 text-stone-600">What we do matters</h1>
           <p className="text-stone-600 text-justify">Somewhere in Canada there’s a life you can save. Join <strong>Canada’s Lifeline</strong> today.</p>
            <div className="">
            <div className='flex mt-8' >
            <p className='text-red-600 text-3xl'><BsFillArrowRightCircleFill className='bg-white rounded-full border-2 border-red-600'></BsFillArrowRightCircleFill></p>
            <p className='text-red-600 underline text-justify mb-12 ml-2 mt-1 hover:text-red-800 hover:no-underline cursor-pointer'><a href='https://careers.blood.ca/?locale=en&_ga=2.38371171.1513891702.1670055957-1694759038.1662808978&_gl=1*1ry3ugc*_ga*MTY5NDc1OTAzOC4xNjYyODA4OTc4*_ga_YHMRKTXXVD*MTY3MDA1OTYxNS40OS4xLjE2NzAwNjAwODAuMC4wLjA.'>Search All Jobs</a></p>
        </div>
            </div>
        
        </div>
        {/* image div  */}
       
      
      
    </div>
  );
};

export default WhatWeDoMatters;

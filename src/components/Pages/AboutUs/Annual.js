import React from "react";
import {FaArrowRight} from 'react-icons/fa';
import babyPic from '../../assets/baby.png';



const Annual = () => {
  return (
    <div className="bg-white mx-28">
     <div className="flex">
     <div className="px-16 my-auto">
     <h1 className="text-3xl font-semibold text-justify mb-10 text-gray-700">Our annual reports</h1>
      <p className="text-lg  text-justify mb-4 text-gray-600">This year’s annual report, Changing Tomorrow, is about how we’re accelerating, adapting, rethinking and innovating to meet the future needs of Canadian health care.</p>
      <div className="flex">
      <p className="hover:text-red-800 hover:cursor-pointer text-lg  text-justify mb-4 text-red-600">2020-2021 Annual Report</p>
      <p className="cursor-pointer text-base mt-2 ml-1 mb-4 text-gray-100" style={{color:'#54c3bb'}}><FaArrowRight></FaArrowRight></p>
      </div>
      <div className="flex">
      <p className="hover:text-gray-300 cursor-pointer text-lg  text-justify mb-4 text-red-600">Other publication and reports</p>
      <p className="text-red-800 cursor-pointer text-base mt-2 ml-1 mb-4 text-gray-100" style={{color:'#54c3bb'}}><FaArrowRight></FaArrowRight></p>
      </div>
     </div>

     <div className="w-full"> 
        <img src={babyPic} className="w-full"/>
     </div>
     </div>
      
    </div>
  );
};

export default Annual;

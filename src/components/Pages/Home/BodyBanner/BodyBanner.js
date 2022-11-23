import React from "react";

import bgImage from '../../../assets/BodyBanner.png';


const BodyBanner = () => {
  return (
    <div className="flex">
      <div className="relative mt-6">
            <img src={bgImage} alt="" className="w-full"/>
        </div>
        
        <div className="absolute ">
        
        <h1 className="lg:text-6xl text-5xl font-bold text-justify mb-4 text-gray-700">About Canadian Blood <br></br> Services</h1>
        <h4 className="text-lg font-bold text-justify mb-4 text-black-700">We are Canada's Biological Lifeline.</h4>
        <p className="text-base text-justify text-gray-600 text-lg lg:w-1/2">We are the connection between donors and patients, healthcare professionals and medical researchers. We are nationally responsible for a secure system of life essentials for transfusion and transplantation that’s reliable, accessible and sustainable. Every day we work diligently to help save lives, restore health and earn the nation’s trust.</p>
        
      
    </div>
       
      
      
    </div>
  );
};

export default BodyBanner;

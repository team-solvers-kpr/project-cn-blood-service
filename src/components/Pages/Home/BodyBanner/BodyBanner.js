import React from "react";

import bgImage from '../../../assets/BodyBanner.png';


const BodyBanner = () => {
  return (
    <div className="flex justify-center">
      <div className="relative mt-6">
            <img src={bgImage} alt="" className="w-full"/>
        </div>
        
        <div className="absolute mt-20">
        
        
        <div>
        <h1 className="lg:text-4xl  font-medium text-gray-700"><strong>GIVING SOMETHING</strong></h1>
        <h1 className="lg:text-4xl  font-medium  mb-4 text-gray-700"><strong><span className="text-red-600">LIFESAVING</span> THIS HOLIDAY</strong></h1>
        <p className="lg:text-7xl text-5xl font-bold  text-gray-700">WILL MAKE ALL</p>
        <p className="lg:text-7xl text-5xl font-bold  text-gray-700">THE DIFFERENCE</p>
        </div>

        <div className="text-justify  flex justify-center">
        <button className="hover:bg-red-800 bg-red-600 lg:text-lg text-base font-semibold py-3 px-6 rounded-full mt-4" style={{color:'#fff'}}><a href="https://www.blood.ca/sites/default/files/our_brand_stakeholder/story.html"  target="_blank"
        rel="noopener noreferrer">Learn more</a> </button>
        </div>
        
      
        </div>
        
       
      
      
    </div>
  );
};

export default BodyBanner;

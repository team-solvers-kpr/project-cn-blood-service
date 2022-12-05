import React from "react";
import {FaArrowRight} from 'react-icons/fa';





const MiddlePartOne = () => {
  return (
 <div className="">
    <div className="lg:flex lg:justify-between">
        {/* left side  */}
    
       
    <div className="lg:w-1/2  px-28 py-12">
        <h1 className="hover:text-red-800 text-3xl font-bold cursor-pointer hover:no-underline text-red-700 text-justify"><a href="https://www.blood.ca/en/research/our-research-activities"> Our Research Funding Opportunities</a></h1>
        <p className="text-justify mt-10 text-base text-gray-600">
        The Centre for Innovation has multiple competitive funding programs open to Canadian researchers interested in pursuing projects focused on Canadian Blood Services priorities.
    </p>
    <div className="flex mt-6">
          
          <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-700 text-justify text-base font-semibold mt-1"><a href="https://www.blood.ca/en/research/our-research-funding-opportunities" target='_blank'  rel="noopener noreferrer">Learn more about our Research Funding Opportunities </a> </p></div>
          <div className="mt-2 ml-4"> <FaArrowRight className="text-cyan-400  text-sm "></FaArrowRight></div>
           
      
   </div>
   
 </div>
 {/* right side  */}
    <div className="bg-gray-100 lg:w-1/2 py-12 px-28">
    <h1 className=" lg:pl-28 hover:text-red-800 text-3xl font-bold cursor-pointer hover:no-underline text-red-700 text-justify"><a href="https://www.blood.ca/en/research/our-research-activities"> Products and Services for Researchers</a></h1>
    <p className="lg:px-28 text-justify mt-10 text-base text-gray-600">
    Discover more about products and services offered by Canadian Blood Services:
    </p>
    <div className="flex mt-6 lg:px-28">
          
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-700 text-justify text-base font-semibold mt-1"><a href="https://www.blood.ca/en/research/products-and-services-researchers" target='_blank'  rel="noopener noreferrer">Learn more about Products and Services for Researchers </a> </p></div>
           <div className="mt-2 ml-4"> <FaArrowRight className="text-cyan-400  text-sm "></FaArrowRight></div>
            
       
    </div>
 </div>
    </div>
 </div>
  );
};

export default MiddlePartOne;

import { Input } from "postcss";
import React from "react";





const Subscribe = () => {
  return (
 <div className="bg-gray-100">
    <div className="flex justify-between">
        {/* left side  */}
    <div className=" w-1/2 px-28 py-12">
    <h1 className="text-gray-600 text-4xl font-bold text-justify">Subscribe</h1>
    <p className="text-justify mt-4 text-base text-gray-600">
    The latest news, publications and events from Canadian Blood Services’ Medical Affairs and Innovation research and education network.
    </p>
    <div className="flex mt-6">
          
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-700 text-justify text-base font-semibold underline mt-1"><a href="https://us12.campaign-archive.com/home/?u=8fcd40bcdd74ee6eede38f01c&id=cc7f69014e" target='_blank'  rel="noopener noreferrer">View Past Issues </a> </p></div>
           
            
       
    </div>
 </div>
        {/* right side  */}
 <div className="w-1/2  px-28 py-12">
        <h1 className=" text-sm text-gray-500 text-justify">Email Address <span className="text-red-600">*</span></h1>
       
    <div className="flex mt-6">
          
          <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-700 text-justify text-base font-semibold mt-1"><a href="https://www.blood.ca/en/research/our-research-stories" target='_blank'  rel="noopener noreferrer">Learn more about Our Research Stories </a> </p></div>
         
           
      
   </div>
   
 </div>
    </div>
 </div>
  );
};

export default Subscribe;

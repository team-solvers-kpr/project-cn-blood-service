import React from "react";
import {FaArrowRight} from 'react-icons/fa';





const MiddlePartOne = () => {
  return (
 <div className="">
    <div className="flex justify-between">
        {/* left side  */}
    <div className="bg-gray-100 w-1/2 px-28 py-12">
    <h1 className="hover:text-red-800 text-3xl font-bold cursor-pointer hover:no-underline text-red-700 text-justify"><a href="https://www.blood.ca/en/research/our-research-activities"> Our Research Activities</a></h1>
    <p className="text-justify mt-10 text-base text-gray-600">
    Canadian Blood Services conducts and supports research projects in key priority areas that span the translational continuum from “bench to bed side.” The focus is on transfusion science and medicine but also related fields such as cellular therapies (in particular hematopoietic stem cell transplantations) and organ and tissue transplantation. Our research findings are published in peer-reviewed journals or directly shared with stakeholders.
    </p>
    <div className="flex mt-6">
          
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-700 text-justify text-base font-semibold mt-1"><a href="https://www.blood.ca/en/research/our-research-activities" target='_blank'  rel="noopener noreferrer">Learn more about Our Research Activities </a> </p></div>
           <div className="mt-2 ml-4"> <FaArrowRight className="text-cyan-400  text-sm "></FaArrowRight></div>
            
       
    </div>
 </div>
        {/* right side  */}
 <div className="w-1/2  px-28 py-12">
        <h1 className="hover:text-red-800 text-3xl font-bold cursor-pointer hover:no-underline text-red-700 text-justify"><a href="https://www.blood.ca/en/research/our-research-activities"> Our Research Stories</a></h1>
        <p className="text-justify mt-10 text-base text-gray-600">
        Every project tells a story. Discover our research stories on RED, our research, education, and discovery blog. Read an overview of research findings and impacts in our Centre for Innovation progress reports and in our accessible research summaries.
    </p>
    <div className="flex mt-6">
          
          <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-700 text-justify text-base font-semibold mt-1"><a href="https://www.blood.ca/en/research/our-research-stories" target='_blank'  rel="noopener noreferrer">Learn more about Our Research Stories </a> </p></div>
          <div className="mt-2 ml-4"> <FaArrowRight className="text-cyan-400  text-sm "></FaArrowRight></div>
           
      
   </div>
   
 </div>
    </div>
 </div>
  );
};

export default MiddlePartOne;

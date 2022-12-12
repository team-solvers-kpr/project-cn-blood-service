import React from "react";
import {FaArrowRight} from 'react-icons/fa';





const MiddlePartThree = () => {
  return (
 <div className="">
    <div className="md:flex md:justify-between">
        {/* left side  */}
    <div className="bg-gray-100 md:w-1/2 px-28 py-12">
    <h1 className="hover:text-red-800 text-3xl font-bold cursor-pointer hover:no-underline text-red-700 text-justify"><a href="https://www.blood.ca/en/research/our-research-activities"> Contract Research and Technology Transfer</a></h1>
    <p className="text-justify mt-10 text-base text-gray-600">
    An important role of Canadian Blood Services is to build long-term capacity in the fields of transfusion and transplantation science and medicine to ultimately benefit patients. To do this, Canadian Blood Services contributes to the development of educational tools, knowledge dissemination tools, and best and leading practices. Visit our professional education website to access these resources.
    </p>
    <div className="flex mt-6">
          
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-700 text-justify text-base font-semibold mt-1"><a href="https://www.blood.ca/en/research/contract-research-and-technology-transfer" target='_blank'  rel="noopener noreferrer">Read more about Contract Research and Technology Transfer </a> </p></div>
           <div className="mt-2 ml-4"> <FaArrowRight className="text-cyan-400  text-sm "></FaArrowRight></div>
            
       
    </div>
 </div>
        {/* right side  */}
 <div className="md:w-1/2  px-28 py-12">
        <h1 className="hover:text-red-800 text-3xl font-bold cursor-pointer hover:no-underline text-red-700 text-justify"><a href="https://www.blood.ca/en/research/our-research-activities"> Leading Practices and Educational Resources</a></h1>
        <p className="text-justify mt-10 text-base text-gray-600">
        An important role of Canadian Blood Services is to build long-term capacity in the fields of transfusion and transplantation science and medicine to ultimately benefit patients. To do this, Canadian Blood Services contributes to the development of educational tools, knowledge dissemination tools, and best and leading practices. Visit our professional education website to access these resources.
    </p>
    <div className="flex mt-6">
          
          <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-700 text-justify text-base font-semibold mt-1"><a href="https://www.blood.ca/en/research/leading-practices-and-educational-resources" target='_blank'  rel="noopener noreferrer">Read more about Leading Practices and Educational Resources </a> </p></div>
          <div className="mt-2 ml-4"> <FaArrowRight className="text-cyan-400  text-sm "></FaArrowRight></div>
           
      
   </div>
   
 </div>
    </div>
 </div>
  );
};

export default MiddlePartThree;

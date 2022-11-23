import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import bgImage from '../../assets/img.jpg';


const UpperPart = () => {
  return (
    <div className="lg:flex">
      <div className=" relative">
            <img src={bgImage} alt="" className="lg:py-32 lg:pl-60 "/>
        </div>
        <div className=" absolute p-10 lg:mx-32 lg:mt-32">
        
            <h1 className="text-6xl font-bold text-justify mb-4 text-gray-700">About Canadian Blood <br></br> Services</h1>
            <h4 className="text-lg font-bold text-justify mb-4 text-gray-700">We are Canada's Biological Lifeline.</h4>
            <p className="text-justify text-gray-600 text-lg w-1/2">We are the connection between donors and patients, healthcare professionals and medical researchers. We are nationally responsible for a secure system of life essentials for transfusion and transplantation that’s reliable, accessible and sustainable. Every day we work diligently to help save lives, restore health and earn the nation’s trust.</p>
            <div className="border-b-4 my-2 border-red-600 rounded-md w-32"></div>
          <div>
          <div className="flex">
           <div className="mt-4"> <AiOutlineArrowRight className="text-emerald-600 text-lg"></AiOutlineArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg  mt-2"><a href="https://www.blood.ca/en/about-us/publications-and-reports" target='_blank'  rel="noopener noreferrer">Who we are </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-4"> <AiOutlineArrowRight className="text-emerald-600 text-lg"></AiOutlineArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg  mt-2"><a href="https://www.blood.ca/en/about-us/publications-and-reports" target='_blank'  rel="noopener noreferrer">What we do </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-4"> <AiOutlineArrowRight className="text-emerald-600 text-lg"></AiOutlineArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg  mt-2"><a href="https://www.blood.ca/en/about-us/publications-and-reports" target='_blank'  rel="noopener noreferrer">Who we serve </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-4"> <AiOutlineArrowRight className="text-emerald-600 text-lg"></AiOutlineArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg  mt-2"><a href="https://www.blood.ca/en/about-us/publications-and-reports" target='_blank'  rel="noopener noreferrer">Our vision, mission & values </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-4"> <AiOutlineArrowRight className="text-emerald-600 text-lg"></AiOutlineArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg  mt-2"><a href="https://www.blood.ca/en/about-us/publications-and-reports" target='_blank'  rel="noopener noreferrer">Our governance </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-4"> <AiOutlineArrowRight className="text-emerald-600 text-lg"></AiOutlineArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg  mt-2"><a href="https://www.blood.ca/en/about-us/publications-and-reports" target='_blank'  rel="noopener noreferrer">Our commitment to diversity, equity & inclusion </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-4 "> <AiOutlineArrowRight className="text-emerald-600 text-lg"></AiOutlineArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg  mt-2"><a href="https://www.blood.ca/en/about-us/publications-and-reports" target='_blank'  rel="noopener noreferrer">Our annual report </a> </p></div>
            
       
            </div>
          </div>
        </div>
        {/* image div  */}
       
      
      
    </div>
  );
};

export default UpperPart;

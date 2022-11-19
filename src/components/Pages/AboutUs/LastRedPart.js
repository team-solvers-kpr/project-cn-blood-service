import React from "react";
import {FaArrowRight} from 'react-icons/fa';



const LastRedPart = () => {
  return (
    <div className="mb-4  px-16 py-6 " style={{backgroundColor:'#C4161C'}}>
      <div className="flex p-10">
     <div className="px-16">
     <h1 className="text-3xl font-bold text-justify mb-10 text-gray-100">Our governance</h1>
      <p className="text-base  text-justify mb-4 text-gray-100">We function as an independent, not-for-profit organization that operates at arm’s length from government, governed and guided by the principles of accountability, engagement and transparency. Learn more about our governance.</p>
      <div className="flex">
      <p className="hover:text-gray-300 hover:cursor-pointer text-lg  text-justify mb-4 text-gray-100">Executives and Board of Directors</p>
      <p className="hover:text-gray-300 hover:cursor-pointer text-base mt-2 ml-1 mb-4 text-gray-100"><FaArrowRight></FaArrowRight></p>
      </div>
      <div className="flex">
      <p className="hover:text-gray-300 hover:cursor-pointer text-lg  text-justify mb-4 text-gray-100">Board Meetings</p>
      <p className="hover:text-gray-300 hover:cursor-pointer text-base mt-2 ml-1 mb-4 text-gray-100"><FaArrowRight></FaArrowRight></p>
      </div>
     </div>

     <div className="px-16">
     <p className="text-3xl font-bold text-justify mb-10 text-gray-100">Our commitments to Diversity, Equity and Inclusion</p>
      <p className="text-base  text-justify mb-4 text-gray-100">Every day, generous donors across the country make a commitment to help save lives. Our commitment back to you — our donors, recipients, employees, stakeholders, partners, volunteers, and all those who wish to join<strong> Canada’s Lifeline</strong> — is to build and support a national transfusion and transplantation system that is diverse, equitable and inclusive for all.</p>
      <div className="flex">
      <p className="hover:text-gray-300 hover:cursor-pointer text-lg  text-justify mb-4 text-gray-100">Learn more about our commitments to Diversity, Equity and Inclusion</p>
      <p className="hover:text-gray-300 hover:cursor-pointer text-base mt-2 ml-1 mb-4 text-gray-100"><FaArrowRight></FaArrowRight></p>
      </div>
     </div>

     
      </div>
      
    </div>
  );
};

export default LastRedPart;

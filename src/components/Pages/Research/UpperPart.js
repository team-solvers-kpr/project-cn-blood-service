import React from "react";
import backgroundPic from '../../assets/blood-drops.jpg';
import {FaArrowRight} from 'react-icons/fa';



const UpperPart = () => {
  return (
    <div className="flex ">
        <div className="relative">
                <img src={backgroundPic} alt="" className="ml-16"/>
        </div>
        <div className="ml-32 absolute w-1/2 mt-10">
     <h1 className="lg:text-6xl text-5xl font-bold text-justify mb-4 text-gray-600 mb-10">Research</h1>
     <p className="text-justify text-base text-gray-600 mb-6 w-4/5">Canadian Blood Services drives world-class innovation in blood transfusion, cellular therapy, and transplantation — bringing clarity and insight to an increasingly complex health care future. In collaboration with an extended network of partners, our team fosters discovery and clinical research, conducts product and process development research, translates knowledge through leading practices, and builds capacity through training and education.</p>
     <div>
     <div class=" text-justify mb-1">
        <p className="text-gray-600 text-base text-justify ">
                  <a
                    href="https://www.blood.ca/en/research#subscribe"
                    class="hover:text-red-800 text-base font-bold underline mr-1 hover:no-underline text-red-600 text-justify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   Subscribe to our Research and Education Round Up Newsletter
                  </a>
                  to receive <br></br> monthly updates on our research and education activities. 
        </p>
                 
                
    </div>
    <div class=" text-justify mt-4">
        <p className="text-gray-600 text-base text-justify ">
                  <a
                    href="https://www.blood.ca/sites/default/files/CBS_I%26PM_Overview_2022_EN.pdf"
                    class="hover:text-red-800 text-base font-bold underline mr-1 hover:no-underline text-red-600 text-justify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   Read an overview of Innovation and Portfolio Management
                  </a>
                  or learn more <br></br> about research at Canadian Blood Services below. 
        </p>
                 
                
    </div>
     </div>

     <div className="border-b-4 my-2 border-red-600 rounded-md w-28 mt-8 "></div>

     <div className="mb-32">
          <div className="flex mt-4">
           <div className="mt-2 mr-4"> <FaArrowRight className="text-cyan-400 text-sm "></FaArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-base  mt-1"><a href="https://www.blood.ca/en/research/our-research-activities" target='_blank'  rel="noopener noreferrer">Our Research Activities </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-2 mr-4"> <FaArrowRight className="text-cyan-400  text-sm"></FaArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-base  mt-1"><a href="https://www.blood.ca/en/research/our-research-stories" target='_blank'  rel="noopener noreferrer">Our Research Stories </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-2 mr-4"> <FaArrowRight className="text-cyan-400  text-sm"></FaArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-base  mt-1"><a href="https://www.blood.ca/en/research/our-research-funding-opportunities" target='_blank'  rel="noopener noreferrer">Our Research Funding Opportunities </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-2 mr-4"> <FaArrowRight className="text-cyan-400  text-sm"></FaArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-base  mt-1"><a href="https://www.blood.ca/en/research/products-and-services-researchers" target='_blank'  rel="noopener noreferrer">Products and Services for Researchers</a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-2 mr-4"> <FaArrowRight className="text-cyan-400  text-sm"></FaArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-base  mt-1"><a href="https://www.blood.ca/en/research/contract-research-and-technology-transfer" target='_blank'  rel="noopener noreferrer">Contract Research and Technology Transfer </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-2 mr-4"> <FaArrowRight className="text-cyan-400  text-sm"></FaArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-base  mt-1"><a href="https://www.blood.ca/en/research/leading-practices-and-educational-resources" target='_blank'  rel="noopener noreferrer">Leading Practices and Educational Resources </a> </p></div>
            
       
            </div>
            <div className="flex">
           <div className="mt-2 mr-4"> <FaArrowRight className="text-cyan-400  text-sm "></FaArrowRight></div>
           <div className=" "> <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-base  mt-1"><a href="https://www.blood.ca/en/research/research-dissemination-resources" target='_blank'  rel="noopener noreferrer">Research dissemination resources </a> </p></div>
            
       
            </div>
          </div>
      
      
    </div>
    </div>
  );
};

export default UpperPart;

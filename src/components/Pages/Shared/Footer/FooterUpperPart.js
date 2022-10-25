import React from "react";
import image0 from '../../../assets/footerimage.png';
import Image1 from '../../../assets/appStore.png';
import Image2 from '../../../assets/playStore.png';
import { BsFacebook } from "react-icons/bs";

import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import { AiFillInstagram } from "react-icons/ai";
import {TiSocialLinkedinCircular  } from "react-icons/ti";


const FooterUpperPart = () => {
  return (
    <div>
      <div class="">
     
      
        <div class="flex ">
          <div class="flex flex-none w-96 mx-24">
            <div class="">
              <div><img src={image0} alt="" className="h-16 w-96"/></div>
              <div>
              <div className="">
      <div>
        <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg font-semibold mt-2"><a href="https://www.blood.ca/en/about-us/publications-and-reports" target='_blank'  rel="noopener noreferrer">HOSPITAL SERVICES </a> </p>
        </div>
        
       <div>
       <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg font-semibold" ><a href="https://www.blood.ca/en/about-us/media" target='_blank'  rel="noopener noreferrer">RESEARCH </a></p>
       </div>
      
       <div> 
         <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg font-semibold"><a href="https://www.blood.ca/en/about-us/policies" target='_blank'  rel="noopener noreferrer">CAREERS</a></p>
       </div>
 
      <div>
      <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg font-semibold"><a href="https://www.blood.ca/en/legal-information" target='_blank'  rel="noopener noreferrer">SHOP </a> </p>
      </div>
     
       <div>
       <p className="hover:text-red-800 cursor-pointer text-red-600 text-justify text-lg font-semibold"><a href="https://www.blood.ca/en/sitemap" target='_blank'  rel="noopener noreferrer">ABOUT US </a> </p>
       </div>
       
      </div>
              </div>
              <div class=" flex my-6 md:flex  ">
                <BsFacebook class="hover:text-red-600 text-gray-400 text-3xl mx-1 mt-1"></BsFacebook>
                <TiSocialLinkedinCircular class="hover:text-red-600 text-gray-400 text-5xl mx-1 pb-2 "></TiSocialLinkedinCircular>
                <AiFillTwitterCircle class="hover:text-red-600 text-gray-400 text-4xl mx-1"></AiFillTwitterCircle>
                <AiFillInstagram class="hover:text-red-600 text-gray-400 text-4xl mx-1"></AiFillInstagram>
                <IoLogoYoutube class="hover:text-red-600 text-gray-400 text-4xl mx-1"></IoLogoYoutube>
                <FaTiktok class="hover:text-red-600 text-gray-400 text-3xl mx-1 mt-1"> </FaTiktok>
                
                
              </div>
              {/* apple & goole app link  */}
              <div className="flex">
              <div className="mr-4"><a href="https://apps.apple.com/app/id804765636" target="_blank"  rel="noopener noreferrer"> <img src={Image1} alt="" className="h-10 w-32" /></a></div>
              <div><a  href="https://play.google.com/store/apps/details?id=ca.blood.giveblood" target="_blank"  rel="noopener noreferrer"><img src={Image2} alt="" className="h-10 w-32"/></a></div>

              </div>

            </div>
            
          </div>
          {/* border */}
          <div className="border-r border-gray-300"></div>
          {/* right part of FooterUpperPart starts */}
          <div class="flex grow justify-between ">
          
            <div class="m-4 mr-12 w-1/4">
              <div class="mb-4 ">
                <h3 className="text-red-600 text-justify">
                  <a
                    href="https://www.blood.ca/en/blood"
                    class="hover:text-gray-600 text-lg  font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BLOOD
                  </a>
                </h3>
              </div>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/blood/am-i-eligible-donate-blood"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Am I eligible to donate blood?
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/blood/donating-blood"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Donating blood
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/blood/donating-platelets"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donating platelets
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/blood/recognition-program"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Recognition program 
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/blood/sign-language-interpreting-services-deaf-deafened-and-hard-hearing-donors"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign language <br></br> interpreting services for Deaf, deafened and hard of hearing donors
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/blood/donor-centre-hours-locations"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donor centre hours & locations
                </a>
              </h5>
              <h5 className="text-justify mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/covid19"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COVID-19 information
                </a>
              </h5>
             
              
            </div>
            <div class="m-4 mr-12  w-1/4">
              <div class="mb-4 ">
                <h3 className="text-red-600 text-justify">
                  <a
                    href="https://www.blood.ca/en/plasma"
                    class="hover:text-gray-600 text-lg  font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PLASMA
                  </a>
                </h3>
              </div>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/plasma/securing-canadas-plasma-supply"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Securing Canada’s plasma supply
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/plasma/am-i-eligible-donate-plasma"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Am I eligible to donate plasma?
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/about-us/media/newsroom/plasma-and-blood-system-supply-chain"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plasma and the blood system supply chain
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/plasma/donating-plasma"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Donating plasma 
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/plasma/plasma-protein-and-related-products"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Plasma protein and related products
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/plasma/covid-19-and-convalescent-plasma"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COVID-19 convalescent plasma
                </a>
              </h5>
             
             
              
            </div>
            <div class="m-4 mr-12  w-1/4">
              <div class="mb-4 ">
                <h3 className="text-red-600 text-justify">
                  <a
                    href="https://www.blood.ca/en/stemcells"
                    class="hover:text-gray-600 text-lg  font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    STEM CELLS
                  </a>
                </h3>
              </div>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/stemcells/donating-stemcells"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adult stem cell registry
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/stemcells/donating-cordblood"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Cord blood bank
                </a>
              </h5>
              
             
              
            </div>
            <div class="m-4 mr-12  w-1/4">
              <div class="mb-4 ">
                <h3 className="text-red-600 text-justify">
                  <a
                    href="https://www.blood.ca/en/organs-tissues"
                    class="hover:text-gray-600 text-lg  font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ORGANS & TISSUES
                  </a>
                </h3>
              </div>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/covid19#qaotdt"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 COVID-19 information
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://profedu.blood.ca/en/organs-and-tissues?_ga=2.50824297.190895321.1666508260-1694759038.1662808978&_gl=1*197ctme*_ga*MTY5NDc1OTAzOC4xNjYyODA4OTc4*_ga_YHMRKTXXVD*MTY2NjY5MDMzMS4xNy4xLjE2NjY2OTUzMTguMC4wLjA."
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Professional Education Resources
                 
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://organtissuedonation.ca/en/learn?_ga=2.83226454.190895321.1666508260-1694759038.1662808978&_gl=1*1m3til0*_ga*MTY5NDc1OTAzOC4xNjYyODA4OTc4*_ga_YHMRKTXXVD*MTY2NjY5MDMzMS4xNy4xLjE2NjY2OTU1ODAuMC4wLjA."
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Education Portal for Teachers and Students
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/organs-tissues/living-donation"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Living Organ Donation
                </a>
              </h5>
              <h5 className="text-justify  mt-2 whitespace-normal">
                
                <a
                  href="https://www.blood.ca/en/organs-tissues/deceased-donation"
                  class="hover:text-red-600  text-gray-500 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Deceased donation
                </a>
              </h5>
             
             
              
            </div>
           
            

           
            
            
          </div>
        </div>
    </div>
    </div>
  );
};

export default FooterUpperPart;

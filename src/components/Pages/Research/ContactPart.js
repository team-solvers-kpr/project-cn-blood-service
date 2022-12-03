import React from "react";
import backgroundPic from '../../assets/blood-drops.jpg';




const ContactPart = () => {
  return (
    <div className="flex ">
         <div className="ml-32 absolute mt-10">
            <p>For general enquiries about research at Canadian Blood Services, please contact us at:</p>

</div>
        <div className="relative ml-32">
                <img src={backgroundPic} alt="" className="w-2/3 ml-96 px-14 "/>
        </div>
        <div className="ml-32 absolute mt-10">
            <p className="text-gray-700">For general enquiries about research at Canadian Blood Services, please contact us at:</p>
            <p className="text-gray-600 text-base text-justify mt-6">
                  <a
                    href="https://www.blood.ca/sites/default/files/CBS_I%26PM_Overview_2022_EN.pdf"
                    class="hover:text-red-800 text-base font-bold underline mr-1 hover:no-underline text-red-600 text-justify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   Innovation and Portfolio Management
                  </a>
                 
        </p>
       <div className="text-justify my-2">
       <p>Canadian Blood Services </p>
        <p>  1800 Alta Vista Drive   </p>
        <p> Ottawa, Ontario K1G 4J5</p>
       </div>
        <p className="text-gray-600 text-base text-justify ">
                  <a
                    href="mailto:centreforinnovation@blood.ca"
                    class="hover:text-red-800 text-base font-bold underline mr-1 hover:no-underline text-red-600 text-justify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  centreforinnovation@blood.ca
                  </a>
        </p>

</div>
       
    </div>
  );
};

export default ContactPart;

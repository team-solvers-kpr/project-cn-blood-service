import React from "react";
import image1 from '../../../../Asset/image1.png';
import image2 from '../../../../Asset/image2.png';
import image3 from '../../../../Asset/image3.png';
import image4 from '../../../../Asset/image4.png';


const HomeCard = () => {
   
  return (
   <div>
     <div className="bg-black h-screen flex justify-center items-center gap-x-16 text-white">
    <div className=" w-[300px] h-[420px] bg-transparent cursor-pointer group perspective ">
      <div className="relative preserve-3d group-hover:my-rotate-x-180 w-full h-full duration-1000  ">
        <div className="absolute backface-hidden border-2 w-full h-full" >
          <img src={image1} className=" w-full h-full "/>
        </div>
        <div className="absolute backface-hidden my-rotate-x-180  w-full h-full bg-gray-100 ">

        </div>

      </div>
    </div>
      
   
    </div>
   </div>
    
     
  );
};

export default HomeCard;

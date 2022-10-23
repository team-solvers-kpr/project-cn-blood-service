import React from "react";
import image1 from '../../../../Asset/image1.png';
import image2 from '../../../../Asset/image2.png';
import image3 from '../../../../Asset/image3.png';
import image4 from '../../../../Asset/image4.png';


const HomeCard = () => {
   
  return (
   <div>
     <div className="h-screen flex justify-center items-center gap-x-16 text-white">
    <div className=" w-[300px] h-[420px] bg-transparent cursor-pointer group perspective ">
      <div className="relative preserve-3d group-hover:my-rotate-x-180 w-full h-full duration-1000  ">
        {/* card front */}
        <div className="absolute backface-hidden border-t-2 w-full h-full" >
          <img src={image1} className=" w-full h-full "/>
        </div>
        {/* card back  */}
        <div className="absolute backface-hidden my-rotate-x-180 p-4  w-full h-full " style={{backgroundColor:'#E7131A'}}>
         <div className=" my-20">
         <h1 className="text-4xl font-semibold mb-2 px-16"> Blood for Life</h1>
          <p className="text-md">You can save lives and change many more.</p>
          <button className="hover:bg-gray-200 border-2 bg-white text-lg font-semibold p-2 rounded-full w-36 mt-4" style={{color:'#E7131A'}}>Book Now </button>
         </div>

        </div>

      </div>
    </div>
      
   
    </div>
   </div>
    
     
  );
};

export default HomeCard;

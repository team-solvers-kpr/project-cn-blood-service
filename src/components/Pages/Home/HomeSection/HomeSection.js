import React from "react";
import ReactPlayer from 'react-player'

const HomeSection = () => {
  return (
    <div className="flex mb-10 relative flex justify-end" style={{height:"500px"}}>
     <div className=" w-full " style={{backgroundColor:"#E7131A"}}>
       <div className="py-32 px-40">
       <h1 className="text-white text-4xl font-semibold mb-4 text-justify">
        Make All The Difference
        </h1>
        <p className="text-white text-lg font-normal mb-6 text-justify">
        The greatest human connection is made when we give to each other. Whether it’s time, knowledge, expertise, or a lifesaving donation. These connections are what make us Canada’s Lifeline.
        </p>
        <p className="text-white text-lg font-normal text-justify">
        Join us. You won’t just make a difference, you’ll make all the difference.
        </p>
       </div>
     </div>
     <div className=" w-full relative" style={{backgroundColor:"#419B96"}}>
        <div className="p-40">
        <p className="text-white text-lg font-normal mb-6 text-justify">
        The greatest human connection is made when we give to each other. Whether it’s time, knowledge, expertise, or a lifesaving donation. These connections are what make us Canada’s Lifeline.
        </p>
        <p className="text-white text-lg font-normal text-justify">
        Join us. You won’t just make a difference, you’ll make all the difference.
        </p>
        </div>
     </div>
     {/* for youtube  */}
     <div className='absolute mt-16 mr-40 ' >
      <ReactPlayer url='https://youtu.be/brAqVXrouGg'></ReactPlayer>
     </div>
      
    </div>
  );
};

export default HomeSection;

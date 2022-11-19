import React from "react";
import VideoModal from "../../../Modal/VideoModal";

const VideoSection = () => {
  return (
    <div className="lg:flex mb-10 lg:relative lg:justify-end" >
     <div className=" lg:w-full " style={{backgroundColor:"#E7131A"}}>
       <div className="lg:py-32 lg:px-40 p-4">
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
      {/* for youtube  */}
      <div className='' >
          <VideoModal  videourl={`https://www.youtube.com/embed/69pPYkGiEAQ`} images={`https://www.blood.ca/sites/default/files/styles/story_teaser/public/Stories-Main-Cameryn.jpg?itok=21krKG8T`} />

      </div>
     
     <div className=" lg:w-full lg:relative" style={{backgroundColor:"#419B96"}}>
        <div className="lg:p-40 p-4">
        <p className="text-white text-lg font-normal mb-6 text-justify">
          The greatest human connection is made when we give to each other. Whether it’s time, knowledge, expertise, or a lifesaving donation. These connections are what make us Canada’s Lifeline.
        </p>
        <p className="text-white text-lg font-normal text-justify">
        Join us. You won’t just make a difference, you’ll make all the difference.
        </p>
        </div>
     </div>
    </div>
  );
};

export default VideoSection;

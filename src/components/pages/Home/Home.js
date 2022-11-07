import React from "react";
import BannerCard from "./BannerCard/BannerCard";
import VideoSection from "./VideoSection/VideoSection";
import AboutUs from "../AboutUs/AboutUs";


const Home = () => {
  return (
    <div>
      <BannerCard></BannerCard>
      <VideoSection></VideoSection>
      <AboutUs></AboutUs>
      
    </div>
  );
};

export default Home;

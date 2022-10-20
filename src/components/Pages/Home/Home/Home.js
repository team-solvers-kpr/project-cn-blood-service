import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import BannerCard from "../BannerCard/BannerCard";
import BloodInventory from "../BloodInventory/BloodInventory";
import LatestCard from "../LatestCard/LatestCard";
import SearchFiled from "../SearchField/SearchFiled";
import VideoSection from "../VideoSection/VideoSection";
import WaysToDonate from "../WaysToDonate/WaysToDonate";

const Home = () => {
  return (
    <div>
      <SearchFiled></SearchFiled>
      <BannerCard></BannerCard>
      <VideoSection></VideoSection>
      <LatestCard></LatestCard>
      <BloodInventory></BloodInventory>
      <WaysToDonate></WaysToDonate>
      <Footer></Footer>
    </div>
  );
};

export default Home;
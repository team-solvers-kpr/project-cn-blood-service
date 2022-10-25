import React from "react";
import BannerCard from "../BannerCard/BannerCard";
import BloodInventory from "../BloodInventory/BloodInventory";
import BookDonationButton from "../BookDonationButton/BookDonationButton";
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
      <BookDonationButton></BookDonationButton>
    </div>
  );
};

export default Home;

import React from "react";
import BannerCard from "../BannerCard/BannerCard";
import BloodInventory from "../BloodInventory/BloodInventory";
import BookDonationButton from "../BookDonationButton/BookDonationButton";
import SearchFiled from "../SearchField/SearchFiled";
import VideoSection from "../VideoSection/VideoSection";
import OurLatestUpdate from "../LatestCard/OurLatestUpdate";
import WaysToDonate from "../WaysToDonate/WaysToDonate";
import BodyBanner from "../BodyBanner/BodyBanner";

const Home = () => {
  return (
    <div>
      <SearchFiled></SearchFiled>
      <BannerCard></BannerCard>
      <BodyBanner></BodyBanner>
      <VideoSection></VideoSection>
      <OurLatestUpdate></OurLatestUpdate>
      <BloodInventory></BloodInventory>
      <WaysToDonate></WaysToDonate>
      <BookDonationButton></BookDonationButton>
    </div>
  );
};

export default Home;

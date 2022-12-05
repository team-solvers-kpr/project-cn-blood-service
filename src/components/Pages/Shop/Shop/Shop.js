import React from "react";
import BestSeller from "../BestSeller/BestSeller";
import ShopAd from "../ShopAd/ShopAd";
import ShopBanner from "../ShopBanner/ShopBanner";
import ShopCategory from "../ShopCategory/ShopCategory";

const Shop = () => {
  return (
    <div className="mt-[168px]">
      <ShopBanner />
      <ShopAd />
      <ShopCategory />
      <BestSeller />
    </div>
  );
};

export default Shop;

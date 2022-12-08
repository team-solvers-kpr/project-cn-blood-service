import React from 'react';
import BestSeller from '../BestSeller/BestSeller';
import ShopAd from '../ShopAd/ShopAd/ShopAd';
import ShopBanner from '../ShopBanner/ShopBanner';
import ShopCategory from '../ShopCategory/ShopCategory/ShopCategory';

const Shop = () => {
    return (
        <div>
            <ShopBanner />
            <ShopAd />
            <ShopCategory />
            <BestSeller />
        </div>
    );
};

export default Shop;
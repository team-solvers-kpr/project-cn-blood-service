import React from 'react';
import ShopAd from '../ShopAd/ShopAd';
import ShopBanner from '../ShopBanner/ShopBanner';
import ShopCategory from '../ShopCategory/ShopCategory';

const Shop = () => {
    return (
        <div>
            <ShopBanner />
            <ShopAd />
            <ShopCategory />
        </div>
    );
};

export default Shop;
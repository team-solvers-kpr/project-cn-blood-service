import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/shop/bg.jpg'

const ShopBanner = () => {
    return (
        <Link to='/allProducts'>
            <img src={bg} alt="" width="100%" />
        </Link>
    );
};

export default ShopBanner;
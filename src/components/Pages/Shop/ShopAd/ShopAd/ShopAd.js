import React from 'react';
import './ShopAd.css';
import mug from '../../../../assets/shop/mug.png'
import { Link } from 'react-router-dom';
const ShopAd = () => {
    return (
        <div className='shopAddContainer'>
            <div className='textAndMugContainer md:container md:mx-auto'>
                <div className='textContainer' >
                    <h3 >Gifts that give back</h3>
                    <span className='borderSpan'></span><br />
                    <h3>Every dollar of your purchase supports critical programs and initiatives that connect patients with the life essentials they need to survive.</h3>
                    <Link to="/gifts"> <button className='shopNowBtn'>Shop now</button></Link>
                </div>
                <div className='mugContainer'>
                    <img src={mug} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShopAd;
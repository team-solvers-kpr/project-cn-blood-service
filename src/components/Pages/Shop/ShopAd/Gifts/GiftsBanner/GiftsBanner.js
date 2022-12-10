import React from 'react';
import mug from '../../../../../assets/shop/mug.png'

const GiftsBanner = () => {
    return (
        <>
            <h3 className='bestSellerTitle md:container md:mx-auto'>Gifts that give back</h3>
            <div className='shopAddContainer'>

                <div className='textAndMugContainer md:container md:mx-auto'>
                    <div className='textContainer' >
                        <h3 >Give a gift that makes lifesaving difference</h3>
                        <span className='borderSpan'></span><br />
                        <h3>Looking for a gift that saves or improves lives of patients across Canada? Every dollar of your purchase supports critical programs and initiatives that connect patients with the life essentials they need to survive.</h3>

                    </div>
                    <div className='mugContainer'>
                        <img src={mug} alt="" />
                    </div>
                </div>
            </div>
        </>

    );
};

export default GiftsBanner;
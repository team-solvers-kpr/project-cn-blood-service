import React from 'react';
import './ShopCategory.css'
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const ShopCategory = () => {

    return (
        <div className='shopCategory'>
            <div className='shopCategoryContainer md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center'>
                <center className="categoryCard ">

                    <img src="https://www.blood-shop.ca/assets/Stores/8e5d001e21a4d4e570fc3c315852b877/Imgs/eStore-icon-sections_apparel.jpg" alt="" height={150} width={150} />
                    <h2 className='categoryCardTitle'>Apparel</h2>
                    <span className='categoryBorderSpan'></span><br />
                    <Link to="/shopCategoryItemsApparel">  <p className='categoryCardBtn'>Shop now <   HiArrowRight className='shopArrow' /></p></Link>
                </center>
                <center className="categoryCard">

                    <img src="https://www.blood-shop.ca/assets/Stores/8e5d001e21a4d4e570fc3c315852b877/Imgs/eStore-icon-sections_bags.jpg" alt="" height={150} width={150} />
                    <h2 className='categoryCardTitle'>Events</h2>
                    <span className='categoryBorderSpan'></span><br />
                    <Link to="/shopCategoryItemsEvents">  <p className='categoryCardBtn'>Shop now <   HiArrowRight className='shopArrow' /></p></Link>
                </center>
                <center className="categoryCard">

                    <img src="https://www.blood-shop.ca/assets/Stores/8e5d001e21a4d4e570fc3c315852b877/Imgs/eStore-icon-sections_office.jpg" alt="" height={150} width={150} />
                    <h2 className='categoryCardTitle'>Office</h2>
                    <span className='categoryBorderSpan'></span><br />
                    <Link to="/shopCategoryItemsOffice">  <p className='categoryCardBtn'>Shop now <   HiArrowRight className='shopArrow' /></p></Link>
                </center>
                <center className="categoryCard">

                    <img src="https://www.blood-shop.ca/assets/Stores/8e5d001e21a4d4e570fc3c315852b877/Imgs/eStore-icon-sections_lifestyle.jpg" alt="" height={150} width={150} />
                    <h2 className='categoryCardTitle'>Drinkware</h2>
                    <span className='categoryBorderSpan'></span><br />
                    <Link to="/shopCategoryItemsDrinkware">  <p className='categoryCardBtn'>Shop now <   HiArrowRight className='shopArrow' /></p></Link>
                </center>
                <center className="categoryCard">

                    <img src="https://www.blood-shop.ca/assets/Stores/8e5d001e21a4d4e570fc3c315852b877/Imgs/eStore-icon-sections_sale.jpg" alt="" height={150} width={150} />
                    <h2 className='categoryCardTitle'>Accessories</h2>
                    <span className='categoryBorderSpan'></span><br />
                    <Link to="/shopCategoryItemsAccessories">  <p className='categoryCardBtn'>Shop now <   HiArrowRight className='shopArrow' /></p></Link>
                </center>
            </div>
        </div>
    );
};

export default ShopCategory;
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useState } from 'react';
import { useEffect } from 'react';
import './BestSeller.css';

const BestSeller = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('bestSeller.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='md:container md:mx-auto bestSellerContainer'>
            <h3 className='bestSellerTitle'>Best Seller</h3>
            <Swiper
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                breakpoints={{

                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {
                    products.map(product => <SwiperSlide key={product.code}>
                        <center className="bestSellerCard">
                            <img src={product.img} alt="" width="300px" />
                            <br />
                            <img src="https://manage.promobullitstores.com/assets/Stores/8e5d001e21a4d4e570fc3c315852b877/Imgs/eStore-icons-BestSeller-small.png" alt="" />
                            <br />
                            <p className="bestSellerCardName">{product.name}</p>
                            <p className="bestSellerCardCode">{product.code}</p>
                            <h5 className="bestSellerCardPrice">{product.price}</h5>
                        </center>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default BestSeller;
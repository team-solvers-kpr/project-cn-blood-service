import React, { useEffect, useState } from 'react';

const AllGifts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('giftShop.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <div className='md:container md:mx-auto '>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center'>
                    {
                        products.map(product => <div key={product.code} className="mb-20 mt-12">
                            <img src={product.img} alt="" height="213px" width="213px" />
                            <center className='mt-5 mb-5'>
                                <img src="https://manage.promobullitstores.com/assets/Stores/8e5d001e21a4d4e570fc3c315852b877/Imgs/eStore-icons-Blood-small.png" alt="" />
                            </center>
                            <p className="newSellerCardName">{
                                product.name.length > 35 ? <>
                                    {product.name.slice(0, 35)}...
                                </> : <>
                                    {product.name}
                                </>
                            }</p>
                            <h5 className="newSellerCardPrice">{product.price}</h5>
                            <p className="newSellerCardCode">{product.code}</p>
                        </div>)
                    }
                </div>

            </div>

        </>
    );
};

export default AllGifts;
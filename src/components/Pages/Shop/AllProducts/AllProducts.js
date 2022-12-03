import React, { useEffect, useState } from 'react';
import './AllProducts.css';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('newShop.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='md:container md:mx-auto '>
            <h3 className='allProductsTitle'>New</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center'>
                {
                    products.map(product => <div key={product.code} className="mb-20">
                        <img src={product.img} alt="" />
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
    );
};

export default AllProducts;
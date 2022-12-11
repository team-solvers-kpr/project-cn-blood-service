import React, { useEffect, useState } from 'react';

const ShopCategoryItemsOffice = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('shopCategoryItems.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <div className='md:container md:mx-auto '>
                <h3 className='allProductsTitle'>Office</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center'>
                    {
                        products.filter(category => category.category === "office").map(product => <div key={product.code} className="mb-20 mt-12">
                            <img src={product.img} alt="" height="213px" width="213px" />

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

export default ShopCategoryItemsOffice;
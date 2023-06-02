import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        fetch('products.json')
       .then(res => res.json())
       .then(data => console.log(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">

            </div>
            <div className="order-summary">

            </div>
        </div>
    );
};

export default Shop;
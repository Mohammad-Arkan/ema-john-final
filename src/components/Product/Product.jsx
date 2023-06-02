import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p className='price'> Price: ${price}</p>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='rating'>Rating {ratings}star</p>
            </div>
        </div>
    );
};

export default Product;
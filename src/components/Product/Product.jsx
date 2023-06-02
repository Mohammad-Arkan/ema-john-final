import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
const handleAdToCart ()=>{
console.log('add to cart click')
}

    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p className='price'> Price: ${price}</p>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='rating'>Rating {ratings}star</p>
            </div>
            <button className='addToCart'>Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />     
            </button>
        </div>
    );
};

export default Product;
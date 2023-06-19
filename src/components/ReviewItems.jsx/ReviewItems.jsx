import React from 'react';
import './ReviewItems.css'

const ReviewItems = ({product}) => {
    const {img, id ,price, name, quantity} = product
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-details'>
                <p className='review-title'>{name}</p>
                <p >Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity : <span className='orange-text'>${quantity}</span></p>
           </div>
           <div className='btn-delete'>D</div>
        </div>
    );
};

export default ReviewItems;
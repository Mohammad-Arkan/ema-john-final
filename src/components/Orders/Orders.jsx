import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems.jsx/ReviewItems';
import Cart from '../Cart/Cart'
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
const Orders = () => {
    const savedCart= useLoaderData()
    const [cart, setCart] = useState(savedCart)
    const handleRemoveCart = (id) => {
     const remaining =cart.filter(product => product.id !== id);
     setCart(remaining)
     removeFromDb(id)
    }
    // console.log(savedCart)
    const handleClearCart = ()=>{
      setCart([])
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
              <h1>Order review details</h1>
              {
                cart.map(product => <ReviewItems
                key={product.id}
                product={product}
                handleRemoveCart={handleRemoveCart}
                ></ReviewItems>)
              }
            </div>
            <div className='cart-container'>
              <Cart 
              cart ={cart}
              handleClearCart={handleClearCart}
              >
                <div className='review-order'>
                  <p>From Orders</p>
                  <FontAwesomeIcon className='review-order-icon' icon={faCreditCard} />
                </div>
              </Cart>
              
            </div>
        </div>
    );
};

export default Orders;
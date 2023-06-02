import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
       .then(res => res.json())
       .then(data => setProducts(data))
    },[])

    const handleAddToCart =(product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="order-info">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${cart.price}</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $114</p>
                    <h5>Grand Total: $1559</h5>
                </div>
            </div>
        </div>
    );
};

export default Shop;
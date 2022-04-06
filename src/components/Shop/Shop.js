import React, { useState } from 'react';
import products from '../../fakeData/products.json';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {

    return (

        <div className='shop-container'>
            <div className="product-container">    
                {
                    products.map(product => <Product product = {product}></Product>)
                } 
            </div>

            <div className="cart-container">
                <h3>cart container</h3>
            </div>


        </div>
    );
};

export default Shop;
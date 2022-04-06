import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, price, img, seller, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img}></img>
            </div>

            <div className='productDetails'>
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>

                <button className='addproductcart'> <i className='fa-solid fa-cart-circle-plus'></i> add to cart </button>
                

            </div>
        </div>
    );
};

export default Product;
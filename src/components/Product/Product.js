import React from 'react';
import './Product.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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

                <button onClick={() => props.handleAddProduct(props.product)} className='addproductcart'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart </button>
                
            </div>
        </div>
    );
};

export default Product;
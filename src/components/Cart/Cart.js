import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;

    let totalPrice = cart.reduce( (total, prd) => total + prd.price, 0);

    let shipping = 0;

    if(totalPrice > 0 && totalPrice <= 50)
    {
        shipping = 12.99;
    }
    else if(totalPrice > 50 && totalPrice <= 100)
    {
        shipping = 4.99;
    }
    else if(totalPrice > 100)
    {
        shipping = 0;
    }

    let tax = totalPrice/10;

    let grandTotal = totalPrice + tax + shipping;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Item : </h4>
            <p>Item Ordered : {cart.length}</p>
            <p>Tax : {formatNumber(tax)}</p>
            <p>Shipping Cost : {formatNumber(shipping)}</p>
            <p>Total Price : {formatNumber(grandTotal)}</p>
            <br />
            <Link to='/review'><button className='addproductcart'>Review Order</button></Link>
            
        </div>
    );
};

export default Cart;
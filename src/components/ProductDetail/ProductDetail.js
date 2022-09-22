import React from "react";
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from './../Product/Product';
import './ProductDetail.css';

const ProductDetail = () => {
    let {productkey} = useParams();
    const product = fakeData.find(pd => pd.key === productkey);
    return (
        <div className="container">
            <h4>Product Details: </h4>
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;
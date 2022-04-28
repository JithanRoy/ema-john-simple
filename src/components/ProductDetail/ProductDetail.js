import React from "react";
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from './../Product/Product';

const ProductDetail = () => {
    let {productkey} = useParams();
    const product = fakeData.find(pd => pd.key === productkey);
    console.log(product);
    return (
        <div>
            <h4>Product Details here: </h4>
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;
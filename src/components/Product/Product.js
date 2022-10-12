// import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = ({product}) => {
    const { name, logo } = product;
    
    return (
        <div className='product'>
            <img src={logo} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <button>Start practice</button>
            </div>
            {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> */}
        </div>
    );
};

export default Product;
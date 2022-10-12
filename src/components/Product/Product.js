// import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = ({ product }) => {
    const { id, name, logo, total } = product;
    return (
        <div className='product-info'>
            <img src={logo} alt="" />
            <div className='nameandtotal'>
                <p>{name}</p>
                <p>Total: {total}</p>
            </div>
            <Link to={`${name}/${id}`}>
                <button >Start Test</button>
            </Link>
        </div>
    );
};

export default Product;

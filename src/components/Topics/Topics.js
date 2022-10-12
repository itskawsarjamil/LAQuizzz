import React, { useEffect, useState } from 'react';
import './Topics.css';
// import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Topics = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setProducts(data.data))
    }, []);
    // const products=useLoaderData();
    return (
        <div>
            <div className='about'>
                <h2>Welcome to LAQuizzz</h2>
                <h5>Let's Assess yourself by Quizzz</h5>
            </div>
            <div className='product'>
                {
                    products.map
                        (
                            product => {
                                return <Product key={product.id} product={product}></Product>
                            }
                        )
                }
            </div>

        </div>
    );
};

export default Topics;
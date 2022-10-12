import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Topics = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // const products=useLoaderData();
    return (
        <div>
            <h3>Hellooo jdfjsdkjokdsfjlk </h3>
            {
                products.map
                    (
                        product => {
                            return <Product key={product.id} product={product}></Product>
                        }
                    )
            }
            {/* //map not working */}
        </div>
    );
};

export default Topics;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Product = () => {
    const loadProduct=useLoaderData()
    const {name}=useParams()
    
    const [products,setProducts]=useState(loadProduct)
    useEffect(()=>{
        if (name) {
            const filterProduct=[...loadProduct].filter(product=>product.category===name)
            setProducts(filterProduct)
        }
        else{
            setProducts(loadProduct)
        }

    },[loadProduct])
    
    return (
        <div>
            <h1>Product.{products.length}</h1>
        </div>
    );
};

export default Product;
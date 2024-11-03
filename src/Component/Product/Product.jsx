import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

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
        <div className='grid grid-cols-3 gap-5'>
            {
                products.map(product=><Card key={product.id} product={product} ></Card>)
            }
        </div>
    );
};

export default Product;
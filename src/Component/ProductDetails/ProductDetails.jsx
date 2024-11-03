import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
    const { name } = useParams();
    const loadProduct = useLoaderData();
    const [product, setProduct] = useState(null); 

    useEffect(() => {
        const filterData = loadProduct.find(product => product.title === name);
        setProduct(filterData);
    }, [loadProduct, name]);

   if (!product) {
    return <div className=""><span><span className="loading loading-bars loading-lg"></span></span></div>
    
    
   }
    
    const { rating, availability, Specification, description, price, category, product_image, title } = product;
    const reactRating={
        size: 30,
        value: rating,
        edit: false,
        isHalf:true,
      };

    return (
        <div className="mb-12 relative ">
            <div className='bg-common'>
                <div className="w-7/12 mx-auto text-center pt-12 pb-40">
                    <h1 className='text-4xl font-bold text-white'>Product Details</h1>
                    <p className='text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="bg-white w-10/12 shadow-xl mx-auto rounded-lg top-2/3 left-1/2 transform -translate-x-1/2 absolute">
                <div className="flex items-center gap-10  p-5">
                    <div className=" rounded-lg">
                        <img className='h-[500px] rounded-lg' src={product_image} alt={title} />
                    </div>
                    <div className='space-y-6'>
                        <h1 className='text-2xl font-bold'>{title}</h1>
                        <p className='text-lg'>Price: ${price}</p>
                        <div>
                            {
                                availability ?
                                    <h1 className='outline w-[100px] rounded-xl bg-gray-100 outline-green-500 text-green-500 text-center'>In Stock</h1> :
                                    <h1 className='outline w-[100px] rounded-xl bg-gray-100 outline-red-500 text-red-500 text-center'>Stock Out</h1>
                            }
                        </div>
                        <p className='text-[#09080F99]'>{description}</p>
                        <div>
                            <h1>Specification:</h1>
                            {
                                Specification && Specification.map((spi, index=1) => <h1 className='text-[#09080F99]' key={index}> ({index+1}) {spi}</h1>)
                            }
                        </div>
                        <div className="">
                            <h1>Rating <span><i class="fa-solid fa-square"></i></span></h1>
                            <div className="flex items-center space-x-10">
                             <ReactStars {...reactRating}></ReactStars> <h1 className='bg-gray-100 p-2 rounded-full'>{rating}</h1>
                            </div>
                        </div>
                        <div className="flex space-x-14">
                            <button className='space-x-4 bg-common px-4 text-white rounded-full'><span>Add To Card</span> <span><i class="fa-solid fa-cart-arrow-down"></i></span> </button>
                            <button className='h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center'><span><i class="fa-regular fa-heart"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

import React from 'react';

const Card = ({product}) => {
    const {title,price,product_image}=product
    return (
        <div>
            <div className="card card-compact bg-[#FFFFFF]  shadow-xl">
            <figure>
                <img className='h-52 w-full  rounded-lg'
                src={product_image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-[#09080F99] text-lg '>Price: {price}$</p>
                <div className="card-actions ">
                <button className="outline w-full rounded-xl py-2 text-bold px-2 outline-common text-common hover:bg-common hover:text-white">View Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;
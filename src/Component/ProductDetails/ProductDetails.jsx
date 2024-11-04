import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { cardContext, walletContext } from '../../Layout/LayOut';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { name } = useParams();
    const loadProduct = useLoaderData();
    const [wallet,setWallet]=useContext(walletContext)
    const [product, setProduct] = useState(null); 
    const [card,setCard]=useContext(cardContext)
    const navigate=useNavigate()
    
    useEffect(() => {
        const filterData = loadProduct.find(product => product.title === name);
        setProduct(filterData);
    }, [loadProduct]);

    const handleCardAdd=(item)=>{
        const newCard=[...card,item]
        
        
        
        
        const findData=card.find(card=>card.id===item.id)
        if (availability) {
            if (!findData) {
                setCard(newCard)
                setWallet(wallet+item.price)
                toast.success('successfully Added Card',{
                    position:'top-center'
                })
            }
            else{
                toast.error('sorry This product already added',{
                    position:'top-center'
                })
            }
        }else{
            toast.error('Sorry This product Stock Out',{
                position:'top-center'
            })
        }
        
        
        
        

    }
    console.log(wallet,'walltet');
    
   
    

   if (!product) {
    return <div className="text-center"><span><span className="loading loading-bars loading-lg"></span></span></div>
    
    
   }
    
    const { rating, availability, Specification, description, price, category, product_image, title } = product;
    console.log(product,'product log');
    
    const reactRating={
        size: 30,
        value: rating,
        edit: false,
        isHalf:true,
      };
      
    return (
        <div className="">
            <div className="mb-12 relative  ">
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
                                Specification && Specification.map((spi, index) => 
                                    <h1 className='text-[#09080F99]' key={index}> ({index + 1}) {spi}</h1>
                                )
                            }
                        </div> 
                        <div className="">
                            <h1>Rating <span><i class="fa-solid fa-square"></i></span></h1>
                            <div className="flex items-center space-x-10">
                             <ReactStars {...reactRating}></ReactStars> <h1 className='bg-gray-100 p-2 rounded-full'>{rating}</h1>
                            </div>
                        </div>
                        <div className="flex space-x-14">

                            <button onClick={()=>{handleCardAdd(product),navigate(-1)}} className='space-x-4 bg-common px-4 text-white rounded-full'><span>Add To Card</span> <span><i class="fa-solid fa-cart-arrow-down"></i></span> </button>


                            <button className='h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center'><span><i class="fa-regular fa-heart"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;

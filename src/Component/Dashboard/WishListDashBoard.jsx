import React, { useContext } from 'react';
import { wishListContext } from '../../Layout/LayOut';
import { toast } from 'react-hot-toast';
const WishListDashBoard = () => {
    const [wishList,setWishList]=useContext(wishListContext)
    const handleWishListRemove=(id)=>{
        const filterData=wishList.filter(item=>item.id!==id)
        setWishList(filterData)
        toast.success('Successfully Delate', { position: 'top-center' });
    }
    return (
        <div>
            {
                wishList.length<1 && <h1 className='text-center h-[300px] flex justify-center items-center text-5xl font-extrabold'><span>WishList Not Found</span> <span><i class="fa-solid fa-heart-circle-exclamation"></i></span></h1>
            }
            <div className="space-y-5 w-full mx-auto">
    {
        wishList.map((cardItem) =>
            <div key={cardItem.id} className='flex justify-between items-center border p-6 rounded-2xl shadow-xl bg-white'>
               
                <div className="">
                    <img className='w-[200px] h-[125px] rounded-lg' src={cardItem.product_image} alt={cardItem.title} />
                </div>

              
                <div className="flex-grow pl-5">
                    <h1 className='text-xl font-semibold'>{cardItem.title}</h1>
                    <p className='text-sm text-gray-600'>{cardItem.description}</p>
                    <h3 className='text-lg font-bold text-gray-800'>Price: ${cardItem.price}</h3>
                </div>

                
                <div onClick={()=>handleWishListRemove(cardItem.id)} className=" text-red-500 cursor-pointer hover:text-red-700 text-2xl">
                    <span><i className="fa-regular fa-circle-xmark"></i></span>
                </div>
            </div>
        )
    }
           </div>

        </div>
    );
};

export default WishListDashBoard;
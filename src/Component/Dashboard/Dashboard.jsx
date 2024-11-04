import React, { useContext, useState } from 'react';
import { cardContext, walletContext } from '../../Layout/LayOut';
import CartDashBoard from './CartDashBoard';
import WishListDashBoard from './WishListDashBoard';

const Dashboard = () => {
    const [wallet,setWallet]=useContext(walletContext)
    const [card,setCard]=useContext(cardContext)
    const [dash,setDash]=useState({status:'cart'})
    const handleDashBoard=(status)=>{
       if (status==='cart') {
        setDash({status:'cart'})
        
       }
       else{
        setDash({status:'wishList'})
       }
        
    }
    const handlePriceSort=()=>{
        const products=[...card].sort((a,b)=>(b.price-a.price))
        setCard(products)
        console.log('kaj hoi');
        

    }
    
    const totalWallet = typeof wallet === 'number' ? wallet : parseFloat(wallet) || 0;
            
    return (
        <div>
            <div className="bg-common">
                <div className="w-7/12 mx-auto space-y-5 text-center py-7">
                 <h1 className='text-3xl font-bold text-white'>Dashboard</h1>
                 <p className='text-white' >Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                 <div className="space-x-10">
                 <button onClick={()=>handleDashBoard('cart')} className={`${dash.status==='cart'?'bg-white rounded-full text-common py-1 px-7':'border-white border text-white rounded-full py-1 px-7'}`}>Cart</button>

                 <button onClick={()=>handleDashBoard('wishList')} className={`${dash.status==='wishList'?'bg-white rounded-full text-common py-1 px-7':'border-white border text-white rounded-full py-1 px-7'}`} type="button">Wishlist</button>
                 </div>
                </div>
            </div>
            <div className="flex justify-between my-7 items-center w-11/12 mx-auto">
                <div className=""><h1>{dash.status==='cart'?'Cart':'WishLIst'}</h1></div>
               {
                 dash.status==='cart' && 
                 <div className="flex space-x-10 items-center">
                 <h1>Total cost: {totalWallet.toFixed(2)}</h1>
                 <div className="space-x-4">

                 <button onClick={handlePriceSort} className='border-common border text-common rounded-full py-1 px-7' type="button">Sort by Price</button>

                 <button className='border-white border text-white bg-common rounded-full py-1 px-7' type="button">Purchase</button>
                 </div>

                 </div>
               }
            </div>

            <div className="w-11/12 mx-auto">
                {
                    dash.status==='cart'?
                    <CartDashBoard></CartDashBoard>:
                    <WishListDashBoard></WishListDashBoard>

                }

            </div>
        </div>
    );
};

export default Dashboard;
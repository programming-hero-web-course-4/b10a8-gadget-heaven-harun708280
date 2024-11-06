import React, { useContext, useEffect, useState } from 'react';
import { cardContext,  wishListContext } from '../../Layout/LayOut';
import CartDashBoard from './CartDashBoard';
import WishListDashBoard from './WishListDashBoard';
import { toast } from 'react-toastify';
import modalImage from './Group.png'
import Modal from 'react-awesome-modal';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    useEffect(()=>{
        document.title='Gadget Heaven || DashBoard'

    },[])




    const navigate=useNavigate()

    const [isVisible, setIsVisible] = useState(false);

    const openModal = () => {
        setIsVisible(true);
    };

    const closeModal = () => {
        setIsVisible(false);
    };

    
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

   
    const price =card.reduce((acc,product)=>acc+product.price,0)
    console.log(price,'its total price');
    
    
    const handlePriceSort=()=>{
        const products=[...card].sort((a,b)=>(b.price-a.price))
        setCard(products)
        console.log('kaj hoi');
        
        

    }

    const handlePurchase=()=>{
        if (card.length>=1) {
            openModal()
            setCard([])
            openModal()
          
        }
        else{
            toast.error('Not Found Cart')
        }
        
    }
            
    return (
        <div>
               

                
            <div className="bg-common">
                <div className="w-7/12 mx-auto space-y-5 text-center py-7">
                 <h1 className='text-3xl font-bold text-white'>Dashboard</h1>
                 <p className='text-white' >Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                 <div className="space-x-10">
                 <button   onClick={()=>handleDashBoard('cart')} className={`${dash.status==='cart'?'bg-white rounded-full text-common py-1 px-7':'border-white border text-white rounded-full py-1 px-7'}`}>Cart</button>

                 <button onClick={()=>handleDashBoard('wishList')} className={`${dash.status==='wishList'?'bg-white rounded-full text-common py-1 px-7':'border-white border text-white rounded-full py-1 px-7'}`} type="button">Wishlist</button>
                 </div>
                </div>
            </div>
            <div className="flex justify-between my-7 items-center w-11/12 mx-auto">
                <div className=""><h1>{dash.status==='cart'?'Cart':'WishLIst'}</h1></div>
               {
                 dash.status==='cart' && 
                 <div className="flex space-x-10 items-center">
                 <h1>Total cost: {price} </h1>
                 <div className="space-x-4">

                    <button disabled={card.length < 1} onClick={handlePriceSort} className={`border-common border rounded-full py-1 px-7  ${card.length < 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'text-common'}`}> Sort by Price <span><i class="fa-solid fa-sort"></i></span></button>

                    <button disabled={card.length < 1} onClick={handlePurchase} className={`border-white border rounded-full py-1 px-7  ${card.length < 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'text-white bg-common'}`} >Purchase <span><i class="fa-solid fa-bag-shopping"></i></span></button>

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

            <Modal
                    visible={isVisible}
                    width="400"
                    height="300"
                    effect="fadeInDown"
                    onClickAway={closeModal}
                >
                    <div className="px-4 h-[300px] space-y-3 justify-center flex text-center  flex-col">
                     <div className="flex justify-center"><img src={modalImage} alt="" /></div>
                     <h1 className='text-xl font-extrabold'>Payment Successfully</h1>
                    <p className='text-gray-500'>Thanks for purchasing.</p>
                      
                      <div className="">
                        <button onClick={()=>{closeModal,navigate('/')}} className=' w-full py-2 rounded-2xl bg-gray-200'>Close</button>
                      </div>
                    </div>
                    
                </Modal>
        </div>
    );
};

export default Dashboard;
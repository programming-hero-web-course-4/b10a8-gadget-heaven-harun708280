import React, { createContext, useState } from 'react';
import Nav from '../Component/Common/Nav';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Component/Common/Footer';

import { Toaster, toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
export const cardContext = createContext(null);

export const wishListContext=createContext(null)
import { Audio } from 'react-loader-spinner'
const LayOut = () => {
    const [card, setCard] = useState([]);
    
    const [wishList,setWishList]=useState([])
    const navigation=useNavigation()
    return (
        <wishListContext.Provider value={[wishList,setWishList]}>
        
            <cardContext.Provider value={[card, setCard]}>

            <div className=''>
              
                <Toaster position="top-right" />
                <Nav />
                <div className="min-h-[calc(100vh-285px)] bg-gray-100">
                    <Outlet />
                </div>
                <Footer />
            </div>
            </cardContext.Provider>
         
        </wishListContext.Provider>
    );
};

export default LayOut;

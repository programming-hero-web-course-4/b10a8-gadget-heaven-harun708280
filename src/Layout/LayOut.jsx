import React, { createContext, useState } from 'react';
import Nav from '../Component/Common/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Common/Footer';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const cardContext = createContext(null);
export const walletContext=createContext(null)
const LayOut = () => {
    const [card, setCard] = useState([]);
    const [wallet,setWallet]=useState(0)
    return (
        <walletContext.Provider value={[wallet,setWallet]}>
            <cardContext.Provider value={[card, setCard]}>

            <div className=''>
                <ToastContainer />
                <Nav />
                <div className="min-h-[calc(100vh-285px)]">
                    <Outlet />
                </div>
                <Footer />
            </div>
            </cardContext.Provider>
        </walletContext.Provider>
    );
};

export default LayOut;

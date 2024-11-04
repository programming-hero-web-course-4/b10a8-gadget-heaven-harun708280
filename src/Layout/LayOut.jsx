import React, { createContext, useState } from 'react';
import Nav from '../Component/Common/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Common/Footer';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const cardContext = createContext();

const LayOut = () => {
    const [card, setCard] = useState([]);
    return (
        <cardContext.Provider value={[card, setCard]}>

            <div className=''>
                <ToastContainer />
                <Nav />
                <div className="">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </cardContext.Provider>
    );
};

export default LayOut;

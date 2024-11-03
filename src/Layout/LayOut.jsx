import React from 'react';
import Nav from '../Component/Common/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Common/Footer';

const LayOut = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default LayOut;
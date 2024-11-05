import React from 'react';

const Footer = () => {
    return (
        <div className='py-12 '>
            <div className="w-11/12 mx-auto ">
                <h1 className='text-center text-3xl'>Gadget Heaven</h1>
                <p className='text-gray-500 text-center'>Leading the way in cutting-edge technology and innovation.</p>

                <div className="border-b my-5"></div>
                <div className="flex justify-around text-gray-500">
                    <div className=""> 
                        <p className='text-lg text-black'>Services</p>
                        <p> Product  Support</p>
                        <p>Order Tracking</p>
                        <p>Shipping & Delivery</p>
                        <p>Returns</p>

                    </div>
                    <div className="">
                        <p className='text-black tex-xl'>Company</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Contact</p>

                    </div>
                    <div className="">
                        <p className='text-black tex-xl'>Legal</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
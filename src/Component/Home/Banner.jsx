import React from 'react';
import banner from './banner.jpg'
const Banner = () => {
    return (
        <div className="relative ">
            <div className='bg-common rounded-b-lg'>
            <div className="w-9/12 mx-auto text-center pt-10 pb-56 space-y-6">
            <h1 className='text-5xl text-white '>
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className='text-white text-center mx-auto w-9/12'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className='bg-white py-2 px-4 rounded-xl'>Shoo Now</button>
            

           </div>
          </div>

          <div className="flex flex-col justify-center border-2 border-white p-3 rounded-lg mx-auto absolute w-8/12  top-2/3 left-1/2 transform -translate-x-1/2 ">
            <img className='h-[400px] rounded-lg w-full' src={banner} alt="" />

            

           

          </div>
          
          
        </div>
    );
};

export default Banner;
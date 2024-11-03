import React from 'react';
import Banner from './Banner';
import Category from '../../Category/Category';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadCategory=useLoaderData()
    
    
    return (
        <div className='w-11/12 mx-auto'>
            <div className="h-[750px] ">
              <Banner />
            </div>
            <h1 className='text-center text-3xl font-bold my-12'>Explore Cutting-Edge Gadgets</h1>
            <div className="w-full flex gap-4 my-12">
                <div className="w-2/12">
                <Category key={loadCategory.id} category={loadCategory}></Category>
                </div>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;

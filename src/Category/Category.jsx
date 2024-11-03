import React from 'react';
import MainCategory from './MainCategory';
import { NavLink } from 'react-router-dom';

const Category = ({category}) => {
    console.log(category);
    
    return (
        <div>
            <div className=" shadow-2xl bg-white p-4 space-y-4 rounded-lg ">
                
                 <NavLink to='/' className={({isActive})=>`  rounded-xl px-3 py-2 w-full block ${isActive ?"bg-common text-white":'bg-[#09080F0D]' }`} >All</NavLink>
                
                {
                    category.map(category=><MainCategory key={category.id} category={category}></MainCategory>)
                }
                
            </div>
        </div>
    );
};

export default Category;
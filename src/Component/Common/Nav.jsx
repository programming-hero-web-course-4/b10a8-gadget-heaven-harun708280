import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='w-11/12 mx-auto  mt-7'>
            <div className="navbar rounded-t-lg  bg-common">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="text-white font-bold text-xl">Gadget Heaven </a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-12 text-white px-1">
                        <NavLink>Home</NavLink>
                        <NavLink>Statistics</NavLink>
                        <NavLink>Dashboard</NavLink>

                    
                    </ul>
                </div>
                <div className="navbar-end space-x-8 tex">
                    <div className="">
                        <button className='h-10 w-10 bg-white rounded-full'><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                    <div className="">
                        <button className='h-10 w-10 bg-white rounded-full'><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
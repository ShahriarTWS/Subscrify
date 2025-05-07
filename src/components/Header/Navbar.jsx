import React from 'react';
import { Link, Links, NavLink } from 'react-router';

export const links = <>
    <li className='text-base'><NavLink to={'/'}>Home</NavLink></li>
    <li className='text-base'><NavLink to={'/profile'}>Profile</NavLink></li>
    <li className='text-base'><NavLink to={'/auth/register'}>Register</NavLink></li>
</>

const Navbar = () => {
    return (
        <div>
            <div className="navbar p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2 pt-5">
                            {links}
                        </ul>
                    </div>
                    <a className=" text-xl text-white font-bold">Subscrify</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                    </div>
                    <Link to={'/auth/login'}
                    className='btn'
                    >Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
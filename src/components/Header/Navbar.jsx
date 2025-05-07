import React, { use } from 'react';
import { Link, Links, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import tempProfileImage from '../../assets/user.png'

export const links = <>
    <li className='text-base'><NavLink to={'/'}>Home</NavLink></li>

</>

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        logOut().then(() => {
            alert("Logged out")
        }).catch(error => {
            console.log(error);
        });
    }

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
                            className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-6 w-52 p-2 shadow space-y-2 pt-5">
                            {links}
                            {
                                user ?
                                    <li className='text-base'><NavLink to={'/auth/profile'}>Profile</NavLink></li>
                                    : <li className='text-base'><NavLink to={'/auth/register'}>Register</NavLink></li>
                            }
                        </ul>
                    </div>
                    <a className=" text-xl text-white font-bold">Subscrify</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        {links}
                        {
                            user ?
                                <li className='text-base'><NavLink to={'/auth/profile'}>Profile</NavLink></li>
                                : <li className='text-base'><NavLink to={'/auth/register'}>Register</NavLink></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="relative group">
                        <div className="avatar cursor-pointer">
                            <div className="w-12 rounded-full">
                               {
                                user ? <img src={user.photoURL} alt="" />
                                : <img src={tempProfileImage} alt="" />
                               }
                            </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 bg-primary text-white text-sm px-3 py-1 rounded shadow transition-opacity opacity-0 group-hover:opacity-100 whitespace-nowrap z-50">
                            {user ? user.displayName : ''}
                        </div>
                    </div>


                    {
                        user ? <button onClick={handleLogout} className='btn' >Logout</button>
                            : <Link to={'/auth/login'} className='btn' >Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
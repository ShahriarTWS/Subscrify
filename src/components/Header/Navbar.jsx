import React, { use } from 'react';
import { Link, Links, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import tempProfileImage from '../../assets/user.png'
import Swal from 'sweetalert2';

export const links = <>
    <li className='text-base'><NavLink to={'/'}>Home</NavLink></li>
    <li className='text-base'><NavLink to={'/info/about-us'}>About</NavLink></li>
    <li className='text-base'><NavLink to={'/info/contact-us'}>Contact us</NavLink></li>
    <li className='text-base'><NavLink to={'/auth/account-setting'}>Account Setting</NavLink></li>

</>

const Navbar = () => {
    const { user, logOut,loading  } = use(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Logged Out',
                    text: 'You have successfully logged out.',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                });
            })
            .catch(error => {
                // console.error(error);
                Swal.fire({
                    title: 'Error',
                    text: 'Logout failed. Please try again.',
                    icon: 'error',
                    confirmButtonColor: '#d33',
                });
            });
    };


    return (
        <div className="navbar p-4">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-6 w-52 p-2 shadow space-y-2 pt-5">
                    {links}
                    {user ? (
                        <li className='text-base'><NavLink to='/auth/profile'>Profile</NavLink></li>
                    ) : (
                        <li className='text-base'><NavLink to='/auth/register'>Register</NavLink></li>
                    )}
                </ul>
            </div>
            <a className="text-xl text-white font-bold">Subscrify</a>
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-4">
                {links}
                {
                    loading ? 
                    <p><span className="loading loading-bars loading-xl"></span></p>
                    :
                   <div>
                     {user ? (
                        <li className='text-base'><NavLink to='/auth/profile'>Profile</NavLink></li>
                    ) : (
                        <li className='text-base'><NavLink to='/auth/register'>Register</NavLink></li>
                    )}
                   </div>
                }
            </ul>
        </div>

        <div className="navbar-end flex gap-4">
            {loading ? (
                <p><span className="loading loading-bars loading-xl"></span></p>
            ) : (
                <>
                    <div className="relative group">
                        <div className="avatar cursor-pointer">
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL || tempProfileImage} alt="User" />
                            </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 bg-primary text-white text-sm px-3 py-1 rounded shadow transition-opacity opacity-0 group-hover:opacity-100 whitespace-nowrap z-50">
                            {user?.displayName || ''}
                        </div>
                    </div>

                    {user ? (
                        <Link to='/auth/login' onClick={handleLogout} className='btn'>Logout</Link>
                    ) : (
                        <Link to='/auth/login' className='btn'>Login</Link>
                    )}
                </>
            )}
        </div>
    </div>
    );
};

export default Navbar;
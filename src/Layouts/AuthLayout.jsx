import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';

const AuthLayout = () => {
    return (
        <div className=' bg-base-100 pt-5'>
            
            <Header></Header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;
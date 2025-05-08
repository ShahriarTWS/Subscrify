import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AuthLayout = () => {
    return (
        <div className=' bg-base-100'>
            
            <Header></Header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>

            <footer className=''>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;
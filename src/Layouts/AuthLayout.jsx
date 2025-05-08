import React, { use } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const AuthLayout = () => {


    return (
        <div className=' bg-base-100'>
            <ScrollToTop></ScrollToTop>
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
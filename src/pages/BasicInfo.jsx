import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const BasicInfo = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default BasicInfo;
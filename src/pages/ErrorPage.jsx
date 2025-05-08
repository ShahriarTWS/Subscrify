import React from 'react';
import errorImage from '../assets/404error.png'
import { Link } from 'react-router';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const ErrorPage = () => {
    return (
        <div className='h-screen bg-base-100'>
            <ScrollToTop></ScrollToTop>
            <title>Subscrify || Error</title>
            <div className='w-11/12 mx-auto flex flex-col justify-center items-center h-full'>
                <img className='md:w-1/2 lg:w-3/5' src={errorImage} alt="" />
                <Link to={'/'} className='btn btn-wide btn-primary'>Back To home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
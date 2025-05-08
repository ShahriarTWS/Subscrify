import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import SubscriptionDetailsCard from './SubscriptionDetailsCard';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const SubscriptionDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const selectedItem = data?.find(item => item.id === parseInt(id));

    if (!selectedItem) {
        return <p className="text-center text-red-500 mt-10 text-xl">Subscription not found or still loading...</p>;
    }

    return (
        <div>
            <title>Subscrify || Subscription Details</title>
            <ScrollToTop></ScrollToTop>
            <header className='pt-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto'>
            <SubscriptionDetailsCard item={selectedItem} />
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default SubscriptionDetails;

import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider/Slider';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import CustomerReviewSection from '../components/CustomerReviewSection/CustomerReviewSection';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const HomeLayout = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/item.json')
            .then(res => res.json())
            .then(fetchedData => {
                //   console.log("Fetched Data:", fetchedData);
                setData(fetchedData);
            })
            .catch(err => {
                console.error("Failed to fetch data:", err);
            });
    }, []);

    // const data = useLoaderData();
    // console.log(data);
    return (

        <div className='bg-base-100 h-screen '>
            <title>Subscrify || Home</title>
            <ScrollToTop></ScrollToTop>
            <header>
                <Header></Header>
                <div className='w-11/12 mx-auto mt-5'>
                    <Slider></Slider>
                </div>
            </header>

            <main className='w-11/12 mx-auto my-16'>
                <HowItWorks></HowItWorks>
                <Outlet context={data}></Outlet>
                {/* <SubscriptionContainer data={data}></SubscriptionContainer> */}
                {/* <div>
                {
                    data.map(singleItem=> <SubscriptionCard singleItem={singleItem}></SubscriptionCard>)
                }
                </div> */}
            </main>
            <section>
                <CustomerReviewSection></CustomerReviewSection>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>

    );
};

export default HomeLayout;
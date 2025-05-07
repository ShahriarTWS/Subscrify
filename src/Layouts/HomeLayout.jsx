import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider/Slider';
import { useLoaderData } from 'react-router';
import SubscriptionContainer from '../components/SubscriptionContainer/SubscriptionContainer';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SubscriptionCard from '../components/SubscriptionContainer/SubscriptionCard';

const HomeLayout = () => {

    const [data, setData] = useState([]); // ✅ set default as array

    useEffect(() => {
      fetch('/item.json')
        .then(res => res.json())
        .then(fetchedData => {
          console.log("Fetched Data:", fetchedData);
          setData(fetchedData); // ✅ Should be an array
        })
        .catch(err => {
          console.error("Failed to fetch data:", err);
        });
    }, []);
    
    // const data = useLoaderData();
    // console.log(data);
    return (
        <div className='bg-base-100 h-screen pt-5'>
            <header>
                <Header></Header>
                <div className='w-11/12 mx-auto mt-5'>
                    <Slider></Slider>
                </div>
            </header>

            <main className='w-11/12 mx-auto my-16'>
                <SubscriptionContainer data={data}></SubscriptionContainer>
                {/* <div>
                {
                    data.map(singleItem=> <SubscriptionCard singleItem={singleItem}></SubscriptionCard>)
                }
                </div> */}
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;
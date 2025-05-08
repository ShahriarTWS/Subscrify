import React from 'react';
import SubscriptionCard from './SubscriptionCard';
import { useOutletContext } from 'react-router';

const SubscriptionContainer = () => {
    const data = useOutletContext();
    // Handle loading or missing data
    if (!Array.isArray(data)) {
        return <p className="text-center text-lg text-red-500">Loading subscriptions or data format error...</p>;
    }

    return (
        <div className='space-y-8'>
            <h2 className='text-5xl font-semibold text-center'>Subscription Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    data.map(singleItem => (
                        <SubscriptionCard
                            key={singleItem.id}
                            singleItem={singleItem}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default SubscriptionContainer;

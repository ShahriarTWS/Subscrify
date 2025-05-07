import React from 'react';

const SubscriptionCard = ({ singleItem }) => {
    console.log(singleItem);
    const { name, thumbnail,tech_category,price,frequency } = singleItem;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                    className='h-60 w-full'
                        src={thumbnail}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-base'>Category: {tech_category}</p>
                    <p className='text-lg font-medium'>Price: {price}$/{frequency}</p>
                    <div className="card-actions justify-end">
                        <button className='btn btn-primary text-white'>View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionCard;
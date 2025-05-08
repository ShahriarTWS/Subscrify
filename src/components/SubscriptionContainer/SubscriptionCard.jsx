import React from 'react';
import { Link } from 'react-router';

const SubscriptionCard = ({ singleItem }) => {
    // console.log(singleItem);
    const { name, thumbnail, tech_category, price, frequency, id } = singleItem;
    return (
        <div  data-aos="fade-up">
            <div className="card bg-base-100 h-full shadow hover:shadow-2xl">
                <figure>
                    <img
                        className='h-52 md:h-64 lg:h-80 w-full'
                        src={thumbnail}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        {name}
                    </h2>
                    <p className='text-base'>Category: {tech_category}</p>
                    <p className='text-lg font-medium'>Price: {price}$/{frequency}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/subscription-details/${id}`} className='btn btn-primary text-white'>View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionCard;
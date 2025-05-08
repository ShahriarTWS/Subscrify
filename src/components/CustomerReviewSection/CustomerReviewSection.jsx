import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const reviews = [
    {
        name: 'Alice Johnson',
        review: 'Subscrify completely changed the way I discover new products. The subscription boxes are always exciting!',
        location: 'San Francisco, USA'
    },
    {
        name: 'David Kim',
        review: 'Customer service is top-notch and the value is unmatched. Highly recommended!',
        location: 'Toronto, Canada'
    },
    {
        name: 'Sana Rahman',
        review: 'I’ve saved so much time and money using Subscrify. Each box feels like a gift to myself!',
        location: 'Dhaka, Bangladesh'
    },
    {
        name: 'Lucas Müller',
        review: 'The tech boxes are just amazing. Got smart home devices I never even knew I needed!',
        location: 'Berlin, Germany'
    },
    {
        name: 'Priya Mehta',
        review: 'The customization options are a game-changer. I finally get products I actually use.',
        location: 'Mumbai, India'
    },
    {
        name: 'James Thompson',
        review: 'Fast delivery, great packaging, and high-quality items. Subscrify nailed it!',
        location: 'London, UK'
    },
    {
        name: 'Aiko Tanaka',
        review: 'I love the eco-friendly box. It’s refreshing to see a company care about the planet.',
        location: 'Osaka, Japan'
    },
    {
        name: 'Carlos Ramirez',
        review: 'Affordable and exciting! I always look forward to the next box.',
        location: 'Mexico City, Mexico'
    },
    {
        name: 'Fatima Al-Fayed',
        review: 'Subscrify introduced me to niche brands I wouldn’t have found on my own.',
        location: 'Dubai, UAE'
    },
    {
        name: 'Nathan Green',
        review: 'Reliable service, intuitive platform, and top-quality products. 10/10!',
        location: 'Sydney, Australia'
    }
];


const CustomerReviewSection = () => {
    return (
        <div className="w-11/12  mx-auto my-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Image */}
            <div className='md:col-span-7'>
                <img
                    src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg"
                    alt="Happy Customer"
                    className="rounded-xl shadow-md w-full object-cover"
                />
            </div>

            {/* Right Slider */}
            <div className='md:col-span-5'>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">What Our Customers Say</h2>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={1}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-base-200 p-18 rounded-lg shadow-md h-full">
                                <FaQuoteLeft className="text-secondary text-2xl mb-3" />
                                <p className="text-base-content mb-4">{review.review}</p>
                                <p className="font-semibold text-primary">{review.name}</p>
                                <p className="text-sm text-base-content">{review.location}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CustomerReviewSection;

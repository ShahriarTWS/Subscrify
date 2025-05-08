import React from 'react';
import chooseImg from '../../assets/chose.svg'
import subImg from '../../assets/sub.svg'
import teamImg from '../../assets/team.svg'

const HowItWorks = () => {
    return (
        <div className=''>
            <h2 className='text-5xl font-medium text-center'>Here’s <span className='font-semibold'>How It Works</span></h2>
            <p className='text-lg text-center text-gray-500 my-2'>New Boxes Released Monthly</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-6 text-center'>


                <div className='card bg-base-200 flex flex-col justify-center items-center gap-4 py-4'>
                    <img className='w-48' src={chooseImg} alt="" />
                    <div className='space-y-4'>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>Discover the Future of Tech</h2>
                        <p className='md:w-3/4 mx-auto text-gray-500 text-sm px-3 md:text-base'>Every subscription box includes handpicked premium tools, devices, and projects to supercharge your tech journey. Average value over $150 per box.</p>
                    </div>
                </div>


                <div className='card bg-base-200 flex flex-col justify-center items-center gap-4 py-4'>
                    <img className='w-66' src={subImg} alt="" />
                    <div className='space-y-4'>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>Delivered to Your Door</h2>
                        <p className='md:w-3/4 mx-auto text-gray-500 text-sm px-3 md:text-base'>Whether monthly or quarterly, your crate arrives filled with expert-curated content—from smart gadgets to coding challenges. Learn and innovate from the comfort of home.</p>
                    </div>
                </div>




                <div className='card bg-base-200 flex flex-col justify-center items-center gap-4 py-4'>
                    <img className='w-48' src={teamImg} alt="" />
                    <div className='space-y-4'>
                        <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>Join a Growing Tech Community</h2>
                        <p className='md:w-3/4 mx-auto text-gray-500 text-sm px-3 md:text-base'>Be part of a vibrant global network of 300,000+ subscribers. Earn points, access member-only perks, and grow your career with exclusive training and events.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Correct import
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

            <SwiperSlide>
                <div className="relative w-full h-[40vh] md:h-[85vh] rounded-2xl overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co.com/SDc4kbfL/slider1.jpg')",
                        }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center   text-white p-4">
                        <div className='space-y-4'>
                            <h2 className='text-3xl md:text-5xl lg:text-7xl mx-12'>Smart Home Solution</h2>
                            <p className='mx-12'>Transform your home into a smart home with curated smart devices, home automation products, and IoT gadgets.</p>
                        </div>
                    </div>
                </div>


            </SwiperSlide>

            <SwiperSlide>
                <div className="relative w-full h-[40vh] md:h-[85vh] rounded-2xl overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co.com/7JYvJV9b/slider2.jpg')",
                        }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center  text-white p-4">
                        <div className='space-y-4'>
                            <h2 className='text-3xl md:text-5xl lg:text-7xl mx-12'>Gadget Lovers Crate</h2>
                            <p className='mx-12'>Surprise yourself each month with trending gadgets, tools, and accessories from the tech world.</p>
                        </div>
                    </div>
                </div>


            </SwiperSlide>

            <SwiperSlide>
                <div className="relative w-full h-[40vh] md:h-[85vh] rounded-2xl overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co.com/9m891Vdf/slide3.jpg')",
                        }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center  text-white p-4">
                        <div className='space-y-4'>
                            <h2 className='text-3xl md:text-5xl lg:text-7xl mx-12'>Cyber Security Kit</h2>
                            <p className='mx-12'>Stay protected with curated tools, training content, and security devices for digital safety.</p>
                        </div>
                    </div>
                </div>


            </SwiperSlide>



        </Swiper>
    );
};

export default Slider;

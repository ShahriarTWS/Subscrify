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
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center  text-white p-4">
                       <h2 className='text-3xl md:text-5xl lg:text-7xl m-12'>Smart Home Box</h2>
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
                       <h2 className='text-3xl md:text-5xl lg:text-7xl m-12'>Gadget Lovers Crate</h2>
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
                       <h2 className='text-3xl md:text-5xl lg:text-7xl m-12'>Cyber Security Kit</h2>
                    </div>
                </div>


            </SwiperSlide>

           

        </Swiper>
    );
};

export default Slider;

import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';   // ✅ FIXED BUG

export default function BigSavingDaysSale() {
    const BigSavingDaysSaleData = [
        {
            "id": "011",
            "saleType": "Big Saving days sale",
            "productTitle": "",
            "price": 34440,
            "banner": "https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg"
        },
        {
            "id": "012",
            "saleType": "Big Saving days sale",
            "productTitle": "",
            "price": 34440,
            "banner": "https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg"
        },
    ];

    return (
        <div className='w-full py-5 mb-5'>
            <div className="container flex items-center justify-center gap-10">

                <div className='w-[70%] h-[533px] '>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 3500 }}
                        loop={true}
                        className='mySwiper h-full'
                    >
                        {BigSavingDaysSaleData.map((item) => (
                            <SwiperSlide key={item.id} className='w-full h-full'>
                                <div
                                    className='w-full h-full flex items-end justify-center flex-col px-4'
                                    style={{
                                        backgroundImage: `url(${item.banner})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <p>{item.saleType}</p>
                                    <h3>{item.productTitle}</h3>
                                    <p>{item.price}</p>
                                    <Button>Show Now</Button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='part2 scrollableBox w-full lg:w-[30%] flex items-center gap-5 justify-between flex-row lg:flex-col'>
                    <div className='bannerBoxV2 box w-full overflow-hidden rounded-md group relative'>
                        <img
                            src="https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg" alt=""
                            className='w-full transition-all duration-150 group-hover:scale-105'
                        />
                        <div className='info absolute p-5 top-0 right-0 w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2 '>
                            <h2 className='text-[14px] md:text-[18px] font-[600]'>Buy women with low price</h2>
                            <p className='text-[20px] text-primary font-[600] w-full'>₹999</p>
                            <Link className='text-[16px] font-[600] link underline'>Shop Now</Link>

                        </div>
                    </div>

                    <div className='bannerBoxV2 box w-full overflow-hidden rounded-md group relative'>
                        <img
                            src="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" alt=""
                            className='w-full transition-all duration-150 group-hover:scale-105'
                        />
                        <div className='info absolute p-5 top-0 right-0 w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2'>
                            <h2 className='text-[14px] md:text-[18px] font-[600]'>Buy Men's Footwear with low price</h2>
                            <p className='text-[20px] text-primary font-[600] w-full'>₹1500</p>
                            <Link className='text-[16px] font-[600] link underline'>Shop Now</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

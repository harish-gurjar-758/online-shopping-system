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
        <div className='w-full'>
            <div className="container flex items-center justify-center gap-10">

                <div className='w-[40%] h-[40vh] '>
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

                <div className='container'>
                    <div
                        style={{
                            backgroundImage: "url('https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg')"
                        }}
                    >
                        <h3>Buy women with low price</h3>
                        <p>₹999</p>
                    </div>

                    <div
                        style={{
                            backgroundImage: "url('https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg')"
                        }}
                    >
                        <h1>Buy Men's Footwear with low price</h1>
                        <p>₹1500</p>
                        <Link>Shop Now</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

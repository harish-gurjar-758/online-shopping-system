import React from 'react'
// Icons
import { FaTruckFast } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";

// Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function FreeDeliverySection() {

    const cardData = [
        {
            id: "001",
            titel: "Buy Men's Bags with low price",
            price: "900",
            banner: "https://serviceapi.spicezgold.com/download/1763531275315_1737020756772_New_Project_1.png",
            bannerImageSide: "",
        },
        {
            id: "002",
            titel: "Buy Apple Iphone",
            price: "75000",
            banner: "https://serviceapi.spicezgold.com/download/1757183705017_1737020250515_New_Project_47.jpg",
            bannerImageSide: "",
        },
        {
            id: "003",
            titel: "Buy Men's Footwear with low price",
            price: "1500",
            banner: "https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg",
            bannerImageSide: "",
        },
        {
            id: "004",
            titel: "Buy women with low price",
            price: "999",
            banner: "https://serviceapi.spicezgold.com/download/1760160666204_1737020916820_New_Project_52.jpg",
            bannerImageSide: "",
        },
        {
            id: "005",
            titel: "Earbuds",
            price: "500",
            banner: "https://serviceapi.spicezgold.com/download/1765514328941_Samsung-Galaxy-Buds-3-768x768.jpg",
            bannerImageSide: "",
        },
    ]

    return (
        <div className="container pb-3">

            {/* --- Free Shopping Label ---- */}
            <div className='w-80% flex items-center justify-between border border-primary py-9 px-4 rounded'>
                <h2 className='flex text-[30px] font-[600] items-center gap-2'>
                    <FaTruckFast className='font-[700] text-[35px]' />
                    Free Shopping
                </h2>
                <p className='text-[20px]'>Free Delivery Now On Your First Order and over $200</p>
                <h2 className='flex text-[30px] font-[600] items-center gap-2'>
                    <RiSubtractFill className='font-bold text-[35px]' />
                    Only $200*
                </h2>
            </div>

            {/* --- Slider Section ---- */}
            <div className='mt-6'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    modules={[Navigation]}
                    navigation={true}
                    className="mySwiper mt-5 w-full flex items-center justify-center gap-2"
                >
                    {cardData.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className='bannerBoxV2 box w-full overflow-hidden rounded-md group relative'
                        >
                            <img
                                src={item.banner}
                                alt=""
                                className='w-full h-full object-contain transition-all duration-150 group-hover:scale-105'
                            />

                            <div className='info absolute p-5 top-0 right-0 w-[60%] h-[100%] z-50 flex items-start justify-center flex-col gap-2'>
                                <h2 className='text-[14px] md:text-[18px] font-[600]'>{item.titel}</h2>
                                <p className='text-[20px] text-primary font-[600] w-full'>₹{item.price}</p>
                                <Link className='text-[16px] w-fit font-[600] link underline uppercase'>Shop Now</Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}

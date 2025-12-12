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
            titel: "",
            price: "",
            banner: "",
            bannerImageSide: "",
        }
    ]

    return (
        <div className="container pb-3">
            {/* --- Free Shopping Label -- Start --  --- */}
            <div className='w-80% flex items-center justify-between border border-primary py-9 px-4 rounded'>
                <h2 className='flex text-[30px] font-[600] items-center gap-2'><FaTruckFast className='font-[700] text-[35px]' /> Free  Shopping</h2>
                <p className='text-[20px]'>Free Delivery Now On Your First Order and over $200</p>
                <h2 className='flex text-[30px] font-[600] items-center gap-2'><RiSubtractFill className='font-bold text-[35px]' /> Only $200*</h2>
            </div>
            {/* --End-- */}

            <div>
                <Swiper
                    sliderPerView={8}
                    spaceBetween={20}
                    modules={[Navigation]}
                    navigation={true}
                    className='mySwiper'
                >
                    {cardData.map((item) => (
                        <SwiperSlide key={item.id}
                            style={{
                                backgroundImage: `url(')`,
                            }}
                        >
                            <div>
                                <h2>{item.titel}</h2>
                                <p>{item.price}</p>
                                <Link className='link uppercase underline'>Shop Now</Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function HomeCatSlider() {

    const categories = [
        { name: "Fashion", img: "https://serviceapi.spicezgold.com/download/1763965324754_4819.png" },
        { name: "Electronics", img: "https://serviceapi.spicezgold.com/download/1761905929738_file_1734525218436_ele.png" },
        { name: "Shoes", img: "https://serviceapi.spicezgold.com/download/1761905982766_file_1734525239704_foot.png" },
        { name: "Grocery", img: "https://serviceapi.spicezgold.com/download/1761905996339_file_1734525248057_gro.png" },
        { name: "Home & Kitchen", img: "https://serviceapi.spicezgold.com/download/1763965324754_4819.png" },
        { name: "Beauty", img: "https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png" },
        { name: "Sports", img: "https://png.pngtree.com/png-clipart/20241110/original/pngtree-collection-of-various-sports-equipment-illustration-png-image_16817794.png" },
        { name: "jewellery", img: "https://serviceapi.spicezgold.com/download/1761906025549_file_1734525286186_jw.png" },
        { name: "Bags", img: "https://serviceapi.spicezgold.com/download/1761905971086_file_1734525231018_bag.png" },
    ];

    return (
        <div className='homeCatSlider mt-4 mb-4 '>
            <div
            //  className="container"
            >
                <Swiper
                    slidesPerView={8}
                    spaceBetween={20}
                    modules={[Navigation]}
                    navigation={true}
                    className="mySwiper"
                >
                    {categories.map((cat, i) => (
                        <SwiperSlide key={i}>
                            <Link to={`/category/${cat.name.toLowerCase()}`}>
                                <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col cursor-pointer hover:shadow-md transition">
                                    <img
                                        src={cat.img}
                                        alt={cat.name}
                                        className='w-[60px]'
                                    />
                                    <h3 className='text-[15px] font-[500] mt-3'>{cat.name}</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

import React from 'react'
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';

export default function PopularProducts() {

    const product = [
        {
            id: 11,
            category: "jewellery",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "4.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 12,
            category: "jewellery",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 13,
            category: "jewellery",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        }
    ];

    // ⭐ Dynamic Star Rendering Logic
    const renderStars = (rating) => {
        const rate = Number(rating);

        const fullStars = Math.floor(rate);
        const hasHalfStar = rate % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={`full-${i}`} fontSize="small" className="text-yellow-500" />);
        }

        if (hasHalfStar) {
            stars.push(<StarHalfIcon key="half" fontSize="small" className="text-yellow-500" />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarOutlineIcon key={`empty-${i}`} fontSize="small" className="text-yellow-500" />);
        }

        return stars;
    };

    return (
        <div className='bg-white py-10'>
            <div className='container'>
                <h2 className='font-bold text-[25px]'>Popular Products</h2>
                <p>Do not miss the current offers until the end of March.</p>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                modules={[Navigation]}
                navigation={true}
                className="mySwiper mt-5 w-full flex items-center justify-center gap-2 container"
            >
                {product.map((pro) => (
                    <SwiperSlide key={pro.id} className='!card border border-l-rose-100'>

                        <Link
                            // to={`/product-details/${pro.title.replace(/\s+/g, '-').toLowerCase()}`}
                            className='border-l-pink-950'
                        >
                            <div className="img w-full h-[200px] overflow-hidden">
                                <img src={pro.banner} alt={pro.title} />
                            </div>

                            <div className='w-full flex items-start flex-col gap-3 px-2 py-2'>
                                <p className='text-[13px] font-[500] text-stone-500'>
                                    {pro.category}
                                </p>

                                <p className='text-[13px] font-[500]'>
                                    {pro.title}
                                </p>

                                {/* ⭐ Dynamic Stars */}
                                <div className='flex'>
                                    {renderStars(pro.star)}
                                </div>

                                {/* Price Section */}
                                <div className='w-full flex justify-between'>
                                    <p className='line-through text-stone-400 text-[15px] font-[500]'>
                                        <CurrencyRupeeIcon className='!text-[15px] !font-[500]' />
                                        {pro.oldPrice}
                                    </p>

                                    <p className='text-[#ff5252] text-[15px] font-[500]'>
                                        <CurrencyRupeeIcon className='!text-[15px] !font-[500]' />
                                        {pro.newPrice}
                                    </p>
                                </div>

                                {/* Add to Cart */}
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className="!mt-3 !bg-black hover:!bg-gray-800 z-10"
                                >
                                    <LocalGroceryStoreIcon className='mr-2' />
                                    Add to cart
                                </Button>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

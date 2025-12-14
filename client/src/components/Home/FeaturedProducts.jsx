import Button from '@mui/material/Button'
import React from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";



import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';

export default function FeaturedProducts() {
    
    const product = [
        {
            id: 11,
            category: "jewellery",
            braned: "mdtp",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "4.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 12,
            category: "jewellery",
            braned: "mdtp",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 13,
            category: "jewellery",
            braned: "rupa",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 14,
            category: "jewellery",
            braned: "jkd",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 15,
            category: "jewellery",
            braned: "shiya ram",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 16,
            category: "jewellery",
            braned: "shiya ram",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 17,
            category: "jewellery",
            braned: "shuriya",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 18,
            category: "jewellery",
            braned: "jkd",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 19,
            category: "jewellery",
            braned: "bandhan",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
        {
            id: 20,
            category: "jewellery",
            braned: "jkg",
            title: "Jewellery trendy jewellery...",
            banner: "https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0",
            star: "3.5",
            oldPrice: "1200.00",
            newPrice: "1000.00",
        },
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
        <div className='container pt-7'>
            <div className='w-full flex items-center justify-between'>
                <h2 className='font-[600] text-[25px]'>Featured Products</h2>
                <Button className='!text-black !lowercase !bg-gray-100'>View All</Button>
            </div>

            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                modules={[Navigation]}
                navigation={true}
                className="mySwiper mt-5 w-full flex items-center justify-center gap-2"
            >
                {product.map((pro) => (
                    <SwiperSlide key={pro.id} className='!card mt-3 mb-3 ml-2 !w-[250px] border border-grey shadow-[1px_0_10px_#f5f0f0] rounded'>

                        <Link
                            // to={`/product-details/${pro.title.replace(/\s+/g, '-').toLowerCase()}`}
                            className='border-l-pink-950'
                        >
                            <div className="!img w-full h-[250px] overflow-hidden rounded-tl rounded-tr relative">
                                <p className='w-[30px] h-[30px] absolute top-3 left-3 text-center flex items-center justify-center rounded-[100%] p-4 text-[14px] bg-[#ff5252] text-white'>8%</p>

                                <div className='absolute right-3 top-4 flex flex-col gap-4' >
                                    <div className=' bg-white rounded-[100%] text-[20px] p-2 text-black' >
                                        <MdOutlineZoomOutMap />
                                    </div>
                                    <div className=' bg-white rounded-[100%] text-[20px] p-2 text-black' >
                                        <IoGitCompareOutline />
                                    </div>
                                    <div className=' bg-white rounded-[100%] text-[20px] p-2 text-black' >
                                        <FaRegHeart />
                                    </div>

                                </div>
                                <img
                                    src={pro.banner} alt={pro.title}
                                    className='w-full !h-[300px]'
                                />
                            </div>

                            <div className='w-[250px] flex items-start flex-col gap-3 px-2 py-2'>
                                <p className='text-[13px] font-[500] text-stone-500'>
                                    {pro.braned}{pro.id}
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
                                    className="!mt-3 !w-full !bg-[#ff5252] hover:!bg-[#fe6d6d] z-10"
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
  )
}

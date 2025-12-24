import React, { useState } from 'react'
import SideControllers from '../../components/CategoryProduct/SideControllers';
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";

import { CiCircleList } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";


export default function Product() {
    const [openDetails, setOpenDetails] = useState(false);

    const category = [
        "Fashion", "Electronics", "Shoes", "Grocery", "Beauty", "Sports", "jewellery", "Bags"
    ]

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

    // ------
    const handleShowDetails = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenDetails(true);
    }
    return (
        <div className='bg-white'>
            <div className='container flex gap-3'>
                <div className='sidebarWrapper fixed -bottom-[100%] left-0 w-fulllg:h-full lg:static lg:w-[20%] bg-white z-[102] lg:z-[100] p-3 lg:p-0  transition-all lg:opacity-100 opacity-0 '>
                    <SideControllers />
                </div>
                <div className='rightContent w-full lg:w-[80%] py-3'>
                    {/* --Start-- */}
                    <div className='!bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between sticky top-[135px] z-[99]'>
                        <div className='col1 flex items-center itemViewActions'>
                            <CiCircleList />
                            <IoGrid />
                            <span class="text-[14px] hidden sm:block md:block lg:block font-[500] pl-3 text-[rgba(0,0,0,0.7)]">There are 22  products.</span>
                        </div>
                        <div className='col2 ml-auto flex items-center justify-end gap-3 pr-4'>
                            <span class="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">Sort By</span>
                            <Button>Name a to z</Button>
                        </div>
                    </div>
                    {/* --End-- */}

                    {/* ----- */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                        {product.map((pro) => (
                            <div key={pro.id}
                                // className='!card mt-3 mb-3 ml-2 !w-[250px] border border-grey shadow-[1px_0_10px_#f5f0f0] rounded'
                                className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'
                            >

                                <Link
                                    to={`/product-detailed/${pro.id}`}
                                    className='border-l-pink-950'
                                >
                                    <div className="!img w-full h-[250px] overflow-hidden rounded-tl rounded-tr relative">
                                        <p className='w-[30px] h-[30px] absolute top-3 left-3 text-center flex items-center justify-center rounded-[100%] p-4 text-[14px] bg-[#ff5252] text-white'>8%</p>

                                        <div className='absolute right-3 top-4 flex flex-col gap-4' >
                                            {/* <div className='actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100' > */}
                                            <div
                                                className=' bg-white rounded-[100%] text-[20px] p-2 text-black'
                                                onClick={handleShowDetails}
                                            >
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

                                    <div className='w-[250px] flex items-start flex-col gap-3 px-2 py-2 relative'>
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
                                            className="!mt-3 !w-full !bg-[#ff5252] hover:!bg-[#fe6d6d] z-10 absolute"
                                        >
                                            <LocalGroceryStoreIcon className='mr-2' />
                                            Add to cart
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

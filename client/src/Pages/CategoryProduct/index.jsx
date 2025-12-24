import React, { useState, useMemo } from 'react';
import SideControllers from '../../components/CategoryProduct/SideControllers';
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';

import { IoGrid } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import SortByFadeMenu from '../../components/CategoryProduct/SortByFadeMenu';

export default function Product() {

    const [view, setView] = useState("grid");
    const [sortBy, setSortBy] = useState("Name, A To Z");

    const [filters, setFilters] = useState({
        categories: [],
        price: [0, 600000],
        rating: null,
    });

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
            newPrice: "100.00",
        },
    ];

    /* ✅ FILTER */
    const filteredProducts = useMemo(() => {
        let data = [...product];

        if (filters.categories.length) {
            data = data.filter(p =>
                filters.categories.includes(p.category)
            );
        }

        data = data.filter(p =>
            Number(p.newPrice) >= filters.price[0] &&
            Number(p.newPrice) <= filters.price[1]
        );

        if (filters.rating) {
            data = data.filter(p =>
                Math.floor(Number(p.star)) >= filters.rating
            );
        }

        return data;
    }, [product, filters]);

    /* ✅ SORT */
    const sortedProducts = useMemo(() => {
        let data = [...filteredProducts];

        switch (sortBy) {
            case "Name, A To Z":
                data.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Name, Z To A":
                data.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "Price, Low To High":
                data.sort((a, b) => a.newPrice - b.newPrice);
                break;
            case "Price, High To Low":
                data.sort((a, b) => b.newPrice - a.newPrice);
                break;
            default:
                break;
        }
        return data;
    }, [filteredProducts, sortBy]);

    /* ⭐ STAR UI */
    const renderStars = (rating) => {
        const rate = Number(rating);
        const full = Math.floor(rate);
        const half = rate % 1 !== 0;
        const empty = 5 - full - (half ? 1 : 0);

        return (
            <>
                {[...Array(full)].map((_, i) => <StarIcon key={i} fontSize="small" className="text-yellow-500" />)}
                {half && <StarHalfIcon fontSize="small" className="text-yellow-500" />}
                {[...Array(empty)].map((_, i) => <StarOutlineIcon key={i} fontSize="small" className="text-yellow-500" />)}
            </>
        );
    };

    return (
        <div className='bg-white'>
            <div className='container flex gap-3'>

                <div className='hidden lg:block lg:w-[20%]'>
                    <SideControllers filters={filters} setFilters={setFilters} />
                </div>

                <div className='w-full lg:w-[80%]'>

                    {/* TOOLBAR */}
                    <div className='bg-[#f1f1f1] p-2 mb-4 rounded-md flex items-center sticky top-[135px] z-[99]'>

                        <div className='flex gap-2 items-center'>
                            <div onClick={() => setView("list")} className={`p-2 border rounded-full cursor-pointer ${view === "list" && "bg-slate-300"}`}>
                                <CiCircleList />
                            </div>

                            <div onClick={() => setView("grid")} className={`p-2 border rounded-full cursor-pointer ${view === "grid" && "bg-slate-300"}`}>
                                <IoGrid />
                            </div>

                            <span className='text-sm font-medium pl-3'>
                                There are {sortedProducts.length} products.
                            </span>
                        </div>

                        <div className='ml-auto flex items-center gap-3 pr-4'>
                            <span className='text-sm font-medium'>Sort By</span>
                            <SortByFadeMenu setSortBy={setSortBy} />
                        </div>
                    </div>

                    {/* PRODUCTS */}
                    <div className={
                        view === "grid"
                            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                            : "flex flex-col gap-4"
                    }>
                        {sortedProducts.map((pro) => (
                            <div key={pro.id} className={`border rounded shadow ${view === "list" && "flex gap-4 p-3"}`}>
                                <div className='group imgWrapper w-[100%]  overflow-hidden  rounded-md rounded-bl-none rounded-br-none relative'>
                                    <Link to={`/product-detailed/${pro.id}`}>
                                        <div className='img h-[200px] overflow-hidden'>
                                            <img src={pro.banner} alt={pro.title}
                                                className={view === "list" ? "w-[200px]" : "w-full h-[250px]"} />
                                            <img src={pro.banner} alt={pro.title} className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105' />
                                        </div>
                                    </Link>
                                    <div className='flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-[60] p-3 gap-2'>
                                        <Button className='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !absolute top-[10px] right-[10px] !min-w-[30px] !min-h-[30px] !w-[30px] !h-[30px] !rounded-full !bg-[rgba(255,255,255,1)] text-black css-iyey26'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-black z-[90] text-[25px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                                        </Button>
                                        <span class="flex items-center justify-center p-1 px-2 bg-[rgba(255,555,255,0.8)] max-w-[35px] h-[25px] rounded-sm cursor-pointer hover:bg-white false">S</span>
                                        <span class="flex items-center justify-center p-1 px-2 bg-[rgba(255,555,255,0.8)] max-w-[35px] h-[25px] rounded-sm cursor-pointer hover:bg-white false">M</span>
                                    </div>
                                    <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>8%</span>
                                    <div className='actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group css-iyey26" tabindex="0" type="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[18px] !text-black group-hover:text-white hover:!text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"></path></svg></button>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group css-iyey26" tabindex="0" type="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[18px] !text-black group-hover:text-white hover:!text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 160-64-64 64-64m-97 320 64 64-64 64"></path><circle cx="112" cy="96" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="400" cy="416" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 96h84a60 60 0 0 1 60 60v212m-145 48h-84a60 60 0 0 1-60-60V144"></path></svg><span class="MuiTouchRipple-root css-4mb1j7"></span></button>
                                        <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group css-iyey26" tabindex="0" type="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[18px] !text-black group-hover:text-white hover:!text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg></button>
                                    </div>
                                </div>
                                <div className='info p-3 py-5 relative pb-[50px] h-[190px]'>
                                    <h6 className='text-[13px] !font-[400]'>
                                        <span className='link transition-all'>{pro.braned}</span>
                                    </h6>
                                    <h3 className='text-[12px] lg:text-[13px] title mt-1 font-[500] mb-1 text-[#000]'>
                                        <Link className='link transition-all'> {pro.title}</Link>
                                    </h3>

                                    <div className='MuiRating-root MuiRating-sizeSmall Mui-readOnly MuiRating-readOnly css-lsmt2w'>{renderStars(pro.star)}</div>

                                    <div className='flex items-center gap-4 justify-between'>
                                        <p className='oldPrice line-through text-gray-500 text-[12px] lg:text-[14px] font-[500]'>
                                            <CurrencyRupeeIcon fontSize="small" />{pro.oldPrice}
                                        </p>
                                        <p className='price text-primary text-[12px] lg:text-[14px]  font-[600]'>
                                            <CurrencyRupeeIcon fontSize="small" />{pro.newPrice}
                                        </p>
                                    </div>
                                    <div className='!absolute bottom-[15px] left-0 pl-3 pr-3 w-full'>
                                        <Button fullWidth variant="contained"
                                            className='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary btn-org addToCartBtn btn-border flex w-full btn-sm gap-2 css-uiq2rh'>
                                            <LocalGroceryStoreIcon className='mr-2' />
                                            Add to cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

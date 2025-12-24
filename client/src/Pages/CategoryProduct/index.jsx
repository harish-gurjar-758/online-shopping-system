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
                                <Link to={`/product-detailed/${pro.id}`}>
                                    <img src={pro.banner} alt={pro.title}
                                        className={view === "list" ? "w-[200px]" : "w-full h-[250px]"} />

                                    <div className='p-2'>
                                        <p className='text-sm text-stone-500'>{pro.braned}</p>
                                        <p className='font-medium'>{pro.title}</p>

                                        <div className='flex'>{renderStars(pro.star)}</div>

                                        <div className='flex justify-between mt-2'>
                                            <p className='line-through text-stone-400'>
                                                <CurrencyRupeeIcon fontSize="small" />{pro.oldPrice}
                                            </p>
                                            <p className='text-[#ff5252]'>
                                                <CurrencyRupeeIcon fontSize="small" />{pro.newPrice}
                                            </p>
                                        </div>

                                        <Button fullWidth variant="contained"
                                            className='!bg-[#ff5252] hover:!bg-[#fe6d6d] mt-2'>
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
    );
}

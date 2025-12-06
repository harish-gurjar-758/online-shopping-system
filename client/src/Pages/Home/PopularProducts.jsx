import React from 'react'
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function PopularProducts() {
    return (
        <div className='bg-white py-10'>
            <div className='container'>
                <div>
                    <h2 className='font-bold text-[25px]'>Popular Products</h2>
                    <p>Do not miss the current offers until the end of March.</p>
                </div>
                <div>

                </div>
            </div>
            <div className='w-full flex items-center justify-center gap-2'>
                <div className="card border border-l-rose-100">
                    <div className='img w-full h-[200px] overflow-hidden'>
                        <img src="https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>
                    <div className='w-full flex items-start flex-col gap-3 px-2 py-2'>
                        <p className='text-[13px] font-[500] text-stone-500'>jewellery</p>
                        <p className='text-[13px] font-[500]'>Jewellery trendy jewellery...</p>
                        <div>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                            <StarOutlineIcon />
                        </div>
                        <div className='w-full flex justify-between'>
                            <p className='line-through text-stone-400 text-[15px] font-[500]'>
                                <CurrencyRupeeIcon className='!text-[15px] !font-[500]' />
                                1200.00
                            </p>
                            <p className='text-[#ff5252] text-[15px] font-[500]'>
                                <CurrencyRupeeIcon className='!text-[15px] !font-[500]' />
                                1000.00
                            </p>
                        </div>
                        <Button className='cart-btn'> <LocalGroceryStoreIcon /> Add to cart</Button>
                    </div>
                </div>
                <div className="card border border-l-rose-100">
                    <div className='img w-full h-[200px] overflow-hidden'>
                        <img src="https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>
                    <div className='w-full flex items-start flex-col gap-3 px-2 py-2'>
                        <p className='text-[13px] font-[500] text-stone-500'>jewellery</p>
                        <p className='text-[13px] font-[500]'>Jewellery trendy jewellery...</p>
                        <div>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                            <StarOutlineIcon />
                        </div>
                        <div className='w-full flex justify-between'>
                            <p className='line-through text-stone-400 text-[15px] font-[500]'>
                                <CurrencyRupeeIcon className='!text-[15px] !font-[500]' />
                                1200.00
                            </p>
                            <p className='text-[#ff5252] text-[15px] font-[500]'>
                                <CurrencyRupeeIcon className='!text-[15px] !font-[500]' />
                                1000.00
                            </p>
                        </div>
                        <Button className='cart-btn'> <LocalGroceryStoreIcon /> Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

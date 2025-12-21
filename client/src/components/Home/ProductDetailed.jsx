import Button from '@mui/material/Button'
import React from 'react'
import Box from '@mui/material/Box';
import NumberSpinner from '../ProductDetailed/NumberSpinner';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";

export default function ProductDetailedSection() {
    return (
        <div className='container bg-white'>
            <div className='flex gap-5 py-5'>
                <div className='w-[45%] flex gap-3'>
                    <div className='w-[100px] flex items-center justify-start flex-col gap-2'>
                        <img src="https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                            className='w-[90%] rounded'
                        />
                        <img src="https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                            className='w-[90%] rounded'
                        />
                    </div>
                    <img src="https://th.bing.com/th/id/R.4aea12329f76bd36486da9a7082833b7?rik=PdNoh71YSdvefw&riu=http%3a%2f%2fblog.southindiajewels.com%2fwp-content%2fuploads%2f2018%2f02%2fgold-jewellery-sets-for-marriage-19.jpg&ehk=q9Tj80NdD0xrUQ1pHn9Q4cEcXVsGprUyKWwiyyOIDnw%3d&risl=&pid=ImgRaw&r=0"
                        className='w-[80%] rounded'
                        alt="" />
                </div>
                <div className='w-[50%] flex flex-col justify-center gap-4'>
                    <h2 className='font-[600] text-[25px]'>mandarin collar printed anarkali kurta</h2>
                    <div className='flex gap-2 items-center text-[13px]'>
                        <p>Brands : <span className='font-[600]'> fftsd de</span></p>
                        <div className='flex gap-1'>
                            <div className='text-yellow-300'>
                                <StarIcon className='!text-[20px]' />
                                <StarHalfIcon className='!text-[20px]' />
                                <StarOutlineIcon className='!text-[20px]' />
                            </div>
                            <p>Review (4)</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <p className='flex gap-3 !font-[500] text-[22px] text-primary'>
                            <span className='line-through text-gray-500'>₹785</span>
                            ₹899
                        </p>
                        <p>Available In Stock: <span className='text-green-600 font-[500]'> 74825 Items</span></p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='flex items-center gap-2'>
                        <p>Size:</p>
                        <p className='w-[40px] h-[30px] border-2 rounded flex items-center justify-center cursor-pointer'>S</p>
                        <p className='w-[40px] h-[30px] border-2 rounded flex items-center justify-center cursor-pointer'>M</p>
                        <p className='w-[40px] h-[30px] border-2 rounded flex items-center justify-center cursor-pointer'>L</p>
                    </div>
                    <p>Free Shipping (Est. Delivery Time 2-3 Days)
                    </p>
                    <div className='flex items-center mb-3 gap-5 h-[40px]'>
                        <div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4,
                                    justifyContent: 'center',
                                }}
                            >
                                <NumberSpinner min={1} max={40} />
                            </Box>
                        </div>

                        <Button className="!w-fit !bg-[#ff5252] hover:!bg-[#fe6d6d]">Add To Cart</Button>
                    </div>
                    <div className='flex gap-5 mt-4'>
                        <div className='flex items-center gap-1 cursor-pointer link'>
                            <FaRegHeart />
                            <p>Add to Wishlist</p>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer link'>
                            <LuGitCompareArrows />
                            <p>Add to Compare</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

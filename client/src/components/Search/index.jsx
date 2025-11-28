import React from 'react'
import './style.css';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    return (
        <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'>
            <input
                type="text"
                className='w-full h-[35px] focus:outline-none bg-transparent p-2 text-[15px]'
                placeholder='Search for  products...' />

            <Button
                className='!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black'
            ><SearchIcon className='text-[#2c2c2c] text-[22px]' /></Button>
        </div>
    )
}

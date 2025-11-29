import React from 'react';
import Button from '@mui/material/Button';
import { HiMenuAlt1 } from "react-icons/hi";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='py-2'>
      <div className="container flex items-center justify-end gap-5">
        <div className="col_1 w-[20%]">
          <Button className='!text-black gap-2 w-full'>
            <HiMenuAlt1 className='!text-[18px]' />
            Shop By Categories
            <TfiAngleDown className='text-[14px] ml-auto font-bold' />
          </Button>
        </div>
        <div className="col_2 w-[80%]">
          <ul className="flex items-center gap-5">
            <li className='list-none'>
              <Link className='link transition'>Home</Link>
            </li>
            <li className='list-none'>
              <Link className='link transition'>Fashion</Link>
            </li>
            <li className='list-none'>
              <Link className='link transition'>New Arrivals</Link>
            </li>
            <li className='list-none'>
              <Link className='link transition'>All Brands</Link>
            </li>
            <li className='list-none'>
              <Link className='link transition'>More</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

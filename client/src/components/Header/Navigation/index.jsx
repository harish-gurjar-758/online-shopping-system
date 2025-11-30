import React from 'react';
import Button from '@mui/material/Button';
import { HiMenuAlt1 } from "react-icons/hi";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";

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

        <div className="col_2 w-[62%]">
          <ul className="flex items-center justify-evenly gap-2">
            <li className='list-none'>
              <Link className='link transition text-[15px] font-[500]'>
                <Button className='link transition'>Home</Button>
              </Link>
            </li>
            <li className='list-none'>
              <Link className='link transition text-[15px] font-[500]'>
                <Button className='link transition'>Fashion</Button>
              </Link>
            </li>
            <li className='list-none'>
              <Link className='link transition text-[15px] font-[500]'>
                <Button className='link transition'>Bags</Button>
              </Link>
            </li>
            <li className='list-none'>
              <Link className='link transition text-[15px] font-[500]'>
                <Button className='link transition'>Footwear</Button>
              </Link>
            </li>
            <li className='list-none'>
              <Link className='link transition text-[15px] font-[500]'>
                <Button className='link transition'>Groceries</Button>
              </Link>
            </li>
            <li className='list-none'>
              <Link className='link transition text-[15px] font-[500]'>
                <Button className='link transition'>Beauty</Button>
              </Link>
            </li>
            <li className='list-none'>
              <Link className='link transition text-[15px] font-[500]'>
                <Button className='link transition'>Wellness</Button>
              </Link>
            </li>
            <li className='list-none'>
              <Link className='link transition text-[15px] font-[500]'>
                <Button className='link transition'>Jewellery</Button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col_3 w-[18%] text-center justify-center">
          <p className='text-[13px] font-[500] flex text-center justify-center gap-1 mb-0 mt-0'>
            <GoRocket fontSize={18} />
            Free International Delivery
          </p>
        </div>
      </div>
    </nav>
  );
}

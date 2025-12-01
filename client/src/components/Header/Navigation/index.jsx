import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { HiMenuAlt1 } from "react-icons/hi";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';

export default function Navigation() {
  const [isOpenCategoryPanel, setIsOpenCategory] = useState(false)
  const openCategoryPanel = () => {
    setIsOpenCategory(true);
  }
  return (
    <>
      {/* --Start-- */}
      <nav className='py-2'>
        <div className="container flex items-center justify-end gap-5">
          <div className="col_1 w-[20%]">
            <Button
              className='!text-black gap-2 w-full'
              onClick={openCategoryPanel}
            >
              <HiMenuAlt1 className='!text-[18px]' />
              Shop By Categories
              <TfiAngleDown className='text-[14px] ml-auto font-bold' />
            </Button>
          </div>

          <div className="col_2 w-[62%]">
            <ul className="flex items-center justify-evenly gap-1">
              <li className='list-none'>
                <Link
                to='/' 
                 className='link transition text-[15px] '>
                  <Button className='link transition font-[500]'>Home</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link className='link transition text-[15px] '>
                  <Button className='link transition font-[500]'>Fashion</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link className='link transition text-[15px]'>
                  <Button className='link transition font-[500]'>Bags</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link className='link transition text-[15px]'>
                  <Button className='link transition font-[500]'>Footwear</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link className='link transition text-[15px]'>
                  <Button className='link transition font-[500]'>Groceries</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link className='link transition text-[15px]'>
                  <Button className='link transition font-[500]'>Beauty</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link className='link transition text-[15px]'>
                  <Button className='link transition font-[500]'>Wellness</Button>
                </Link>
              </li>
              <li className='list-none'>
                <Link className='link transition text-[15px]'>
                  <Button className='link transition font-[500]'>Jewellery</Button>
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
      {/* --End-- */}

      {/* Category Panel component */}
      {/* --Start-- */}
      <CategoryPanel
        // openCategoryPanel={openCategoryPanel}
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategory={setIsOpenCategory}
      />
      {/* --End-- */}
    </>
  );
}

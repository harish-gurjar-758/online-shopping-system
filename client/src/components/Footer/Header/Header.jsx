import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { PiKeyReturnLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CiGift } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";

import '../Footer.css'
export default function Header() {
    return (
        <div className='flex items-center justify-center gap-2 py-3 lg:py-8 pb-0 lg:pb-8 px-0 lg:px-5 scrollableBox footerBoxWrap'>
            {/* --Start-- */}
            <div className='footer-card w-[15%] flex flex-col items-center justify-center gap-3 cursor-pointer px-5'>
                <FaTruckFast className='icon text-[40px]' />
                <h3 className='font-[600] text-[16px] text-[#3e3e3e]'>Free Shipping</h3>
                <p className='text-[#3e3e3e] font-[500] text-[12px]'>For all Orders Over $100</p>
            </div>
            {/* --End-- */}

            {/* --Start-- */}
            <div className='footer-card w-[15%] flex flex-col items-center justify-center gap-3 cursor-pointer px-5'>
                <PiKeyReturnLight className='icon text-[40px]' />
                <h3 className='font-[600] text-[16px] text-[#3e3e3e]'>30 Days Returns</h3>
                <p className='text-[#3e3e3e] font-[500] text-[12px]'>For an Exchange Product</p>
            </div>
            {/* --End-- */}

            {/* --Start-- */}
            <div className='footer-card w-[15%] flex flex-col items-center justify-center gap-3 cursor-pointer px-5'>
                <RiSecurePaymentLine className='icon text-[40px]' />
                <h3 className='font-[600] text-[16px] text-[#3e3e3e]'>Secured Payment</h3>
                <p className='text-[#3e3e3e] text-[12px] font-[500]'>Payment Cards Accepted</p>
            </div>
            {/* --End-- */}

            {/* --Start-- */}
            <div className='footer-card w-[15%] flex flex-col items-center justify-center gap-3 cursor-pointer px-5'>
                <CiGift className='icon text-[40px]' />
                <h3 className='font-[600] text-[16px] text-[#3e3e3e]'>Special Gifts</h3>
                <p className='text-[#3e3e3e] text-[12px] font-[500]'>Our First Product Order</p>
            </div>
            {/* --End-- */}

            {/* --Start-- */}
            <div className='footer-card w-[15%] flex flex-col items-center justify-center gap-3 cursor-pointer px-5'>
                <SlEarphonesAlt className='icon text-[40px]' />
                <h3 className='font-[600] text-[16px] text-[#3e3e3e]'>Support 24/7</h3>
                <p className='text-[#3e3e3e] text-[12px] font-[500]'>Contact us Anytime</p>
            </div>
            {/* --End-- */}
        </div>
    )
}

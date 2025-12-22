import React from 'react'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import SideControllers from '../../components/CategoryProduct/SideControllers';


export default function ProductByCategory() {
    return (
        <div className='w-full flex items-center'>
            <div className='w-[20%]'>
                <div>
                    <div>
                        <h2>Shop by Category <MdOutlineKeyboardArrowUp /> <MdOutlineKeyboardArrowDown /> </h2>
                        <SideControllers />
                    </div>
                </div>
            </div>
            <div>
                <div className='w-full bg-zinc-500'>

                </div>
            </div>
        </div>
    )
}

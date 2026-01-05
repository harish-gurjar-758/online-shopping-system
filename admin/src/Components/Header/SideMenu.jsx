import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png';
import Button from '@mui/material/Button';

import { LuLayoutDashboard } from "react-icons/lu";
import { FaImage } from "react-icons/fa";
import { TbBrandProducthunt } from "react-icons/tb";
import { RiSubtractLine, RiAddLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GiVerticalBanner } from "react-icons/gi";
import { IoLogoBuffer } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";

export default function SideMenu({ isOpenSideMenuPanel, setIsOpenSideMenuPanel }) {

    const listData = [
        {
            id: "01CT",
            navTitle: "Dashboard",
            icon: LuLayoutDashboard
        },
        {
            id: "02CT",
            navTitle: "Home Slides",
            icon: FaImage,
            subNav: [
                { id: "02CTsubCatFs01", name: "Home Banner List" },
                { id: "02CTsubCatFs02", name: "Add Home Banner List" },
            ],
        },
        {
            id: "03CT",
            navTitle: "Category",
            icon: LuLayoutDashboard,
            subNav: [
                { id: "03CTsubCatFs01", name: "Category List" },
                { id: "03CTsubCatFs02", name: "Add A Category" },
                { id: "03CTsubCatFs03", name: "Sub Category List" },
                { id: "03CTsubCatFs04", name: "Add A Sub Category List" },
            ],
        },
        {
            id: "04CT",
            navTitle: "Product",
            icon: TbBrandProducthunt,
            subNav: [
                { id: "04CTsubCatFs01", name: "Product List" },
                { id: "04CTsubCatFs02", name: "Product Upload" },
                { id: "04CTsubCatFs03", name: "Add Product RAMS" },
                { id: "04CTsubCatFs04", name: "Add Product WEIGHT" },
                { id: "04CTsubCatFs05", name: "Add Product SIZE" },
            ],
        },
        {
            id: "05CT",
            navTitle: "Users",
            icon: FiUsers
        },
        {
            id: "06CT",
            navTitle: "Order",
            icon: LiaShoppingBagSolid
        },
        {
            id: "07CT",
            navTitle: "Banners",
            icon: GiVerticalBanner,
            subNav: [
                { id: "07CTsubCatFs01", name: "Home Banner List" },
                { id: "07CTsubCatFs02", name: "Add Home Banner" },
                { id: "07CTsubCatFs03", name: "Home Banner List2" },
                { id: "07CTsubCatFs04", name: "Add Banner" }
            ],
        },
        {
            id: "08CT",
            navTitle: "Manage Logo",
            icon: IoLogoBuffer
        },
        {
            id: "09CT",
            navTitle: "Logout",
            icon: AiOutlineLogout
        },
    ];

    // Only one accordion open
    const [openNav, setOpenNav] = useState(null);

    const toggleNav = (id) => {
        setOpenNav(prev => (prev === id ? null : id));
    };

    const handleClose = () => {
        setIsOpenSideMenuPanel(false);
    };

    if (!isOpenSideMenuPanel) return null;

    return (
        <div className='sideBar fixed left-0 top-0 h-full w-[280px] bg-white shadow-lg z-50'>
            <div className="p-4">
                <img src={logo} alt="Logo" className='w-full mb-4' />

                {listData.map((nav) => {
                    const Icon = nav.icon;
                    const isOpen = openNav === nav.id;

                    return (
                        <div key={nav.id} className='w-full'>
                            {/* Parent */}
                            <Button
                                fullWidth
                                onClick={() => {
                                    nav.subNav ? toggleNav(nav.id) : handleClose();
                                }}
                                sx={{
                                    textTransform: 'none',
                                    justifyContent: 'space-between',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    px: 2,
                                    color: 'black'
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={20} />
                                    {nav.navTitle}
                                </div>

                                {nav.subNav && (
                                    <div
                                        className='border p-1 rounded-full'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleNav(nav.id);
                                        }}
                                    >
                                        {isOpen ? <RiSubtractLine /> : <RiAddLine />}
                                    </div>
                                )}
                            </Button>

                            {/* Sub Menu */}
                            {nav.subNav && isOpen && (
                                <div className='ml-8 mt-1'>
                                    {nav.subNav.map(sub => (
                                        <Link
                                            key={sub.id}
                                            to={`/admin/${sub.id}`}
                                            onClick={handleClose}
                                            className="block my-1 py-2 px-2 text-sm rounded hover:bg-slate-200"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

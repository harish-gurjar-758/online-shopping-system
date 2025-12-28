import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import WebLogo from '../../../public/logo.png';
import './NavBar.css'
import { MdLogin } from "react-icons/md";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ProfilePlaceholder from '../../assets/profile-placeholder.jpg'
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import SideMenuPanel from './SideMenuPanel';



export default function NavBar() {
    const [isOpenSideMenuPanel, setIsOpenSideMenuPanel] = useState(false);
    const openSideMenuPanel = () => {
        setIsOpenSideMenuPanel(true);
    }

    return (
        <div className='w-full'>
            <div className='w-full static lg:fixed top-0 left-0 px-4 py-3 flex items-center justify-center sm:justify-between z-50 bg-white'>
                <div className='flex items-center gap-5'>
                    <NavLink to="/">
                        <img src={WebLogo} alt="web logo" className='w-[200px]' />
                    </NavLink>
                    <div
                        className='cursor-pointer bg-[#e8e8e8] p-2 rounded'
                        onClick={openSideMenuPanel}
                    >
                        <RiMenu2Fill />
                    </div>
                </div>

                <div className='hidden sm:flex items-center gap-0'>

                    <NavLink
                        to="/login"
                        className={({ isActive }) => isActive ? 'active rounded-full font-[500]' : ''}
                    >
                        <Button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
                            <MdLogin />
                            Log In
                        </Button>
                    </NavLink>

                    <NavLink
                        to="/signup"
                        className={({ isActive }) => isActive ? 'active rounded-full' : ''}
                    >
                        <Button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
                            <PermIdentityIcon />
                            Sign Up
                        </Button>
                    </NavLink>

                    <div className='flex gap-5'>
                        <NavLink
                            to="/notifaction"
                            className={({ isActive }) => isActive ? 'active rounded-full' : ''}
                        >
                            <IoMdNotificationsOutline className='text-[30px]' />
                        </NavLink>

                        <div
                            className={({ isActive }) => isActive ? 'active rounded-full' : ''}
                        >
                            <img src={ProfilePlaceholder}
                                alt=""
                                className='w-[30px] h-[30px] rounded-full'
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* --- side menu --- */}
            {/* --Start-- */}
            <SideMenuPanel
                isOpenSideMenuPanel={isOpenSideMenuPanel}
                setIsOpenSideMenuPanel={setIsOpenSideMenuPanel}
            />
            {/* --End-- */}
        </div>
    );
}

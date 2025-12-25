import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import WebLogo from '../../../public/logo.png';
import './NavBar.css'
import { MdLogin } from "react-icons/md";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export default function NavBar() {
    return (
        <div className='w-full'>
            <div className='w-full static lg:fixed top-0 left-0 px-4 py-3 flex items-center justify-center sm:justify-between z-50'>

                <NavLink to="/">
                    <img src={WebLogo} alt="web logo" className='w-[200px]' />
                </NavLink>

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

                </div>
            </div>
        </div>
    );
}

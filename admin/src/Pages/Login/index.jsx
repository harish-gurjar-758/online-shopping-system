import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className='bg-white w-full'>
      <img src="https://ecommerce-admin-view.netlify.app/patern.webp" className="w-full fixed top-0 left-0 opacity-5" />
      <div className='loginBox card w-full md:w-[600px] h-[auto] pb-20 mx-auto pt-5 lg:pt-20 relative z-50 flex flex-col !gap-4'>
        <div className='w-full flex items-center justify-center'>
          <img src="https://ecommerce-admin-view.netlify.app/icon.svg" alt="icon" />
        </div>
        <h1 className='text-center text-[18px] sm:text-[35px] font-[800] mt-4'>
          Join us today! Get special
          <br />
          benefits and stay up-to-date.
        </h1>
        <div className='flex items-center justify-center w-full mt-5 gap-4'>
          <Button
            variant="outlined"
            sx={{ textTransform: 'none', color: "black", display: "flex", gap: "8px", fontWeight: "500" }}
          >Signin with Google <FcGoogle className='text-[20px]' /></Button>
        </div>
        <div className='w-full flex items-center justify-center gap-3'>
          <span class="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
          <span class="text-[10px] lg:text-[14px] font-[500]">Or, Sign in with your email</span>
          <span class="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
        </div>
        <form className='w-full px-8 mt-3'>
          <div className='form-group mb-4 w-full'>
            <h4 class="text-[14px] font-[500] mb-1">Full Name</h4>
            <input type="text"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              placeholder='Harish Gurjar'
            />
          </div>
          <div className='form-group mb-4 w-full'>
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input type="email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              placeholder='example@gmail.com'
            />
          </div>
          <div className='form-group mb-4 w-full'>
            <h4 className="text-[14px] font-[500] mb-1">Password</h4>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className='w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3'
                placeholder='* * * * * *'
              />
              <Button
                onClick={handleShowPassword}
                className='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600 css-iyey26'
              >
                {showPassword ? <FaEyeSlash className='text-[20px]' /> : <FaEye className='text-[20px]' />}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[14px]">Already have an account?</span>
            <Link
              to="/login"
              className="text-primary font-[700] text-[15px] text-blue-700 hover:underline hover:text-gray-700 cursor-pointer"
            >
              Sign In
            </Link>
          </div>

          <Button className='w-full' variant="contained">Sign Up</Button>
        </form>
      </div>
    </div>
  )
}

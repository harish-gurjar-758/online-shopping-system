import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='w-full h-full flex items-center justify-center py-6'>
            <div className="container">
                <div className='w-full card shadow-md sm:w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <div className='w-full bg-white py-5 px-5 flex flex-col gap-5'>
                        <h3 className='text-center text-[18px] text-black'>Register with a new account</h3>
                        <form className='w-full flex flex-col gap-5 mt-5'>
                            <input
                                className='border-2 border-gray outline-none rounded px-3 py-2'
                                type="text"
                                placeholder='Email Id'
                            />
                            <input
                                className='border-2 border-gray outline-none rounded px-3 py-2'
                                type="text"
                                placeholder='Password'
                            />
                            <p className="link font-medium w-fit cursor-pointer">
                                Forgot Password?
                            </p>
                            <Button
                                fullWidth
                                variant="contained"
                                className="!mt-3 !w-full !bg-[#ff5252] hover:!bg-[#fe6d6d] z-10"
                            >
                                Register
                            </Button>
                            <p className='text-center'>
                                Not Registered?
                                <Link>
                                </Link>
                                <a href="/register" className='text-primary hover:underline'>Sign Up</a>
                            </p>
                            <p className='text-center font-[500]'>Or continue with social account</p>
                            <Button className='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black css-iyey26'>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" class="text-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>&nbsp;
                                Sign Up with Google
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function WelcomeSection() {
    const navigate = useNavigate();

    const HandleAddProductBtn = () => {
        navigate('/admin/add-product')
    }
    return (
        <div className='w-full py-4 lg:py-1 px-5 border bg-[#f1faff] border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md'>
            <div className="info">
                <h1 className="text-[26px] lg:text-[35px] font-bold leading-8 lg:leading-10 mb-3">
                    Welcome,
                    <br />
                    <span className="text-[#3872FA]">hr Gurjar</span>
                </h1>
                <p>Here's What happening on your store today. See the statistics at once.</p>
                <br />
                <Button variant="contained"
                    className='text-white'
                    sx={{
                        textTransform: 'none',
                        justifyContent: 'space-between',
                    }}
                    onClick={HandleAddProductBtn}
                >
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path></svg> Add Product
                </Button>
            </div>
            <img
                src="https://ecommerce-admin-view.netlify.app/shop-illustration.webp"
                alt=""
                className='w-[250px] hidden lg:block'
            />
        </div>
    )
}

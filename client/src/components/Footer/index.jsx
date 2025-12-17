import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import './Footer.css'

// icons
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className='py-6 bg-[#fafafa]'>
            <div className="container">
                <Header />
                <Navigation />
            </div>
            <div className='border-t-2 flex pt-4'>
                <div className="container flex items-center justify-between flex-col lg:flex-row gap-4 lg:gap-0">
                    <div className='flex items-center gap-2'>
                        <Link className='w-[35px] h-[35px] border rounded-full flex items-center justify-center'>
                            <TiSocialFacebook className='text-[20px]' />
                        </Link>

                        <Link className='w-[35px] h-[35px] border rounded-full flex items-center justify-center'>
                            <AiOutlineYoutube />
                        </Link>

                        <Link className='w-[35px] h-[35px] border rounded-full flex items-center justify-center'>
                            <FaPinterestP />
                        </Link>

                        <Link className='w-[35px] h-[35px] border rounded-full flex items-center justify-center'>
                            <AiOutlineInstagram />
                        </Link>
                    </div>
                    <p className='text-[13px] text-center mb-0'>© 2024 - Ecommerce Template</p>
                    <div className='flex items-center gap-1'>
                        <img src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png" alt="" />
                        <img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="" />
                        <img src="https://ecommerce-frontend-view.netlify.app/master_card.png" alt="" />
                        <img src="https://ecommerce-frontend-view.netlify.app/american_express.png" alt="" />
                        <img src="https://ecommerce-frontend-view.netlify.app/paypal.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

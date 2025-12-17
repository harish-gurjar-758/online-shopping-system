import React from 'react'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='py-6 bg-[#fafafa]'>
            <div className="container">
                <Header />
                <Navigation />
            </div>
            <div className='border-t-2'></div>
        </footer>
    )
}

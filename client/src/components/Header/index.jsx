import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/logo.png'
import Search from '../Search'

export default function Header() {
    return (
        <header>
            {/* --start-- */}
            <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-250">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className='text-[12px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
                        </div>

                        <div className="col2 flex items-center justify-end">
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <Link
                                        to={'/help-center'}
                                        className='link text-[13px] font-[500] transition'
                                    >Help Center</Link>
                                </li>
                                <li className='list-none'>
                                    <Link
                                        to={'/order-tracking'}
                                        className='link text-[13px] font-[500] transition'
                                    >Order Tracking</Link>
                                </li>
                                {/* <li className='list-none'>
                                    <Link className='link text-[13px] font-[500] transition'>Help Center</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* --end-- */}

            {/* --start-- */}
            <div className="header">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to={'/'}>
                            <img src={logo} alt="./logo.png" />
                        </Link>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search/>
                    </div>
                    <div className="col3 w-[30%]"></div>
                </div>
            </div>
            {/* --end-- */}
        </header>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

// --- Start
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));
// --- End

export default function Header() {
    return (
        <header className='bg-white'>
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
            <div className="header py-4 border-t-[1px] border-b-[1px] border-gray-250">
                <div className="container flex items-center justify-between gap-10">
                    <div className="col1 w-[25%]">
                        <Link to={'/'}>
                            <img src="/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search />
                    </div>
                    <div className="col3 w-[30%] flex items-center justify-end">
                        <ul className="flex items-center gap-3">
                            <li className="list-none">
                                <Link className="link transition text-[15px] font-[500]">Login</Link> &nbsp;| &nbsp;
                                <Link className="link transition text-[15px] font-[500]">Register</Link>
                            </li>
                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="compare">
                                        <StyledBadge badgeContent={4} color="secondary" >
                                            <CompareArrowsIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Wish List">
                                    <IconButton aria-label="wishList">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FavoriteBorderIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <ShoppingCartIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* --end-- */}

            {/* --start-- */}
            <Navigation />
            {/* --end-- */}
        </header>
    )
}

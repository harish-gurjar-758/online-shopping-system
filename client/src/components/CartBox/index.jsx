import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import emptyCart from '../../assets/AssetsMedia/empty-cart.png';

export default function CartBox({ isOpenCartBox, setIsOpenCartBox }) {

    const toggleDrawer = (newOpen) => () => {
        setIsOpenCartBox(newOpen);
    };

    return (
        <Drawer
            open={isOpenCartBox}
            onClose={toggleDrawer(false)}
            anchor="right"
        >
            <Box sx={{ width: 480 }}
                role="presentation" className='cartBoxPanel'
            >
                <header>
                    <h2 className='p-4 border-b-[1px] border-gray-200 font-[600]'>Shopping Cart</h2>
                    {/* Cart items and details would go here */}
                </header>
                <div className="container mt-[100px]">
                    <div className="flex items-center justify-center flex-col gap-4">
                        <img src={emptyCart} alt="Empty Cart" width={150} />
                        <p className="text-center font-[500]">Your Cart is currently empty</p>
                        <Button className="!mt-3 !w-fill !bg-[#ff5252] hover:!bg-[#fe6d6d] z-10 !text-white">Continue Shopping</Button>
                    </div>
                </div>
            </Box>
        </Drawer>
    );
}
import React from 'react';
import Drawer from '@mui/material/Drawer';

export default function SideMenuPanel({ isOpenSideMenuPanel, setIsOpenSideMenuPanel }) {

    const handleClose = () => {
        setIsOpenSideMenuPanel(false);
    };

    return (
        <Drawer
            anchor="left"
            open={isOpenSideMenuPanel}
            onClose={handleClose}
        >
            <div className="w-[250px] p-4">
                this is menu
            </div>
        </Drawer>
    );
}

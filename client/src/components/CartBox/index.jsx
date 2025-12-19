import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';

export default function CartBox(props) {

    //Dynamic open/close drawer state
    const [openCartBox, setOpenCartBox] = useState({});


    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCartBox(newOpen);
    };

    const DrawerList = (
        <>
        </>
    );
    return (
        <Drawer
            open={props.isOpenCategoryPanel}
            onClose={toggleDrawer(false)}
            anchor={'right'}
        >
            {DrawerList}
        </Drawer>
    )
}
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { FiPlusSquare } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from '../../../../public/logo.png'

// CategoryData
const categoryNavData = [
    {
        id: "01CT",
        categoryName: "Fashion",
        subCategories: [
            { id: "01CTsubCatFs01", name: "Boys" },
            { id: "01CTsubCatFs02", name: "Girls" },
            { id: "01CTsubCatFs03", name: "Mens" },
            { id: "01CTsubCatFs04", name: "Womens" },
        ],
    },

    {
        id: "02CT",
        categoryName: "Electronics",
        subCategories: [
            { id: "01CTsubCatEl01", name: "Smart Watch" },
            { id: "01CTsubCatEl02", name: "Laptops" },
            { id: "01CTsubCatEl03", name: "Mobiles" },
            { id: "01CTsubCatEl04", name: "Tablets" },
        ],
    },

    {
        id: "03CT",
        categoryName: "Bags",
        subCategories: [
            { id: "01CTsubCatBg01", name: "Chaldrons Bag" },
            { id: "01CTsubCatBg02", name: "Mens Bag" },
            { id: "01CTsubCatBg03", name: "Womens Bag" },
        ],
    },

    {
        id: "04CT",
        categoryName: "Footwear",
        subCategories: [
            { id: "01CTsubCatFt01", name: "Boys Footwear" },
            { id: "01CTsubCatFt02", name: "Childrens Footwear" },
            { id: "01CTsubCatFt03", name: "Girls Footwear" },
            { id: "01CTsubCatFt04", name: "Mens Footwear" },
            { id: "01CTsubCatFt05", name: "Womens Footwear" },
        ],
    },

    { id: "05CT", categoryName: "Groceries" },
    { id: "06CT", categoryName: "Beauty" },
    { id: "07CT", categoryName: "Wellness" },
    { id: "08CT", categoryName: "Jewellery" },
];

export default function CategoryPanel(props) {

    // Dynamic open/close states
    const [openCategory, setOpenCategory] = useState({});
    const [openSubCategory, setOpenSubCategory] = useState({});

    const toggleCat = (catId) => {
        setOpenCategory((prev) => ({ ...prev, [catId]: !prev[catId] }));
    };

    const toggleSubCat = (subId) => {
        setOpenSubCategory((prev) => ({ ...prev, [subId]: !prev[subId] }));
    };

    const [openMain, setOpenMain] = useState({
        fashion: false,
        outerwear: false,
    });

    const [openSub, setOpenSub] = useState({
        apparel: false,
        outerwear: false,
        footwear: false,
    });

    const toggleMain = (key) => {
        setOpenMain((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const toggleSub = (key) => {
        setOpenSub((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCategory(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 280 }} role="presentation" className='categoryPanel'>
            <img src={logo} alt="" />
            <div className="flex items-center justify-between flex-wrap p-3">
                <h3 className="text-[16px] font-[500]">Shop By Category</h3>
                <CloseIcon className="cursor-pointer" onClick={toggleDrawer(false)} />
            </div>

            <Divider />

            <div className="scroll">
                <ul className="w-full">
                    {categoryNavData.map((cat) => (
                        <li
                            key={cat.id}
                            className="list-none w-full flex items-center justify-between flex-wrap relative"
                        >
                            <Link to={`/product/${cat.id}`} className="link w-full">
                                <Button
                                    disableRipple
                                    className="w-full !text-left !justify-start !px-3 link"
                                // onClick={() => cat.subCategories && toggleCat(cat.id)}
                                >
                                    {cat.categoryName}
                                </Button>

                                {cat.subCategories && (
                                    openCategory[cat.id] ? (
                                        <RiSubtractLine
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={() => toggleCat(cat.id)}
                                        />
                                    ) : (
                                        <FiPlusSquare
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={() => toggleCat(cat.id)}
                                        />
                                    )
                                )}
                                {openCategory[cat.id] && cat.subCategories && (
                                    <ul className="submenu relative w-full pl-3">
                                        {cat.subCategories.map((sub) => (
                                            <li
                                                key={sub.id}
                                                className="list-none flex items-center justify-between relative"
                                            >
                                                <Link to='' className="link w-full">
                                                    <Button
                                                        disableRipple
                                                        className="w-full !text-left !justify-start !px-3 link"
                                                        onClick={() => toggleSubCat(sub.id)}
                                                    >
                                                        {sub.name}
                                                    </Button>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Box>
    );

    return (
        <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    );
}

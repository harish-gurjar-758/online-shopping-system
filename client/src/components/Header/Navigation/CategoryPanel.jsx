import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { FiPlusSquare } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function CategoryPanel(props) {
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
        <Box sx={{ width: 280 }} role="presentation">
            <div className="flex items-center justify-between p-3">
                <h3 className="text-[16px] font-[500]">Shop By Category</h3>
                <CloseIcon className="cursor-pointer" onClick={toggleDrawer(false)} />
            </div>

            <Divider />

            <div className="scroll">
                <ul className="w-full">

                    {/* -------------------- FASHION -------------------- */}
                    <li className="list-none w-full flex items-center justify-between relative">
                        <Link to='' className="link w-full">
                            <Button
                                disableRipple
                                className="w-full !text-left !justify-start !px-3 link"
                            // onClick={() => toggleMain("fashion")}
                            >
                                Fashion
                            </Button>
                        </Link>

                        {openMain.fashion ? (
                            <RiSubtractLine
                                className="absolute right-3 top-3 cursor-pointer"
                                onClick={() => toggleMain("fashion")}
                            />
                        ) : (
                            <FiPlusSquare
                                className="absolute right-3 top-3 cursor-pointer"
                                onClick={() => toggleMain("fashion")}
                            />
                        )}

                        {openMain.fashion && (
                            <ul className="submenu absolute top-[100%] left-0 w-full pl-3 bg-white">

                                {/* ---------- Apparel ---------- */}
                                <li className="list-none flex items-center justify-between relative">
                                    <Link to='' className="link w-full">
                                        <Button
                                            disableRipple
                                            className="w-full !text-left !justify-start !px-3 link"
                                            onClick={() => toggleSub("apparel")}
                                        >
                                            Apparel
                                        </Button>
                                    </Link>

                                    {openSub.apparel ? (
                                        <RiSubtractLine
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={() => toggleSub("apparel")}
                                        />
                                    ) : (
                                        <FiPlusSquare
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={() => toggleSub("apparel")}
                                        />
                                    )}

                                    {openSub.apparel && (
                                        <ul className="ml-3 bg-white">
                                            <li><Link to="/dsfd" className="block py-2 px-3">Smart Tablet</Link></li>
                                            <li><Link to="/dsfd" className="block py-2 px-3">Crepe T-Shirt</Link></li>
                                            <li><Link to="/dsfd" className="block py-2 px-3">Leather Watch</Link></li>
                                            <li><Link to="/dsfd" className="block py-2 px-3">Rolling Diamond</Link></li>
                                        </ul>
                                    )}
                                </li>

                                {/* ---------- Outerwear ---------- */}
                                <li className="relative">
                                    <Button
                                        disableRipple
                                        className="w-full !text-left !justify-start !px-3 link"
                                        onClick={() => toggleSub("outerwear")}
                                    >
                                        Outerwear
                                    </Button>

                                    {openSub.outerwear ? (
                                        <RiSubtractLine
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={() => toggleSub("outerwear")}
                                        />
                                    ) : (
                                        <FiPlusSquare
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={() => toggleSub("outerwear")}
                                        />
                                    )}

                                    {openSub.outerwear && (
                                        <ul className="ml-3 bg-white">
                                            <li><Link to="/dsfd" className="block py-2 px-3">Jackets</Link></li>
                                            <li><Link to="/dsfd" className="block py-2 px-3">Hoodies</Link></li>
                                            <li><Link to="/dsfd" className="block py-2 px-3">Coats</Link></li>
                                        </ul>
                                    )}
                                </li>

                                {/* ---------- Footwear ---------- */}
                                <li className="relative">
                                    <Button
                                        disableRipple
                                        className="w-full !text-left !justify-start !px-3 link"
                                        onClick={() => toggleSub("footwear")}
                                    >
                                        Footwear
                                    </Button>

                                    {openSub.footwear ? (
                                        <RiSubtractLine
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={() => toggleSub("footwear")}
                                        />
                                    ) : (
                                        <FiPlusSquare
                                            className="absolute right-3 top-3 cursor-pointer"
                                            onClick={() => toggleSub("footwear")}
                                        />
                                    )}

                                    {openSub.footwear && (
                                        <ul className="ml-3 bg-white">
                                            <li><Link to="/dsfd" className="w-full link block py-2 px-3">Sneakers</Link></li>
                                            <li><Link to="/dsfd" className="w-full block py-2 px-3 link">Sandals</Link></li>
                                            <li><Link to="/dsfd" className="w-full block py-2 px-3 link">Boots</Link></li>
                                        </ul>
                                    )}
                                </li>

                            </ul>
                        )}
                    </li>

                    {/* -------------------- Simple Categories -------------------- */}
                    <li className="list-none flex items-center justify-between">
                        <Link to='/jewellery' className="link w-full">
                            <Button
                                className="w-full !text-left !justify-start !px-3 link"
                            >Jewellery</Button>
                        </Link>
                    </li>
                    <li className="list-none flex items-center justify-between relative">
                        <Link to='' className="link w-full">
                            <Button className="w-full !text-left !justify-start !px-3 link">Watches</Button>
                        </Link>
                    </li>

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

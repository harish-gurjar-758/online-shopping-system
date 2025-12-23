import React, { useState } from 'react';
import {
    List,
    ListItemText,
    Collapse,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Box,
    Slider
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';

const minDistance = 500;

export default function SideControllers() {

    const [openCategory, setOpenCategory] = useState(true);
    const [price, setPrice] = useState([0, 600000]);

    const categories = [
        "Electronics",
        "Mobiles",
        "Laptops",
        "Shoes",
        "Clothes",
        "Headphones",
        "Watches",
        "Accessories",
        "Home Appliances",
        "Gaming"
    ];

    const handlePriceChange = (e, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) return;

        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
        }
    };

    return (
        <div className="!bg-white w-full flex justify-center !h-[100%]">
            <List sx={{ width: '90%', maxWidth: 360 }}>

                {/* ================= CATEGORY FILTER ================= */}
                <div>
                    <div
                        className="flex cursor-pointer"
                        onClick={() => setOpenCategory(!openCategory)}
                    >
                        <ListItemText primary="Shop by Category" />
                        {openCategory ? <ExpandLess /> : <ExpandMore />}
                    </div>

                    <Collapse in={openCategory}>
                        <FormGroup
                            sx={{
                                maxHeight: 200,
                                overflowY: 'auto',
                                pl: 1,
                            }}
                        >
                            {categories.map((cat, i) => (
                                <FormControlLabel
                                    key={i}
                                    control={<Checkbox />}
                                    label={cat}
                                />
                            ))}
                        </FormGroup>
                    </Collapse>
                </div>

                {/* ================= PRICE FILTER ================= */}
                <div className="mt-6">
                    <ListItemText primary="Filter by Price" />

                    <Box px={1}>
                        <Slider
                            value={price}
                            min={0}
                            max={600000}
                            step={500}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                            disableSwap
                        />
                    </Box>

                    <div className="flex justify-between text-sm mt-1">
                        <p>From <span className="font-[500]">Rs {price[0]}</span></p>
                        <p>To <span className="font-[500]">Rs {price[1]}</span></p>
                    </div>
                </div>

                {/* ================= RATING FILTER ================= */}
                <div className="mt-6">
                    <ListItemText primary="Filter by Rating" />

                    <FormGroup>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <FormControlLabel
                                key={rating}
                                control={<Checkbox />}
                                label={
                                    <div className="flex items-center gap-1">
                                        {Array(rating).fill(0).map((_, i) => (
                                            <StarIcon key={i} sx={{ color: '#facc15', fontSize: 18 }} />
                                        ))}
                                        <span className="text-sm">&nbsp; & Up</span>
                                    </div>
                                }
                            />
                        ))}
                    </FormGroup>
                </div>

            </List>
        </div>
    );
}

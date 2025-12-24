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

export default function SideControllers({ filters, setFilters }) {

    const [openCategory, setOpenCategory] = useState(true);

    const categories = [
        "jewellery",
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

    /* ✅ Category */
    const handleCategoryChange = (cat) => {
        setFilters(prev => ({
            ...prev,
            categories: prev.categories.includes(cat)
                ? prev.categories.filter(c => c !== cat)
                : [...prev.categories, cat]
        }));
    };

    /* ✅ Price */
    const handlePriceChange = (e, newValue) => {
        setFilters(prev => ({
            ...prev,
            price: newValue
        }));
    };

    /* ✅ Rating */
    const handleRatingChange = (rating) => {
        setFilters(prev => ({
            ...prev,
            rating: prev.rating === rating ? null : rating
        }));
    };

    return (
        <div className="sidebar py-3 lg:py-5 sticky top-[130px] z-[50] pr-5">
            <List sx={{ width: '100%', maxWidth: 360 }}>

                {/* ================= CATEGORY ================= */}
                <div>
                    <div
                        className="flex justify-between cursor-pointer"
                        onClick={() => setOpenCategory(!openCategory)}
                    >
                        <ListItemText primary="Shop by Category" />
                        {openCategory ? <ExpandLess /> : <ExpandMore />}
                    </div>

                    <Collapse in={openCategory}>
                        <FormGroup sx={{ maxHeight: 200, overflowY: 'auto', pl: 1 }}>
                            {categories.map((cat, i) => (
                                <FormControlLabel
                                    key={i}
                                    control={
                                        <Checkbox
                                            checked={filters.categories.includes(cat)}
                                            onChange={() => handleCategoryChange(cat)}
                                        />
                                    }
                                    label={cat}
                                />
                            ))}
                        </FormGroup>
                    </Collapse>
                </div>

                {/* ================= PRICE ================= */}
                <div className="mt-6">
                    <ListItemText primary="Filter by Price" />

                    <Box px={1}>
                        <Slider
                            value={filters.price}
                            min={0}
                            max={100000}
                            step={100}
                            onChange={handlePriceChange}
                            valueLabelDisplay="auto"
                        />
                    </Box>

                    <div className="flex justify-between text-sm mt-1">
                        <p>From <b>₹{filters.price[0]}</b></p>
                        <p>To <b>₹{filters.price[1]}</b></p>
                    </div>
                </div>

                {/* ================= RATING ================= */}
                <div className="mt-6">
                    <ListItemText primary="Filter by Rating" />

                    <FormGroup>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <FormControlLabel
                                key={rating}
                                control={
                                    <Checkbox
                                        checked={filters.rating === rating}
                                        onChange={() => handleRatingChange(rating)}
                                    />
                                }
                                label={
                                    <div className="flex items-center gap-1">
                                        {Array(rating).fill(0).map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                sx={{ color: '#facc15', fontSize: 18 }}
                                            />
                                        ))}
                                        <span className="text-sm">& Up</span>
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

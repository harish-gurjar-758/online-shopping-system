import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function SortByFadeMenu({ setSortBy }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedText, setSelectedText] = React.useState("Name, A To Z"); // default

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (value) => {
        if (value) {
            setSelectedText(value);
            setSortBy(value);     // 🔥 CONNECTED TO PRODUCT SORT LOGIC
        }
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                onClick={handleClick}
                sx={{ textTransform: "none", color: 'black', backgroundColor: 'white', width: '150px' }}   // prevent caps lock
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                {selectedText}
            </Button>

            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                TransitionComponent={Fade}
            >
                <MenuItem
                    selected={selectedText === "Name, A To Z"}
                    onClick={() => handleClose("Name, A To Z")}
                >
                    Name, A To Z
                </MenuItem>

                <MenuItem
                    selected={selectedText === "Name, Z To A"}
                    onClick={() => handleClose("Name, Z To A")}
                >
                    Name, Z To A
                </MenuItem>

                <MenuItem
                    selected={selectedText === "Price, Low To High"}
                    onClick={() => handleClose("Price, Low To High")}
                >
                    Price, Low To High
                </MenuItem>

                <MenuItem
                    selected={selectedText === "Price, High To Low"}
                    onClick={() => handleClose("Price, High To Low")}
                >
                    Price, High To Low
                </MenuItem>
            </Menu>
        </div>
    );
}

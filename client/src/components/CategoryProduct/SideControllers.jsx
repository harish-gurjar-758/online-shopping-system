import React, { useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// ----
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

export default function SideControllers() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    // ---
    const [value1, setValue1] = useState([20, 37]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <div className='flex items-center flex-cols bg-white w-full justify-center'>
            <List
                sx={{ width: '90%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {/* --start-- */}
                <div>
                    <div className='flex' >
                        <ListItemText primary="Shop by Category" />
                        {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
                    </div>
                    <Collapse
                        sx={{ width: '100%', display: 'flex', justifyContent: 'end', border: '2px solid red' }}
                        in={open} timeout="auto" unmountOnExit>
                        <List
                            component="div" disablePadding>
                            <FormGroup
                                sx={{ width: '80%', border: '2px sold black' }}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                <FormControlLabel required control={<Checkbox />} label="Required" />
                            </FormGroup>
                        </List>
                    </Collapse >
                </div>
                {/* --end-- */}

                {/* --Start-- */}
                <div>
                    <ListItemText primary="Filter by Price" />

                    <Box
                    // sx={{ width: 300 }}
                    >
                        <Slider
                            getAriaLabel={() => 'Minimum distance'}
                            value={value1}
                            onChange={handleChange1}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            disableSwap
                        />
                    </Box>
                    <div className='flex justify-between items-center'>
                        <p>From<span className='font-[500] ml-2'>Rs: 0</span></p>
                        <p>From<span className='font-[500] ml-2'>Rs: 60000</span></p>
                    </div>
                </div>
                {/* --end-- */}

                {/* --start-- */}
                <div>
                    <ListItemText primary="Filter By Rating" />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel required control={<Checkbox />} label="Required" />
                    </FormGroup>
                </div>
                {/* --end-- */}

            </List >
        </div>
    )
}

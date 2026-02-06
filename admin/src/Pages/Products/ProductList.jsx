import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { alpha } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'
import ProductListTable from '../../Components/Product/ProductListTable';

// ------ TABLE HEAD CONFIG ------
const headCells = [
    { id: 'image', label: 'Image' },
    { id: 'categoryName', label: 'Category Name' },
    { id: 'description', label: 'Description' },
    { id: 'action', label: 'Action' },
]

// ------ TABLE HEAD ------
function EnhancedTableHead() {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id}>
                        <strong>{headCell.label}</strong>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

// ------ TOOLBAR ------
function EnhancedTableToolbar() {
    return (
        <Toolbar
            sx={{
                pl: 2,
                pr: 2,
                bgcolor: (theme) =>
                    alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            }}
        >
            <Typography sx={{ flex: '1 1 100%' }} variant="h6">
                Product Categories
            </Typography>
        </Toolbar>
    )
}

// ----- MAIN COMPONANT ----
export default function ProductList() {
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchPrtoduct = async ()=>{
            setLoading(true);
            try {
                
            } catch (error) {
                
            }
        }
    }, [])
    return (
        <div className='w-full mt-[100px]'>
            <header className='pl-6 mb-5 flex justify-between container'>
                <h2 className='w-fit p-2 font-500'>Product Category List</h2>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/admin/add-product-category')}
                >Add Product</Button>
            </header>
            <div className="container">
                <ProductListTable />
            </div>
        </div>
    )
}

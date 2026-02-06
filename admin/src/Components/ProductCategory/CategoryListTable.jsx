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
import { GetAllProductCategoryApi } from '../../apis/api'
import TablePagination from '@mui/material/TablePagination'
import { useNavigate } from "react-router-dom";

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

// ------ MAIN COMPONENT ------
export default function CategoryListTable() {
    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true)
            try {
                const response = await GetAllProductCategoryApi()

                const categories = response?.productCategory || []

                setRows(categories)
            } catch (error) {
                console.error('Category fetch error:', error)
                setRows([])
            } finally {
                setLoading(false)
            }
        }

        fetchCategories()
    }, [])

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar />

                <TableContainer>
                    <Table>
                        <EnhancedTableHead />

                        <TableBody>
                            {loading && (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        Loading...
                                    </TableCell>
                                </TableRow>
                            )}

                            {!loading && rows.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        No categories found
                                    </TableCell>
                                </TableRow>
                            )}

                            {!loading &&
                                rows.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell>
                                            <img
                                                src={row.logo}
                                                alt={row.categoryName}
                                                className='w-[50px]'
                                            /></TableCell>
                                        <TableCell>{row.categoryName}</TableCell>
                                        <TableCell>{row.description}</TableCell>
                                        <TableCell>
                                            <Button
                                                size="small"
                                                sx={{ mr: 1 }}
                                                startIcon={<BorderColorIcon />}
                                                onClick={() => navigate(`/admin/update-product-category/:${row._id}`)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                size="small"
                                                color="error"
                                                startIcon={<DeleteIcon />}

                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    component='div'
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    count={rows.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={(_, newPage) => setPage(newPage)}
                    onRowsPerPageChange={(e) => {
                        setRowsPerPage(parseInt(e.target.value, 10));
                        setPage(0);
                    }}
                />
            </Paper>
        </Box>
    )
}

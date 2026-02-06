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
import { GetAllProductCategoryApi } from '../../apis/api'

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
    const [loading, setLoading] = useState(true)
    const [rows, setRows] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true)
            try {
                const response = await GetAllProductCategoryApi()

                console.log("API RESPONSE 👉", response)

                const categories =
                    response?.data?.productCategories ||
                    response?.data?.data ||
                    response?.data ||
                    []

                setRows(Array.isArray(categories) ? categories : [])
            } catch (error) {
                console.error('Category fetch error:', error)
                setRows([])
            } finally {
                setLoading(false)
            }
        }

        fetchCategories()
    }, []);

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
                                            {row.image ? (
                                                <img
                                                    src={row.image}
                                                    alt={row.categoryName}
                                                    width="50"
                                                    height="50"
                                                    style={{ objectFit: 'cover', borderRadius: '6px' }}
                                                />
                                            ) : (
                                                'No Image'
                                            )}
                                        </TableCell>

                                        <TableCell>{row.categoryName}</TableCell>

                                        <TableCell>{row.description}</TableCell>

                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                sx={{ mr: 1 }}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

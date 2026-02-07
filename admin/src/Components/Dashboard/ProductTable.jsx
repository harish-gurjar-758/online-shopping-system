import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { GetAllProductApi } from '../../apis/api';

/* ================= SORTING ================= */

function descendingComparator(a, b, orderBy) {
    const valA = a?.[orderBy] ?? '';
    const valB = b?.[orderBy] ?? '';

    if (valB < valA) return -1;
    if (valB > valA) return 1;
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

/* ================= TABLE HEAD ================= */

const headCells = [
    { id: 'title', label: 'Title' },
    { id: 'banner', label: 'Banner' },
    { id: 'shortDescription', label: 'Description' },
];

function EnhancedTableHead({ order, orderBy, onRequestSort }) {
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox" />
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={(event) => onRequestSort(event, headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id && (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc'
                                        ? 'sorted descending'
                                        : 'sorted ascending'}
                                </Box>
                            )}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    onRequestSort: PropTypes.func.isRequired,
};

/* ================= TOOLBAR ================= */

function EnhancedTableToolbar() {
    return (
        <Toolbar
            sx={{
                pl: 2,
                pr: 1,
                bgcolor: (theme) =>
                    alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            }}
        >
            <Typography sx={{ flex: '1 1 100%' }} variant="h6">
                Product
            </Typography>

            <Tooltip title="Filter">
                <IconButton>
                    <FilterListIcon />
                </IconButton>
            </Tooltip>
        </Toolbar>
    );
}

/* ================= MAIN COMPONENT ================= */

export default function ProductTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('title');
    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [loading, setLoading] = useState(true);

    /* ===== API CALL ===== */
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const res = await GetAllProductApi();
                const product = res?.products || res?.data || [];
                setRows(Array.isArray(product) ? product : []);
            } catch (error) {
                console.error('Product fetch error:', error);
                setRows([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    /* ===== SORT HANDLER ===== */
    const handleRequestSort = (_, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc'); // ✅ FIXED
        setOrderBy(property);
    };

    /* ===== PAGINATED + SORTED ROWS ===== */
    const visibleRows = useMemo(() => {
        return rows
            .slice()
            .sort(getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [rows, order, orderBy, page, rowsPerPage]);

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar />

                <TableContainer>
                    <Table>
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />

                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        Loading...
                                    </TableCell>
                                </TableRow>
                            ) : visibleRows.length > 0 ? (
                                visibleRows.map((row) => (
                                    <TableRow hover key={row._id}>
                                        <TableCell padding="checkbox">
                                            <Checkbox />
                                        </TableCell>

                                        <TableCell>{row.title || '-'}</TableCell>

                                        <TableCell>
                                            {row?.banner?.length > 0 ? (
                                                <img
                                                    src={row.banner[0]} // ✅ ONLY INDEX 0
                                                    alt="banner"
                                                    width="60"
                                                    style={{ borderRadius: 6 }}
                                                />
                                            ) : (
                                                'No Image'
                                            )}
                                        </TableCell>

                                        <TableCell>
                                            {row.shortDescription || '-'}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        No products found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    component="div"
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
    );
}

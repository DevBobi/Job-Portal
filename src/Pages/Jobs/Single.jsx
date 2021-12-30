import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import { Button, CircularProgress, Paper, Table, TableBody, TableContainer } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Single = ({ row }) => {
    console.log(row);
    return (
        <StyledTableRow key={row.jobTitle}>
            <StyledTableCell> {row.jobTitle} </StyledTableCell>
            <StyledTableCell>{row.calories}</StyledTableCell>
            <StyledTableCell align="center">{row.vacancies}</StyledTableCell>
            <StyledTableCell align="right">{row.shift}</StyledTableCell>
            <StyledTableCell align="right">{row.jobType}</StyledTableCell>
            <StyledTableCell align="right">{row.lastDateOfApply}</StyledTableCell>
            <StyledTableCell align="right">
                <Button
                    // onClick={() => handleDelete(row?._id)}
                    size='small'
                    color='success'>
                    <ModeEditIcon />
                </Button>
                <Button
                    // onClick={() => handleDelete(row?._id)}
                    size='small'
                    color='error'>
                    <DeleteIcon />
                </Button>
                <NavLink to='/viewJobs' style={{ textDecoration: 'none' }}>
                    <Button
                        // onClick={() => handleDelete(row?._id)}
                        size='small'
                        color='info'>
                        <VisibilityIcon />
                    </Button>
                </NavLink>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default Single;

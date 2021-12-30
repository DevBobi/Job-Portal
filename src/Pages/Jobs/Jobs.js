import Header from '../Shared/Header/Header';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import { Button, CircularProgress, Paper, Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useAuth from '../../Hooks/useAuth';
import CreateJobs from '../Home/CreateJobs/CreateJobs';
import useJob from '../../Hooks/useJob';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Single from './Single';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));

const Jobs = () => {
    const { user } = useAuth();
    const { job, getJob } = useJob();
    console.log(job)

    React.useEffect(() => getJob(), [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Header />
            <Box sx={{ m: 10 }}>
                <Typography component='h1' variant='h5' sx={{ my: 4 }}>This is job</Typography>
                <Button variant="contained" color="success" onClick={handleOpen}><AddCircleIcon />{" "} Create Jobs</Button>
            </Box>
            <Box
                sx={{
                    mx: 5
                }}
            >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>POST NAME</StyledTableCell>
                                <StyledTableCell ></StyledTableCell>
                                <StyledTableCell align="center">Vacancies</StyledTableCell>
                                <StyledTableCell align="right">Shift</StyledTableCell>
                                <StyledTableCell align="right">Job Type</StyledTableCell>
                                <StyledTableCell align="right">Last Date</StyledTableCell>
                                <StyledTableCell align="right">ACTION</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {job ? job.map((item) => (
                                <Single row={item} />
                            )) : <CircularProgress />}
                        </TableBody>
                    </Table>
                </TableContainer>
                <CreateJobs
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    open={open}
                ></CreateJobs>
            </Box>

        </div>
    );
};

export default Jobs;
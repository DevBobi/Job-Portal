import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, MenuItem, TextField, Select, InputLabel } from '@mui/material';
import useJob from '../../../Hooks/useJob';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreateJobs = ({ handleOpen, handleClose, open }) => {
    const [jobData, setJobData] = React.useState({
        shift: 'day',
        jobType: 'full_time',
    });
    const { loading, error, success, postJob, clearSuccess } = useJob();

    const handleOnChange = (e) => {
        setJobData({ ...jobData, [e.target.name]: e.target.value });
    };

    const addAnother = () => {
        const { jobTitle, lastDateOfApply, shift, location, vacancies, jobType, jobDescription } = jobData
        jobTitle && lastDateOfApply && shift && location && vacancies && jobType && postData()
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        postData();
        clearSuccess();
        handleClose();
    };

    const postData = () => {
        const fromData = new FormData();
        Object.keys(jobData).forEach((key) => {
            fromData.append(key, jobData[key]);
        });
        postJob(fromData);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <Box sx={style}>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'>
                        Create Jobs
                    </Typography>
                    <Box
                        component='form'
                        onSubmit={handleFormSubmit}
                        sx={{ mt: 3 }}>
                        <Grid container spacing={2} sx={{ my: 3 }}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label='Job Title'
                                    id='outlined-size-small'
                                    name='jobTitle'
                                    onChange={handleOnChange}
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name='lastDateOfApply'
                                    type='date'
                                    required
                                    fullWidth
                                    id='date'
                                    views={['year', 'month', 'day']}
                                    label='Last Date of Apply'
                                    onChange={handleOnChange}
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Select
                                    fullWidth
                                    defaultValue='day'
                                    name='shift'
                                    value={jobData.shift}
                                    onChange={handleOnChange}>
                                    <MenuItem>Shift</MenuItem>
                                    <MenuItem value='day'>Day</MenuItem>
                                    <MenuItem value='night'>Night</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label='Location'
                                    id='outlined-size-small'
                                    name='location'
                                    onChange={handleOnChange}
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label='Vacancy'
                                    id='outlined-size-small'
                                    name='vacancies'
                                    type='number'
                                    onChange={handleOnChange}
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                    fullWidth
                                    defaultValue='Day'
                                    name='jobType'
                                    value={jobData.jobType}
                                    onChange={handleOnChange}>
                                    <MenuItem>Job Type</MenuItem>
                                    <MenuItem value='part_time'>
                                        Part Time
                                    </MenuItem>
                                    <MenuItem value='full_time'>
                                        Full Time
                                    </MenuItem>
                                    <MenuItem value='internship'>
                                        Internship
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label='Job Description'
                                    id='outlined-size-small'
                                    name='jobDescription'
                                    onChange={handleOnChange}
                                    size='small'
                                />
                            </Grid>
                        </Grid>
                        {success && (
                            <Typography sx={{ color: 'green' }}>
                                Job post successfully
                            </Typography>
                        )}
                        <Box>
                            <Button
                                type='submit'
                                variant='contained'
                                sx={{ mt: 3, mb: 2, mr: 2 }}>
                                {!loading ? 'Save' : 'Loading...'}
                            </Button>
                            <Button
                                onClick={addAnother}
                                variant='contained'
                                sx={{ mt: 3, mb: 2 }}>
                                {!loading
                                    ? 'Save and add another'
                                    : 'Loading...'}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default CreateJobs;

import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuth from '../../Hooks/useAuth'
import { Container } from '@mui/material';

const Registration = ({ setFormField }) => {
    const [loginData, setLoginData] = React.useState({ gender: 'Male' });
    const { loading, error, signup } = useAuth()

    const handleChange = e => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const fromData = new FormData();
        Object.keys(loginData).forEach((key) => {
            fromData.append(key, loginData[key]);
        });
        fromData.delete('password2')
        signup(fromData);
        !error && setFormField('signin')
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Typography sx={{
                    color: 'red',
                    mt: '15px'
                }} component='h1'>
                    {error}
                </Typography>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}>
                    <Typography component='h1' variant='h5' sx={{}}>
                        Sign Up
                    </Typography>
                    <Typography

                        variant='h6'
                        sx={{
                            fontSize: 15,
                            fontWeight: 'normal',
                            color: '#555555',
                        }}>
                        Please Register
                    </Typography>
                    <Box
                        component='form'
                        noValidate
                        onSubmit={handleRegisterSubmit}
                        sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    autoComplete='given-name'
                                    name='full_name'
                                    required
                                    fullWidth
                                    id='userName'
                                    label='Your Name'
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id='Number'
                                    label='Number'
                                    name='phone_number'
                                    type='tel'
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    autoComplete='given-name'
                                    name='birthDate'
                                    type='date'
                                    required
                                    fullWidth
                                    id='date'
                                    views={['year', 'month', 'day']}
                                    label='Date of Birth'
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id='select-label'>
                                            Gender
                                        </InputLabel>
                                        <Select
                                            defaultValue={'Male'}
                                            labelId='select-label'
                                            id='select'
                                            name='gender'
                                            value={loginData.gender}
                                            label='Age'
                                            onChange={handleChange}>
                                            <MenuItem value='Male'>Male</MenuItem>
                                            <MenuItem value='Female'>
                                                Female
                                            </MenuItem>
                                            <MenuItem value='other'>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email Address'
                                    name='email'
                                    autoComplete='email'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    autoComplete='new-password'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name='password2'
                                    label='Confirm Password'
                                    type='password'
                                    id='password2'
                                    autoComplete='new-password'
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}>
                            {loading ? 'loading...' : 'Sign Up'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Registration;
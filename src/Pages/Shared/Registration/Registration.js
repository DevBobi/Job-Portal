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

const Registration = () => {
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <Box

                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    my: 3
                }}
            >
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{}}>
                    Sign Up
                </Typography>
                <Typography container variant="h6" sx={{ fontSize: 15, fontWeight: "normal", color: "#555555" }}>
                    Please Register
                </Typography>
                <Box component="form" noValidate onSubmit='{handleSubmit}' sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Number"
                                label="Number"
                                name="number"
                                type="tel"
                                autoComplete="number"
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="date"
                                type="date"
                                required
                                fullWidth
                                id="date"
                                label="Date of Birth"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gender}
                                        label="Gender"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'male'}>Male</MenuItem>
                                        <MenuItem value={'female'}>Female</MenuItem>
                                        <MenuItem value={'other'}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="password2"
                                label="Confirm Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Registration;
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Registration from '../Registration/Registration';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useEffect } from 'react';

const logo = 'https://techforing.com/tfimg/logo.png';

export default function Login() {
    const [formField, setFormField] = React.useState('signup');
    const [loginData, setLoginData] = React.useState({});

    const { loading, error, user, login } = useAuth();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('email', loginData.email);
        formData.set('password', loginData.password);
        login(formData);
    };

    React.useEffect(() => {
        user?.user?.email && navigate('jobs')
    }, [user?.user?.email])

    return (
        <>
            <Grid container={true} sx={{ height: '100vh' }}>
                <Grid item xs={12} md={6} elevation={6}>
                    <Box
                        sx={{
                            my: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Grid
                            container
                            sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item>
                                <Button
                                    onClick={() => setFormField('signin')}
                                    sx={{ px: 10.5, py: 1.5, bgcolor: 'black' }}
                                    variant='contained'
                                    color='info'>
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={() => setFormField('signup')}
                                    sx={{ px: 10.5, py: 1.5, bgcolor: 'black' }}
                                    variant='contained'
                                    color='info'>
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>

                        <Box
                            component='main'
                            maxWidth='xs'
                            sx={{
                                border: '2px solid #003E6F',
                                borderRadius: '5px',
                            }}>
                            {formField === 'signup' ? (
                                <Registration setFormField={setFormField} />
                            ) : formField === 'signin' ? (
                                <>
                                    <Typography
                                        sx={{
                                            color: 'red',
                                            mt: '15px',
                                        }}
                                        component='h1'>
                                        {error}
                                    </Typography>

                                    <Container
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            my: 8,
                                        }}>
                                        <Typography component='h1' variant='h5'>
                                            Sign In
                                        </Typography>
                                        <Typography
                                            container
                                            variant='h6'
                                            sx={{
                                                fontSize: 15,
                                                fontWeight: 'normal',
                                                color: '#555555',
                                            }}>
                                            Please Sign In
                                        </Typography>
                                        <Box
                                            component='form'
                                            onSubmit={handleLoginSubmit}
                                            noValidate
                                            sx={{ mt: 1 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin='normal'
                                                        required
                                                        fullWidth
                                                        id='email'
                                                        label='Email'
                                                        onChange={handleOnChange}
                                                        name='email'
                                                        autoComplete='email'
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin='normal'
                                                        required
                                                        fullWidth
                                                        name='password'
                                                        label='Password'
                                                        onChange={handleOnChange}
                                                        type='password'
                                                        id='password'
                                                        autoComplete='current-password'
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Button
                                                type='submit'
                                                variant='contained'
                                                color='info'
                                                sx={{ mt: 3, mb: 2 }}>
                                                {loading
                                                    ? 'Loading...'
                                                    : 'Sign In'}
                                            </Button>

                                        </Box>
                                    </Container>
                                </>
                            ) : null}
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            my: 18,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Box container>
                            <img
                                style={{ maxWidth: '50%' }}
                                src={logo}
                                alt=''
                            />
                            <Typography
                                container
                                variant='h3'
                                sx={{
                                    my: 3,
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    color: '#555555',
                                }}>
                                Welcome To TechForing
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#19D086',
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                }}>
                                Notice
                            </Typography>
                            <Typography
                                container
                                variant='h6'
                                sx={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    color: '#555555',
                                }}>
                                An applicant can register only once.
                            </Typography>
                            <Typography
                                container
                                variant='h6'
                                sx={{
                                    fontSize: 15,
                                    fontWeight: 'normal',
                                    color: '#555555',
                                }}>
                                Register applicant, please login with your
                                credentials by entering email and password
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

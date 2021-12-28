import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Registration from '../Registration/Registration';

const login = "https://techforing.com/tfimg/logo.png";

export default function Login() {
    const [formField, setFormField] = React.useState(false);

    const formControl = e => {
        console.log(e)
        if (e === "signUp") {
            setFormField(true);
        }
        else {
            setFormField(false);
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={12} md={6} elevation={6} >
                    <Box
                        sx={{
                            my: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid >
                                <Button onClick={() => formControl("signIn")} sx={{ px: 10.5, py: 1.5, bgcolor: 'black' }} variant="contained" color="info">
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid  >
                                <Button onClick={() => formControl("signUp")} sx={{ px: 10.5, py: 1.5, bgcolor: 'black' }} variant="contained" color="info">
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>

                        <Container component="main" maxWidth="xs"
                            sx={{
                                border: '2px solid #003E6F',
                                borderRadius: '5px'
                            }}
                        >
                            {
                                formField === true ?
                                    <Registration />
                                    :
                                    <Box

                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            my: 8
                                        }}
                                    >
                                        <Typography
                                            component="h1"
                                            variant="h5"
                                        >
                                            Sign In
                                        </Typography>
                                        <Typography container variant="h6" sx={{ fontSize: 15, fontWeight: "normal", color: "#555555" }}>
                                            Please Sign In
                                        </Typography>
                                        <Box component="form" onSubmit='' noValidate sx={{ mt: 1 }}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email"
                                                onChange='{handleOnChange}'
                                                name="email"
                                                autoComplete="email"
                                                autoFocus
                                            />
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                onChange='{handleOnChange}'
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                            />
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="info"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Sign In
                                            </Button>
                                        </Box>
                                    </Box>
                            }
                        </Container>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            my: 18,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            container
                        >
                            <img style={{ maxWidth: '50%' }} src={login} alt="" />
                            <Typography container variant="h3" sx={{ my: 3, fontSize: 30, fontWeight: "bold", color: "#555555" }}>
                                Welcome To TechForing
                            </Typography>
                            <Typography sx={{ color: '#19D086', fontSize: 15, fontWeight: "bold" }}>Notice</Typography>
                            <Typography container variant="h6" sx={{ fontSize: 15, fontWeight: "bold", color: "#555555" }}>
                                An applicant can register only once.
                            </Typography>
                            <Typography container variant="h6" sx={{ fontSize: 15, fontWeight: "normal", color: "#555555" }}>
                                Register applicant, please login with your credentials by entering email and password
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid >
        </>
    );
}
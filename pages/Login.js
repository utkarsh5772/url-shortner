import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
//import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, container, AccordionDetails } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { setCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next';
import { Router, useRouter } from 'next/router';
import Footer from '../components/Footer';

//import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';

const defaultTheme = createTheme();

const Login = () => {

    const router = useRouter();

    useEffect(() => {
        //sessionStorage.removeItem("MyKey");
        deleteCookie('Mykey');
        deleteCookie("logged");
        deleteCookie("islogins");
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const detail = {
            identifier: data.get('identifier'),
            password: data.get('password')
        }
        console.log("--------check_bolte", detail);
        const ress = await LoginTarget(detail);
        sessionStorage.setItem("loggedin", true);


    };
    const LoginTarget = async (detail) => {

        const ress = await axios.post(`http://localhost:1337/api/auth/local`, {
            identifier: detail.identifier,
            password: detail.password
        })
            .then(function (response) {
                console.log(response);
                const keys = response.data.user.confirmed;
                console.log(keys);

                 sessionStorage.setItem('MyKey', keys);
                //setCookie('MyKey', keys);
                //  console.log(response.data.jwt);
                const fine = response.data.jwt;
                //setCookie("logged", "true");
                //sessionStorage.setItem("jwtt", fine);

                if (keys === true) {
                    router.push('/Dashboard');
                    const rohans = 'true';
                    setCookie('islogins', rohans);

                } else {
                    alert("Password Or Email is Inncorect Please Try Again With The Coreect Credentials");
                }

            })
            .catch(function (error) {
                console.log(error);
                alert("Password Or Email is Inncorrect Please Try Again With The Coreect Credentials");

            });
    }

    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            {/* frdf <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="identifier"
                                label="Email Address"
                                name="identifier"
                                autoComplete="identifier"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/SignUp" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <Footer/>
        </div>
    );
}

export default Login;
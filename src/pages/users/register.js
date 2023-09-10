import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from "formik";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {register} from "../../services/userService";

const defaultTheme = createTheme();

export default function Register({ setLogin }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = async (values) =>{
        // values.image = urlFile
        let a =  await dispatch(register(values))
        console.log(a.payload.data)
        navigate("/login")
    }
    return (
        <Formik initialValues={{ username: '', password: '' , telephone:''}}
                onSubmit={(values) => {
                    handleRegister(values)
                }} >
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Box

                    className="form-register"
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div className="form-register-user">
                        <Avatar sx={{ m: 1, width: "50px", height: "50px", margin: "auto" }}>
                            <img src="logo.png" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Register
                        </Typography>
                        <Box component="form" sx={{ mt: 1 }}
                            >
                            <TextField
                                margin="normal"
                                required
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                sx={{ width: "300px" }}
                            />
                            <TextField
                                margin="normal"
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                sx={{ width: "300px" }}
                            />
                            <TextField
                                margin="normal"
                                required
                                name="telephone"
                                label="Telephone"
                                type="tel"
                                id="telephone"
                                autoComplete="off"
                                sx={{ width: "300px" }}
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, width: "300px" }}
                            >
                                Register
                            </Button>
                            {/*<Grid container>*/}
                            {/*    <Grid item>*/}
                            {/*        <Link variant="body2" onClick={changeLogin}>*/}
                            {/*            {"Don't have an account? Register"}*/}
                            {/*        </Link>*/}
                            {/*    </Grid>*/}
                            {/*</Grid>*/}
                        </Box>
                    </div>
                </Box>
            </ThemeProvider>
        </Formik >
    );
}


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from "formik"
import IconButton from '@mui/material/IconButton';
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login} from "../../services/userService";
import {useNavigate} from "react-router-dom";

const defaultTheme = createTheme();

export default function Login({ setLogin }) {
    const changeLogin = () => {
        setLogin(false);
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        let a = await dispatch(login(values))

        if (a.payload.data.message.token === "User is not exist") {
            toast.error("Tài khoản không tồn tại ")
            navigate("/login")
        } else if (a.payload.data.message.token === "Password is wrong") {
            toast.warning("Bạn nhập sai mật khẩu")
            navigate("/login")
        } else {
            await dispatch(login(values))
            toast.success("Đăng nhập thành công")
            navigate("/")
        }

    }


    return (
        <Formik initialValues={{ username: '', password: '' }}
                onSubmit={(values) => {
                    handleLogin(values).then()
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

                    className="form-login"
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div className="form-login-user">
                        <Avatar sx={{ m: 1, width: "50px", height: "50px", margin: "auto" }}>
                        <img src="logo.png" style={{width: "50px", height: "50px", borderRadius: "50%"}} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" sx={{ mt: 1 }}
                            >
                            <TextField
                                margin="normal"
                                required
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="off"
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
                                autoComplete="off"
                                sx={{ width: "300px" }}
                            />
                             
                            
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, width: "300px" }}
                            >
                                LogIn
                            </Button>
                            <hr />
                            <Button variant="outlined" className="icon-fb">
                                <IconButton position="start" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-facebook color-svg-fb" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </IconButton>
                                Đăng nhập với Facebook
                            </Button>
                            <Button variant="outlined" className="icon-gg">
                                <IconButton position="start" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                </IconButton>
                                Đăng nhập với Google
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link variant="body2" onClick={changeLogin}>
                                        {"Don't have an account? Register"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </Box>
            </ThemeProvider>
        </Formik >
    );
}


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BasicModal from '../modal/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "../../style.css"

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false); // State để theo dõi trạng thái đăng nhập

    const handleOpen = () => setOpen(true);

    const user = JSON.parse(localStorage.getItem('user')) || null;
    const token = user && user.message && user.message.token;
    const username = token ? token.username : null;
    const isLoggedIn = !!token && !!username;

    React.useEffect(() => {
        console.log(user)
        // Kiểm tra nếu có token và chưa đăng nhập
        if (user && !loggedIn) {
            // Làm bất kỳ việc xác minh token nào ở đây (gửi yêu cầu đến máy chủ hoặc kiểm tra hợp lệ)

            // Nếu xác minh thành công, đặt loggedIn thành true
            setLoggedIn(true);
        }
    }, []);

    return (
        <Box>

            <AppBar position="static" className='navbar-bg'>

                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid item xs={1}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <img src="logo-navbar.png" style={{ width: "150px", height: "60px", marginLeft: "30px" }} alt="err img" />

                            </IconButton>
                        </Grid>

                        <Grid item xs={10} sx={{ marginTop: 1 }}>
                            <TextField
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none'
                                    }
                                }}
                                className='inp-search'
                                id="outlined-basic"
                                placeholder="Tìm kiếm"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            {isLoggedIn ? (
                                // Nếu đã đăng nhập, hiển thị tên người dùng
                                <div style={{ background: "red", width: "50px" }}>
                                    <h1>{username}</h1>
                                </div>
                            ) : (
                                // Nếu chưa đăng nhập, hiển thị button "Đăng nhập"
                                <Button color="inherit" onClick={handleOpen}>
                                    <AccountCircleIcon
                                        sx={{ color: "black", fontSize: 40, margin: "10px 0 0 0" }}
                                    />
                                </Button>
                            )}

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <BasicModal open={open} setOpen={setOpen} />
        </Box>
    );
}

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
    const handleOpen = () => setOpen(true);
    return (
        <Box >

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
                                <img src="logo-navbar.png" style={{ width: "150px", height: "60px", marginLeft:"30px"}} alt="err img"/>
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
                            <Button color="inherit" onClick={handleOpen}><AccountCircleIcon sx={{ color: "black", fontSize: 40, margin: "10px 0 0 0" }} /></Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <BasicModal open={open} setOpen={setOpen} />
        </Box >
    );
}
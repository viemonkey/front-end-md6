import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
    mt: 1,
    my: 8,
    mx: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: "auto"
};

export default function MyAccount(props) {
    const handleClose = () => props.setOpenMyAccount(false);
    return (
        <div>
            <Modal
                open={props.openMyAccount}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                        Đổi mật khẩu
                    </Typography>
                    <TextField id="outlined-basic" label="Mật khẩu hiện tại" variant="outlined" sx={{ mb: 2, width: "100%" }} />
                    <TextField id="outlined-basic" label="Mật khẩu mới" variant="outlined" sx={{ mb: 2, width: "100%" }} />
                    <TextField id="outlined-basic" label="Nhập lại mật khẩu" variant="outlined" sx={{ mb: 2, width: "100%" }} />
                    <Button variant="outlined" sx={{ width: "100%" }}>Đổi mật khẩu</Button>
                </Box>
            </Modal>
        </div>
    );
}
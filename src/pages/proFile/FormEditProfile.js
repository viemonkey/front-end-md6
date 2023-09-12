import { Button, TextField, Typography } from "@mui/material";
import * as React from "react";
import {useEffect} from "react";
import customAxios from "../../services/api";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";


export default function FormEditProfile() {
    const navigate = useNavigate()
    const [profile ,setProfile]= React.useState({})
    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if (!user || !user.message || !user.message.token || !user.message.token.idUser) {
            navigate('/');
            return;
        }

        const id = user.message.token.idUser;

        customAxios(`/users/?id=${id}`).then((res) => {
            setProfile(res.data);
            // Lấy dữ liệu người dùng (chẳng hạn, thông tin về mật khẩu hiện tại) từ API
        }).catch((error) => {
            console.error(error);
            // Handle error when unable to fetch user data
        });
    }, [user, navigate]);

    return (
        <div>
            <Box
                initialValues={profile}
                enableReinitialize={true}
                onSubmit={(values) =>{
                    customAxios.put(`/users/${profile.id}` ,values).then(()=>{
                        alert("da sua thanh cong")
                        navigate("/")
                    })
                }}
            >
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                Chỉnh sửa thông tin
            </Typography>
            <TextField
                id={"username"}
                sx={{ mb: 2, width: "100%" }}
                name={"username"}
                value={profile.username}
                onChange={(e) =>{
                    setProfile({ ...profile, username: e.target.value })
                }}
            />

            {/*<TextField*/}
            {/*    label="Address"*/}
            {/*    sx={{ mb: 2, width: "100%" }}*/}
            {/*/>*/}
            <TextField
                id={"telephone"}
                sx={{ mb: 2, width: "100%" }}
                name={"telephone"}
                value={profile.telephone}
                onChange={(e) =>{
                    setProfile({ ...profile, telephone: e.target.value })
                }}
            />
            <Button variant="contained" sx={{width: "100%"}}>Xác nhận</Button>
            </Box>
        </div>
    )
}

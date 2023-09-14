import "../../../style.css";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getUser} from "../../../services/userService";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Navbar from "../../../components/navbar/Navbar";

export default function DetailHost() {
    const dispatch = useDispatch()
    const [listUser, setListUser] = useState()


    useEffect(() =>{
        dispatch(getUser())
            .then((response) => {
                console.log(response)
                // Sau khi nhận được dữ liệu từ getUser, lưu danh sách người dùng vào state
                setListUser(response.payload.data);
            })
            .catch((error) => {
                // Xử lý lỗi nếu có
                console.error(error);
            });
    }, [dispatch])
    return (
        <div>
           <Navbar/>
            <h3 style={{ marginTop: "20px" }}>Thông tin chủ nhà</h3>

            <div className="list-frame">
                <table class="table">

                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ảnh đại diện</th>
                        <th scope="col">Tên tài khoản</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Tong doah thu</th>
                        <th scope="col">Nhà cho thuê</th>
                        <Link to={"/detail/host"}>
                            <button class="btn btn-light btn-text" type="button" aria-expanded="false">
                                Chi tiết
                            </button>
                        </Link>
                    </tr>
                    </thead>
                    {listUser && listUser.map((item, key) =>{
                        if(item.role === 'Người cho thuê') {
                            return(
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>ảnh</td>
                                <td>{item.username}</td>
                                <td>{item.telephone}</td>
                                <td>{item.status}</td>
                                <td>2222</td>
                                <td>Nhà A đã cho Việt thuê</td>
                            </tr>
                            </tbody>
                            )
                        }
                    })}
                </table>

                        <Link to={"/admin"}>
                            <Button variant="contained" startIcon={<KeyboardBackspaceIcon />}>Quay lại</Button>
                        </Link>

            </div>
        </div>
    )
}

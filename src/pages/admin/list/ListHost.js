import { Link } from "react-router-dom"
import "../../../style.css"
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getUser} from "../../../services/userService";

export default function ListHost() {
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
            <div className="list-frame">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên tài khoản</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Doanh thu</th>
                        <th scope="col">Số nhà đang cho thuê</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                        <th scope="col">
                            <Link to={"/detail-host"}>
                                <button class="btn btn-light btn-text" type="button" aria-expanded="false">
                                    Chi tiết
                                </button>
                            </Link>
                        </th>

                    </tr>
                    </thead>
                    { listUser && listUser.map((item,key) => {
                        if(item.role === 'Người cho thuê') {
                            return(
                            <tbody>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.username}</td>
                                <td>{item.telephone}</td>
                                <td>10000</td>
                                <td>10</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-light dropdown-toggle btn-text" type="button"
                                                data-toggle="dropdown" aria-expanded="false">
                                            Trạng thái
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Đang hoạt động</a>
                                            <a class="dropdown-item" href="#">Khoá</a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-light dropdown-toggle btn-text" type="button"
                                                data-toggle="dropdown" aria-expanded="false">
                                            Hành động
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Khoá</a>
                                            <a class="dropdown-item" href="#">Mở khoá</a>
                                            <a class="dropdown-item" href="#">Duyệt</a>
                                            <a class="dropdown-item" href="#">Từ chối</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                            )
                        }
                    })}
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
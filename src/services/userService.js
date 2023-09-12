import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (data) =>{
        const res = await axios.post('http://localhost:5000/user/login', data)
        return res

    }
)

export const register = createAsyncThunk(
    'user/register',
    async (data) =>{
        const res = await axios.post('http://localhost:5000/user/register', data);
        console.log(res);
        return res
    }
)

export const getUser = createAsyncThunk(
    'users/getUsers',
    async () =>{
        const res  = await axios.get('http://localhost:5000')
        return res
    }
)

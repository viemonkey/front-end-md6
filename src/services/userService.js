import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk(
    'user/login',
    async (data) =>{
        const res = await axios.post('http://localhost:5000/login', data)
        return res

    }
)
export const register = createAsyncThunk(
    'user/register',
    async (data) =>{
        const res = await axios.post('http://localhost:5000/register', data);
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

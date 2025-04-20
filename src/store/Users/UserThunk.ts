import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./UserTypes";

const API ='https://jsonplaceholder.typicode.com/users'

export const FetchUsers = createAsyncThunk<User[], void>(
    'user/get',
    async (_, thunkAPI) =>{
        try {
            const res = await axios.get<User[]>(API)
            return res.data            
        } catch (error) {
            return thunkAPI.rejectWithValue('Error al cargar los usuarios')
        }
    }
)

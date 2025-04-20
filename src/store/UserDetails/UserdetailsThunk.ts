import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserDetail, Post } from "./UserdetailsTypes";
import axios from "axios";

const USER_API = 'https://jsonplaceholder.typicode.com/users';
const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

export const FetchUserDetails = createAsyncThunk<
  { user: UserDetail; posts: Post[] }, 
  number, 
  { rejectValue: string }
>(
  'userdetail/get',
  async (id, thunkAPI) => {
    try {
      const [userRes, postsRes] = await Promise.all([
        axios.get<UserDetail>(`${USER_API}/${id}`),
        axios.get<Post[]>(`${POSTS_API}?userId=${id}`)
      ]);

      return {
        user: userRes.data,
        posts: postsRes.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка при загрузке данных пользователя');
    }
  }
);

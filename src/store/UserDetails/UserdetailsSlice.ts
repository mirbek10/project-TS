import { createSlice } from "@reduxjs/toolkit";
import { UserDetail, Post } from "./UserdetailsTypes";
import { FetchUserDetails } from "./UserdetailsThunk";

interface UserDetailState {
  user: UserDetail | null;
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: UserDetailState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const userDetailSlice = createSlice({
  name: "userdetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchUserDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(FetchUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.posts = action.payload.posts;
    });
    builder.addCase(FetchUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Ошибка загрузки';
    });
  },
});

export default userDetailSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { User } from "./UserTypes";
import { FetchUsers } from "./UserThunk";

interface UserState {
    list: User[];
    loading: boolean;
    error: boolean | null;
}

const initialState: UserState = {
    list: [],
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(FetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload; 
        });
        builder.addCase(FetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as boolean; 
        });
    }
});

export default userSlice.reducer;

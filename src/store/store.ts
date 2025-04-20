import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Users/UsersSLice";
import userDetailReducer from "./UserDetails/UserdetailsSlice";


export const myStore = configureStore({
    reducer:{
        users: userReducer,
        userDetails: userDetailReducer,
    }
})

export type RootState = ReturnType<typeof myStore.getState>
export type AddDispatch = typeof myStore.dispatch


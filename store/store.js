import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../Slice/loginSlice";


export const store=configureStore({
    reducer:{
        login:loginSlice,
    }
})
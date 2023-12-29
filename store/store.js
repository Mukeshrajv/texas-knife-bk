import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../Slice/loginSlice";
import categorySlice from "../Slice/categorySlice";


export const store=configureStore({
    reducer:{
        login:loginSlice,
        category:categorySlice,
    }
})
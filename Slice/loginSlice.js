import { createSlice } from "@reduxjs/toolkit";



const initialState={
  logindata:[]
}


export const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
     getuserdata:(state,action)=>{
        state.logindata=action.payload;
        // console.log(state.logindata);
     }

    }
});

export const{getuserdata}=loginSlice.actions;

export default loginSlice.reducer;
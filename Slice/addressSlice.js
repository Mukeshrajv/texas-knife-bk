import { createSlice } from "@reduxjs/toolkit";



const initialState={
  address:[],
}


export const addressSlice=createSlice({
    name:'address',
    initialState,
    reducers:{
     getaddressdata:(state,action)=>{
        state.address=action.payload;  
        console.log(state.address)
     }

    }
});

export const{getaddressdata}=addressSlice.actions;

export default addressSlice.reducer;
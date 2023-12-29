import { createSlice } from "@reduxjs/toolkit";



const initialState={
  categoryid:''
}


export const categorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
     getcategoryid:(state,action)=>{
        state.categoryid=action.payload;
     }
     
    }
});

export const{getcategoryid}=categorySlice.actions;

export default categorySlice.reducer;
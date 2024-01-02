import { createSlice } from "@reduxjs/toolkit";



const initialState={
  categoryid:'',
  categoryname:'',
  subcategoryname:''
}


export const categorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
     getcategoryid:(state,action)=>{
        state.categoryid=action.payload;
     },
     getcategoryname:(state,action)=>{
      state.categoryname=action.payload;
     },
     getsubcategoryname:(state,action)=>{
      state.subcategoryname=action.payload;
     }
     
    }
});

export const{getcategoryid,getcategoryname,getsubcategoryname}=categorySlice.actions;

export default categorySlice.reducer;
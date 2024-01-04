import { createSlice } from "@reduxjs/toolkit";



const initialState={
  categoryid:'',
  categoryname:'',
  subcategoryname:'',
    productId:"001",
    productImage:"https://www.texasknife.com/assets/no_images/no-images.png",
    productName:"Glow-in-The-Dark Beads-Package of 50",
    productCode:"BAADAS",
    productPrice:"12.95",
    productDescription:"The soft black sanding sponge is 4-1. the ultrafine pa os for fine sanding",
    productWeight:0.50,

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
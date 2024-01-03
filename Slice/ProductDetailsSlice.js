import { createSlice } from "@reduxjs/toolkit";



const initialState={
pdata:'',
pimage:'',

}


export const ProductDetailsSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        getProductDetails:(state,action)=>{
            state.pdata=action.payload;
            console.log("hello"+state.pdata)
        },
        getProductImage:(state,action)=>{
            state.pimage=action.payload;
            console.log("hello"+state.pdata)
        }
    }
})

export const{ getProductDetails,getProductImage}=ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;
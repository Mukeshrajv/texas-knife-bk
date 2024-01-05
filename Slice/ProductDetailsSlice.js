import { createSlice } from "@reduxjs/toolkit";



const initialState={
pdata:'',
cartrout:'',
cartload:true
}


export const ProductDetailsSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        getProductDetails:(state,action)=>{
            state.pdata=action.payload;
            console.log("hello"+state.pdata)
        },
        getProductRoute:(state,action)=>{
            state.cartrout=action.payload;
            // console.error(state.cartrout)
        },
        getCartReload:(state,action)=>{
               state.cartload=!state.cartload;     
        }
    }
})

export const{ getProductDetails,getProductRoute,getCartReload}=ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;
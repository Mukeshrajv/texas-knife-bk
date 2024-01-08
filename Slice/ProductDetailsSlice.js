import { createSlice } from "@reduxjs/toolkit";



const initialState={
pdata:'',
cartrout:'',
cartload:true,
buttonshown:true,
}


export const ProductDetailsSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        getProductDetails:(state,action)=>{
            state.pdata=action.payload;
        },
        getProductRoute:(state,action)=>{
            state.cartrout=action.payload;
            // console.error(state.cartrout)
        },
        getCartReload:(state,action)=>{
               state.cartload=!state.cartload;     
        },
        getButtonShown:(state,action)=>{
            state.buttonshown=action.payload;
        }
    }
})

export const{ getProductDetails,getProductRoute,getCartReload,getButtonShown}=ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;
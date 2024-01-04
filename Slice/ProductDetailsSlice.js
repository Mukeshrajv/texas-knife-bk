import { createSlice } from "@reduxjs/toolkit";



const initialState={
pdata:'',
cartrout:'',

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
        }
        
    }
})

export const{ getProductDetails,getProductRoute}=ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;
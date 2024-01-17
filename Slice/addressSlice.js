import { createSlice } from "@reduxjs/toolkit";



const initialState={
  shippingAddress:[],
  billingAddress:[]
}


export const addressSlice=createSlice({
    name:'address',
    initialState,
    reducers:{
     getaddressdata:(state,action)=>{
        state.shippingAddress=action.payload;  
        // console.log(state.address);
     },
     getbillingdata:(state,action)=>{
      state.billingAddress=action.payload
     }

    }
});

export const{getaddressdata,getbillingdata}=addressSlice.actions;

export default addressSlice.reducer;
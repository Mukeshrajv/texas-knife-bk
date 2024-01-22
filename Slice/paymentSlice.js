import { createSlice } from "@reduxjs/toolkit";


const initialState={
    paymentData:[],
    newShippingAddress:[],
    newBillingAddress:[],
    customerState:''

}

export const paymentSlice=createSlice({
    name:'payment',
    initialState,
    reducers:{
        getPaymentData:(state,action)=>{
            state.paymentData=action.payload
            // console.log("payment : "+state.paymentData.name+"Number : "+state.paymentData.number)
        },
        getNewShippingAddress:(state,action)=>{
            state.newShippingAddress=action.payload
            // console.log("shipping address"+state.newShippingAddress.firstName)
        },
        getNewBillingAddress:(state,action)=>{
            state.newBillingAddress=action.payload
            // console.log("Billing Address : "+ state.newBillingAddress)
        },
        getCustomerState:(state,action)=>{
            state.customerState=action.payload;
            console.log("customer state"+state.customerState)
        }
    }
})

export const {getPaymentData,getNewShippingAddress,getNewBillingAddress,getCustomerState}=paymentSlice.actions;
export default paymentSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";



const initialState={
  carttotal:'',
  cartList:[],
  shippingTax:'',
  basePriceExact:'',
  statetax:'',
  netAmount:'',
  overAllTotal:'',
  taxFullData:[],

}


export const cartDataSlice=createSlice({
    name:'cartdata',
    initialState,
    reducers:{
     getCartTotal:(state,action)=>{
        state.carttotal=action.payload;
        //  console.log("cart Total : "+state.carttotal)
     },
     getCartList:(state,action)=>{
        state.cartList=action.payload;
     },
     getShippingTax:(state,action)=>{
      const data=action.payload;

      state.shippingTax=data.replace('$', '')
      // console.log(state.shippingTax)
     },
     getBasePriceExact:(state,action)=>{
      state.basePriceExact=action.payload;
      // console.log("base_price_exact"+state.basePriceExact)
     },
     getStateTax:(state,action)=>{
      state.statetax=action.payload;
      // console.log("state Tax: "+state.statetax)
     },
     getNetAmount:(state,action)=>{
      const base_price=state.basePriceExact
      const shippingTax=state.shippingTax
      const combainedRate=state.statetax
    
      
      const Base_Price=parseFloat(base_price);
      const Shipping_Tax=parseFloat(shippingTax);
      const Combained_Rate=parseFloat(combainedRate);
      const Net_Amount=(Combained_Rate/100)*(Base_Price+Shipping_Tax)
      // console.log("basePrice:"+Base_Price)
      // console.log("ShippingTax:"+Shipping_Tax)
      // console.log("CombainedTax:"+Combained_Rate)
      // console.log("netWort : "+(Combained_Rate/100)*(Base_Price+Shipping_Tax))
     
      state.netAmount=parseFloat(Net_Amount.toFixed(2))
   },
   getOverAllTotal:(state,action)=>{
      const subTotal=state.carttotal;
      const netAmount=state.netAmount;
      const shippingTax=state.shippingTax

      const Sub_Total=parseFloat(subTotal);
      const Net_Amount=parseFloat(netAmount);
      const Shipping_Tax=parseFloat(shippingTax);

      // console.log("subTotal:"+Sub_Total)
      // console.log("NetAmount:"+Net_Amount)
      // console.log("Shipping :"+Shipping_Tax)

      // console.log(Sub_Total+Shipping_Tax+Net_Amount)
      state.overAllTotal=(Sub_Total+Shipping_Tax+Net_Amount).toFixed(2);
   },
   getTaxFullData:(state,action)=>{
      state.taxFullData=action.payload;
      // console.log(state.taxFullData);
   }
 
  
    }
});

export const{getCartTotal,getCartList,getShippingTax,getBasePriceExact,getStateTax,getNetAmount,getOverAllTotal,getTaxFullData}=cartDataSlice.actions;

export default cartDataSlice.reducer;
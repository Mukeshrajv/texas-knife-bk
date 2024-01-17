import React, { useEffect } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image,ScrollView ,Platform} from 'react-native'
import { RadioButton,useTheme  } from 'react-native-paper';
import Tab from '../../Tab/Tab';
import { useState } from 'react';
import ProductTotal from '../Sub-components/ProductTotal';
import { UseSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { getShippingTax } from '../../Slice/cartDataSlice';
import { getBasePriceExact } from '../../Slice/cartDataSlice';
import { getStateTax } from '../../Slice/cartDataSlice';
import { getNetAmount } from '../../Slice/cartDataSlice';
import { getOverAllTotal } from '../../Slice/cartDataSlice';

const Shipping = ({navigation}) => {
  const dispatch=useDispatch();

   const [checked, setChecked] = useState();
   const[shippingTax,setShippingTax]=useState([])

  
   const customer_id=encodeURIComponent('88985')
   const customer_state=encodeURIComponent("Texas")
   const shipping_city=encodeURIComponent('Katy');
   const shipping_state=encodeURIComponent('Texas');
   const shipping_zip=encodeURIComponent('77494');
   const ship_country=encodeURIComponent('United States');

   const sendTaxValue=(value)=>{
    
    setChecked(value)
    const string=[value]
    // console.log(string[0].replace('$', ''))
      dispatch(getShippingTax(string[0].replace('$', '')));
      dispatch(getNetAmount());
      dispatch(getOverAllTotal());
   }

   useEffect(()=>{
    const url='https://texasknife.com/dynamic/texasknifeapi.php?action=ups_shippment_ys&pounds=2&shipping_city='+shipping_city+'&shipping_state='+shipping_state+'&shipping_zip='+shipping_zip+'&ship_country='+ship_country;
    const fetchdata=async ()=>{
    try{
      const responce=await axios.get(url)
      if(responce){
        const shippingData=responce.data.data[0].shipping;
       // Split the string into an array of shipping options
    const optionsArray = shippingData.split(',');

    // Map over the array to create an array of objects
    const optionsObjects = optionsArray.map(option => {
      const [name, price] = option.split('||');
      return { name, price };
    });

    setShippingTax(optionsObjects);
    setChecked(optionsObjects[0].price)
    const string=[optionsObjects[0].price]
      dispatch(getShippingTax(string[0].replace('$', '')))
      dispatch(getNetAmount())
      dispatch(getOverAllTotal());
      }
    }catch(error){
    console.log("shipping Parcel service taxs not shown");
    }
    }
    // dispatch(getShippingTax(optionsObjects[0].price))
    fetchdata();
// ----------------------------------------------
    const basePriceUrl="https://www.texasknife.com/dynamic/texasknifeapi.php?action=final_tax_rate&store_id=1&customer_id="+customer_id;
     const fetchgetBasePrice=async()=>{
      try{
       const response=await axios.get(basePriceUrl);
       if(response){
       dispatch( getBasePriceExact(response.data.data[0].base_price_exact))
        // console.log(response.data.data[0].base_price_exact)
       }
      }catch(error){
       console.log("base price exact not getting ")
      }
     }
 fetchgetBasePrice()
 //-----------------------------------------------
    const stateTax="https://www.texasknife.com/dynamic/texasknifeapi.php?action=get_tax_details&shipping_state="+customer_state;
    const fetchStateTax=async()=>{
      try{
        const response=await axios.get(stateTax)
        if (response){
      dispatch(getStateTax(response.data.data[0].combined_rate))
        }

      }catch(error){
        console.log("State Tax Not Getting")
      }
    }
    fetchStateTax()
   },[])
  
  //  console.log(checked)
  return (
    <View style={styles.shipping}>
        <View style={styles.shipping_container}>

          <View style={styles.shipping_header_container}>
            <Text style={styles.shipping_header}>Shipping</Text>
          </View>
{/* ------------------------------------------------------------------------------------------------------------------- */}
          <ScrollView style={styles.shipping_detail_container}>
             
           <ProductTotal/>

 
 <View style={styles.shipping_method_container}>
  <View style={styles.shipping_method_header_container}>
    <Text style={styles.shipping_method_header}>Shipping Method</Text>
  </View>
<RadioButton.Group onValueChange={(value) =>sendTaxValue(value)} value={checked}>
        {/* ................. */}
        <View style={styles.parcel_Service_container}>
          <View style={styles.parcel_Service_header_container}>
          <Text style={styles.parcel_Service_header}>United Parcel Service</Text>
         </View>
        {shippingTax.slice(0, 4).map((option, index) => (
        <View key={index} style={styles.radiobutton_container}>
           <RadioButton value={option.price}/>
          <Text style={styles.radiobutton_text}>{option.name} {option.price}</Text>
        </View>
             ))}
        </View>
         {/* ............... */}
          {/* --------------------- */}
         <View style={styles.postal_service_container}>
         <View style={styles.postal_Service_header_container}>
         <Text style={styles.postal_Service_header}>United State Postal Service</Text>
         </View>
         {shippingTax.slice(4, 5).map((option, index) => (
        <View key={index} style={styles.radiobutton_container}>
           <RadioButton value={option.price}/>
          <Text style={styles.radiobutton_text}>{option.name} {option.price}</Text>
        </View>
             ))}
         </View>
          {/* --------------------- */}
         {/* .............. */}
         <View style={styles.store_pickup_container}>
         <View style={styles.store_pickup_header_container}>
        <Text style={styles.store_pickup_header}>Store Pick Up</Text>
        </View>
        {shippingTax.slice(5,6).map((option, index) => (
        <View key={index} style={styles.radiobutton_container}>
           <RadioButton value={option.price}/>
          <Text style={styles.radiobutton_text}>{option.name} {option.price}</Text>
        </View>
             ))}
         </View> 
  {/* ............. */}
      </RadioButton.Group>

 </View>
        
          </ScrollView>
{/* --------------------------------------------------------------------------------------------------------------- */}

          <View style={styles.shipping_footer_container}>
            <View style={styles.shipping_footer_button_container}>

              <TouchableOpacity style={styles.shipping_footer_button} onPress={()=>navigation.navigate("checkout")}>

                <Text style={styles.shipping_footer_button_text}>Continue To payment</Text>
              </TouchableOpacity>
            </View>
            {/* <Tab/> */}
          </View>

        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  shipping:{
    width:'100%',
    height:'100%'
  },
  shipping_container:{
    width:'100%',
    height:'100%',
    //  backgroundColor:'red',
    justifyContent:'space-between',

  },
  shipping_header_container:{
    // backgroundColor:'green',
    marginTop: 25,
    textAlign: 'center',
    alignItems: 'center',
    paddingTop:20
  },
  shipping_header:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2a2e7e'
  },
  shipping_detail_container:{
  //  backgroundColor:'yellow',
  //  margin:10
  },
  shipping_item_card_container:{
     backgroundColor:'#ffffff',
    margin:5,
    padding:10,
    borderRadius:15,
    ...Platform.select({
      android: {
        shadowColor: '#000',
        elevation: 5,
    },
    ios: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    }
    })

  
  },
  shipping_item_card:{
    backgroundColor:'#f2f2f7',
    width:'100%',
    height:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    columnGap:10,
    marginBottom:10,
    borderRadius:15
  },
  image_container:{
    width:80,
    height:80,
    // backgroundColor:'red'
  },
  card_detail_container:{
    width:220,
    height:80,
 
  },
  card_title_container:{
    height:40,
   overflow:'hidden'
  },
  card_title:{
    fontSize:16,
    fontWeight:'bold'
  },
  card_price:{
 fontSize:15,
 marginTop:2
  },
  card_total:{
  marginTop:5,
  fontSize:16
  },
  shipping_total_conatiner:{
      // backgroundColor:'pink',
      borderTopWidth:2
  },
  shipping_subtotal_container:{
      // backgroundColor:'lightgreen',
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10
  },
  total_text:{
    fontSize:16,
    fontWeight:"bold"
  },
  shipping_subtotal_container_Total:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
    borderTopWidth:2,
    paddingTop:10,
    paddingBottom:10
  },
  total_amount_text:{
    fontSize:16,
    paddingRight:5
  },
  shipping_method_container:{
  // backgroundColor:"yellow"
  },
  shipping_method_header_container:{
  padding:10
  },
  shipping_method_header:{
   fontSize:22,
   fontWeight:'bold',
   color:'#2a2e7e'
  },
  parcel_Service_container:{
  
  },
  parcel_Service_header_container:{
    padding:10
  },
  parcel_Service_header:{
    fontSize:18,
    fontWeight:'bold',
  },
  postal_service_container:{

  },
  postal_Service_header_container:{
    padding:10
  },
  postal_Service_header:{
    fontSize:18,
    fontWeight:'bold',
  },
  store_pickup_container:{

  },
  store_pickup_header_container:{
    padding:10
  },
  radiobutton_container:{
   flexDirection:'row',
   marginLeft:10,
   alignItems:'center',
  },
  radiobutton_text:{
    fontSize:15
  },
  store_pickup_header:{
    fontSize:18,
    fontWeight:'bold',
  },
  shipping_footer_container:{

  },
  shipping_footer_button_container:{
  // backgroundColor:'pink'
  },
  shipping_footer_button:{
    backgroundColor: '#1975d3',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 10,
  },
  shipping_footer_button_text:{
  color:'white',
  fontWeight:'bold'
  }
})
export default Shipping
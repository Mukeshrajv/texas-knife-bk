import React from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image,ScrollView ,Platform} from 'react-native'
import { RadioButton,useTheme  } from 'react-native-paper';
import Tab from '../../Tab/Tab';
import { useState } from 'react';
import ProductTotal from '../Sub-components/ProductTotal';

const Shipping = ({navigation}) => {
   const [checked, setChecked] = useState('first');
  
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
<RadioButton.Group onValueChange={(value) => setChecked(value)} value={checked}>
        {/* ................. */}
        <View style={styles.parcel_Service_container}>
          <View style={styles.parcel_Service_header_container}>
          <Text style={styles.parcel_Service_header}>United Parcel Service</Text>
         </View>
         <View style={styles.radiobutton_container}>
            <RadioButton value="13.24"/>
            <Text style={styles.radiobutton_text}>UPS Ground  $13.24</Text>
        </View>
        <View style={styles.radiobutton_container}>
          <RadioButton value="17.81" />
          <Text style={styles.radiobutton_text}>UPS Three-Day Select  $17.81</Text>
        </View>
        <View style={styles.radiobutton_container}>
          <RadioButton value="27.16" />
          <Text style={styles.radiobutton_text}>UPS Secound Day Air  $27.16</Text>
        </View>
        <View style={styles.radiobutton_container}>
          <RadioButton value="41.31" />
          <Text style={styles.radiobutton_text}>UPS Next Day Air  $41.31</Text>
        </View>
        </View>
         {/* ............... */}
          {/* --------------------- */}
         <View style={styles.postal_service_container}>
         <View style={styles.postal_Service_header_container}>
         <Text style={styles.postal_Service_header}>United State Postal Service</Text>
         </View>
          <View style={styles.radiobutton_container}>
                <RadioButton value="9.95" />
                <Text style={styles.radiobutton_text}>Periority Mail  $9.95</Text>
              </View>
         </View>
          {/* --------------------- */}
         {/* .............. */}
         <View style={styles.store_pickup_container}>
         <View style={styles.store_pickup_header_container}>
        <Text style={styles.store_pickup_header}>Store Pick Up</Text>
        </View>
        <View style={styles.radiobutton_container}>
                <RadioButton value='0' />
                <Text style={styles.radiobutton_text}>Store Pickup  $0.00</Text>
         </View>
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
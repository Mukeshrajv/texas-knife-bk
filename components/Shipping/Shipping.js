import React from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image,ScrollView ,Platform} from 'react-native'
import { CheckBox } from 'react-native-elements';
import Tab from '../../Tab/Tab';

const Shipping = () => {
  return (
    <View style={styles.shipping}>
        <View style={styles.shipping_container}>

          <View style={styles.shipping_header_container}>
            <Text style={styles.shipping_header}>Shipping</Text>
          </View>
{/* ------------------------------------------------------------------------------------------------------------------- */}
          <ScrollView style={styles.shipping_detail_container}>
             
             <View style={styles.shipping_item_card_container}>
              <View style={styles.shipping_item_card}>

                <View style={styles.image_container}>
                  <Image style={{width:'100%',height:'100%'}} source={require("../../assets/images/texaslogo.png")}/>
                </View>
                 
                 <View style={styles.card_detail_container}>
                  <View style={styles.card_title_container}>
                    <Text style={styles.card_title}>Favorite Chefs Santoku With CRYO (BL547)</Text>
                    </View>
                    <Text style={styles.card_price}>1 * 32.95</Text>
                    <Text style={styles.card_total}>Total Price:$ 32.95</Text>
                 
                 </View>

              </View>
             
  
            <View style={styles.shipping_total_conatiner}>
              <View style={styles.shipping_subtotal_container}>
                <Text style={styles.total_text}>Sub Total</Text>
                <Text style={styles.total_amount_text}>$52.90</Text>
              </View>
              <View style={styles.shipping_subtotal_container}>
                <Text style={styles.total_text}>Shipping</Text>
                <Text style={styles.total_amount_text}>$9.90</Text>
              </View>
              <View style={styles.shipping_subtotal_container}>
                <Text style={styles.total_text}>Estimated Sales Tax</Text>
                <Text style={styles.total_amount_text}>$5.90</Text>
              </View>
            <View style={styles.shipping_subtotal_container_Total}>
                <Text style={styles.total_text}>Total</Text>
                <Text style={styles.total_amount_text}>$200.20</Text>
              </View>
            </View>
          </View>

 
 <View style={styles.shipping_method_container}>
  <View style={styles.shipping_method_header_container}>
    <Text style={styles.shipping_method_header}>Shipping Method</Text>
  </View>
  <View style={styles.parcel_Service_container}>
    <View style={styles.parcel_Service_header_container}>
      <Text style={styles.parcel_Service_header}>United Parcel Service</Text>
    </View>
    <CheckBox
        title="UPS Ground  $13.24"
        checked={true}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}
        checkedColor="#2a2e7e"
        uncheckedColor="#7F7F7F"
      />
       <CheckBox
      
        title="UPS Three-Day Select  $17.81"
        checked={false}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}
        checkedColor="#2a2e7e"
        uncheckedColor="#7F7F7F"
      />
       <CheckBox
       
        title="UPS Secound Day Air  $27.16"
        checked={false}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}
        checkedColor="#2a2e7e"
        uncheckedColor="#7F7F7F"
      />
       <CheckBox
       
        title="UPS Next Day Air  $41.31"
        checked={false}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}
        checkedColor="#2a2e7e"
        uncheckedColor="#7F7F7F"
      />
    
  </View>

  <View style={styles.postal_service_container}>
  <View style={styles.postal_Service_header_container}>
      <Text style={styles.postal_Service_header}>United State Postal Service</Text>
    </View>
    <CheckBox
    
        title="Periority Mail  $13.24"
        checked={true}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}
        checkedColor="#2a2e7e"
        uncheckedColor="#7F7F7F"
      />
  </View>

  <View style={styles.store_pickup_container}>
  <View style={styles.store_pickup_header_container}>
      <Text style={styles.store_pickup_header}>Store Pick Up</Text>
    </View>
    <CheckBox

        title="Store Pickup  $0.00"
        checked={true}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}
        checkedColor="#2a2e7e"
        uncheckedColor="#7F7F7F"
      />
  </View>


 </View>

          </ScrollView>
{/* --------------------------------------------------------------------------------------------------------------- */}

          <View style={styles.shipping_footer_container}>
            <View style={styles.shipping_footer_button_container}>
              <TouchableOpacity style={styles.shipping_footer_button}>
                <Text style={styles.shipping_footer_button_text}>Continue To payment</Text>
              </TouchableOpacity>
            </View>
            <Tab/>
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
    height:'90%',
    // backgroundColor:'red',
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
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkBoxText: {
    fontSize: 18,
    fontWeight: 'normal',
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
  color:'white'
  }
})
export default Shipping
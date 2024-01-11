import React from 'react'
import { Text, View ,StyleSheet,ScrollView, TextInput,TouchableOpacity,Platform} from 'react-native'
import ProductTotal from '../Sub-components/ProductTotal'

const Checkout = () => {
  return (
    <View style={styles.checkout}>
      <View style={styles.checkout_container}>
           <View style={styles.checkout_header_container}>
            <Text style={styles.checkout_header}>Checkout</Text>
          </View>
          {/* -------------------------- */}
          <ScrollView>
            <ProductTotal/>
          
          <View style={styles.checkout_middle_container}>

            <View style={styles.contact_container}>
              <Text style={styles.contact}>Contact</Text>
              <Text style={styles.contact_value}>Dess@gmail.com</Text>
            </View>

            <View style={styles.shippingto_container}>
              <Text style={styles.shippingto}>Shipping To</Text>
              <View style={styles.shippingto_address_container}>
              <Text style={styles.shippingto_address}>First Name</Text>
              <Text style={styles.shippingto_address}>secound Name</Text>
              <Text style={styles.shippingto_address}>Address</Text>
              <Text style={styles.shippingto_address}>state</Text>
              <Text style={styles.shippingto_address}>City</Text>
              <Text style={styles.shippingto_address}>country</Text>
                <Text style={styles.shippingto_address}>Region</Text>
              </View>
            </View>

            <View style={styles.method_container}>
              <Text style={styles.method}>Method</Text>
              <Text style={styles.method_value}>UPS Ground -$13.32</Text>
            </View>

            <View style={styles.shippingto_container}>
              <Text style={styles.shippingto}>Billing To</Text>
              <View style={styles.shippingto_address_container}>
              <Text style={styles.shippingto_address}>First Name</Text>
              <Text style={styles.shippingto_address}>secound Name</Text>
              <Text style={styles.shippingto_address}>Address</Text>
              <Text style={styles.shippingto_address}>state</Text>
              <Text style={styles.shippingto_address}>City</Text>
              <Text style={styles.shippingto_address}>country</Text>
                <Text style={styles.shippingto_address}>Region</Text>
              </View>
            </View>
 
            <View style={styles.paywith_container}>
              <Text style={styles.paywith}>paywith</Text>
              <Text style={styles.paywith_value}>Money Order</Text>
            </View>

            <View style={styles.command_container}>
              <TextInput style={styles.command} placeholder='comment' />
            </View>

            </View>

          </ScrollView>
          {/* ------------------------------- */}
          
          <View style={styles.checkout_footer_container}>
            <View style={styles.checkout_footer_button_container}>
              <TouchableOpacity style={styles.checkout_footer_button} onPress={()=>navigation.navigate("checkout")}>
                <Text style={styles.checkout_footer_button_text}>Place Order</Text>
              </TouchableOpacity>
            </View>
            {/* <Tab/> */}
          </View>
      </View>
        
    </View>
  )
}
const styles=StyleSheet.create({
    checkout:{
      width:'100%',
      height:'100%'
    },
    checkout_container:{
      width:'100%',
      height:'100%',
      justifyContent:'space-between',
    },
    checkout_header_container:{
      marginTop: 25,
      textAlign: 'center',
      alignItems: 'center',
      paddingTop:20
    },
    checkout_header:{
      fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2a2e7e'
    },
    checkout_middle_container:{
     backgroundColor:'#ffffff',
      margin:10,
      padding:5,
      marginBottom:20,
      paddingBottom:20,
      borderRadius:15,
      // ...Platform.select({
      //   android: {
      //     shadowColor: 'red',
      //     elevation: 10,
      // },
      // ios: {
      //     shadowColor: '#171717',
      //     shadowOffset: { width: 2, height: 4 },
      //     shadowOpacity: 0.1,
      //     shadowRadius: 3,
      // }
      // })
    },
    contact_container:{
      // backgroundColor:'yellow',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:5,
      paddingBottom:5,
      borderBottomWidth:1
    },
    contact:{
    fontSize:14,
    fontWeight:'bold'
    },
    contact_value:{
      fontSize:14,
      width:160,
      textAlign:'right',
      color: '#2a2e7e'
    },
    shippingto_container:{
      // backgroundColor:'yellow',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:5,
      paddingBottom:5,
      borderBottomWidth:1
    },
    shippingto:{
      fontSize:14,
      fontWeight:'bold'
    },
    shippingto_address_container:{
    // backgroundColor:'red',
    width:160,
    
    },
    shippingto_address:{
      fontSize:14,
      textAlign:'right',
      color: '#2a2e7e'

    },
    method_container:{
      // backgroundColor:'orange',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:5,
      paddingBottom:5,
      borderBottomWidth:1
    },
    method:{
      fontSize:14,
    fontWeight:'bold'
    },
    method_value:{
      fontSize:14,
      width:160,
      textAlign:'right',
      color: '#2a2e7e'
    },
    paywith_container:{
      // backgroundColor:'green',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop:5,
      paddingBottom:5,
      borderTopWidth:1
    },
    paywith:{
      fontSize:14,
    fontWeight:'bold'
    },
    paywith_value:{
      fontSize:14,
      width:160,
      textAlign:'right',
      color: '#2a2e7e'
    },
    command_container:{
      marginTop:5,
    },
    command:{
    //  backgroundColor:"white",
     borderWidth:2,
     borderColor:'#8c8c8c',
     padding:5,
     fontSize:16,
     paddingLeft:5,
     paddingRight:5,
     textTransform:'capitalize',
     borderRadius:5
     
    },
    checkout_footer_container:{

    },
    checkout_footer_button_container:{

    },
    checkout_footer_button:{
      backgroundColor: '#1975d3',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      margin: 10,
    },
    checkout_footer_button_text:{
      color:'white',
      fontWeight:'bold'
    }

})
export default Checkout
import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useSelector } from 'react-redux'

const Cart = () => {

   const[cartItem,setCartItem]=useState([]);
   const encodedCustomerId = encodeURIComponent( useSelector((state)=>state.login.logindata.id));

   useEffect(()=>{
      const CartAPI='https://www.texasknife.com/dynamic/texasknifeapi.php?action=final_cart_details&store_id=1&customer_id='+encodedCustomerId;
      const fetchData = async () => {
      
       try{
        const response = await axios.get(CartAPI);
        if(response){
          setCartItem(response.data.data);
         //  console.error("cart data")
        }
       }catch(error){
           console.log("Cart item  not get yet")
       }
      }
      
     
      fetchData();
   },[])

   // const cartItems=[
   //    {productname:"product1",code:"BH102",amount:20.22},
   //    {productname:"product2",code:"BH102",amount:20.22},
   //    {productname:"product3",code:"BH102",amount:20.22},
   //    {productname:"product4",code:"BH102",amount:20.22},
   //    {productname:"product5",code:"BH102",amount:20.22},
   //    {productname:"product6",code:"BH102",amount:20.22},
   //    {productname:"product7",code:"BH102",amount:20.22},
   //    {productname:"product8",code:"BH102",amount:20.22},
   // ]
  return (
  <View style={styles.cart}>
    <View style={styles.cart_container}>
     <View style={styles.cart_header}>
        <Text style={styles.header}>My Cart</Text>
     </View>

     <View style={{justifyContent:'space-between',alignContent:"center",width:"100%",height:'90%'}}>

   

     <View style={styles.cart_items_container}>

     <FlatList
   data={cartItem}
   keyExtractor={i=>i.id}
   renderItem={({item})=>{
    return(
      <View style={styles.cart_item} keyExtractor key={item.id}> 

      <View style={styles.img_addbtn_container}>
       <View style={styles.product_image_container}>
       <Image style={{width:'100%',height:"100%",resizeMode:'stretch'}} source={{ uri: item.product_image }}/>

       </View>
       <View style={styles.product_increment_container}>
       <Icon name="minus-circle" size={20} color="#2a2e7e" />
          <Text style={styles.item_count}>{item.quantity}</Text>
          <Icon name="plus-circle" size={20} color="#2a2e7e" />
       </View>
      </View>

      <View style={styles.cartitem_name_container}>
       <Text style={styles.product_title}>{item.product_name}</Text>
       <Text style={styles.product_amt}>${item.product_price}</Text>
      </View>

      <View style={styles.cartitem_icon_container}>
      <Icon name="exclamation-circle" size={30} color="#2a2e7e" />
      <Micon name="delete" size={25} color="#ab0000" />
      </View>

   </View>
    )
   }}
   />


        {/* <View style={styles.cart_item}>

           <View style={styles.img_addbtn_container}>
            <View style={styles.product_image_container}>
            <Image style={{width:'100%',height:"100%",resizeMode:'stretch'}} source={require('../assets/images/FeatureProductImage/f_product-5.png')}/>

            </View>
            <View style={styles.product_increment_container}>
            <Icon name="minus-circle" size={20} color="#2a2e7e" />
               <Text style={styles.item_count}>1</Text>
               <Icon name="plus-circle" size={20} color="#2a2e7e" />
            </View>
           </View>

           <View style={styles.cartitem_name_container}>
            <Text style={styles.product_title}>Favorite Chefs Santoku with CRYO <Text>(BL547)</Text></Text>
            <Text style={styles.product_amt}>$19.95</Text>
           </View>

           <View style={styles.cartitem_icon_container}>
           <Icon name="exclamation-circle" size={30} color="#2a2e7e" />
           <Micon name="delete" size={25} color="#ab0000" />
           </View>

        </View> */}


     </View>

      <View style={styles.footer_conatiner}>
          <View style={styles.total_container}>
              <Text style={styles.total}>Sub Total-<Text style={styles.total_amt}>$19.95</Text></Text>
          </View>
          <TouchableOpacity style={styles.proceed_btn_container}>
            <Text style={styles.proceed_btn}>Proceed</Text>
          </TouchableOpacity>
      </View>

      </View>

    </View>

  </View>
  )
}
const styles=StyleSheet.create({
cart:{
   width:"100%",
   height:'100%',
   backgroundColor:'#ffffff'
},
cart_container:{
   // backgroundColor:"red",
   width:"100%",
   height:'100%'
},
cart_header:{
justifyContent:"center",
marginTop:40
},
header:{
   textAlign:'center',
   fontSize:16,
   fontWeight:'bold',
   color:'#2a2e7e'
},
cart_items_container:{
   //  backgroundColor:'white',
   height:'92%'
},
cart_item:{
    backgroundColor:"#f2f2f7",
   marginTop:15,
   padding:10,
   margin:10,
    borderRadius:16,
   // borderColor:"blue",
   // borderWidth:2,
   flexDirection:'row',
   // shadowColor:'red',
   // shadowOpacity:0.5,
   // shadowRadius:4,
   // shadowOffset:{
   //    height:1,
   //    width:1,
   // }/
},
product_image_container:{
   width:80,
   height:50,
   // backgroundColor:'yellow'
},
product_increment_container:{
   flexDirection:'row',
   marginTop:15,
   columnGap:10
},
item_count:{
   fontSize:16
},
cartitem_name_container:{
   width:200,
   padding:10
},
product_title:{
   // backgroundColor:'red',
   height:40,
   overflow:'hidden',
   fontSize:16,
   fontWeight:'bold',
   color:'#2a2e7e'
},
product_amt:{
   marginTop:5,
   fontWeight:'bold',
   color:'#ab0000'
},
cartitem_icon_container:{
   justifyContent:'space-around',
   alignItems:'center'
},
footer_conatiner:{
   margin:10,
   // backgroundColor:"green",
   flexDirection:'row',
   justifyContent:'space-between',
   height:45,
   alignItems:'center'
},
total:{
   paddingLeft:5,
   fontWeight:'bold',
   color:'#2a2e7e'

},
total_amt:{
   fontSize:17,
   fontWeight:"500",
   paddingLeft:10,
   color:"#ab0000"
},
proceed_btn_container:{
   backgroundColor:'#ab0000',
   marginRight:5,
   padding:10,
   borderRadius:20,
   
},
proceed_btn:{
   fontSize:16,
   fontWeight:'bold',
   paddingLeft:5,
   paddingRight:5,
   color:'#ffffff'

}
})
export default Cart
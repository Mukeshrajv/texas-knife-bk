import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity,FlatList,ToastAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getCartReload } from '../Slice/ProductDetailsSlice';
 import Loader from '../components/Sub-components/Loader'


const Cart = ({navigation}) => {
const dispatch=useDispatch();

   const[cartItem,setCartItem]=useState([]);
   const[loader,setLoader]=useState(false);

   const encodedCustomerId = encodeURIComponent( useSelector((state)=>state.login.logindata.id));
   const user_id=encodeURIComponent(useSelector((state)=>state.login.logindata.id));
   const session_id=encodeURIComponent(123456);
   
     const reload=useSelector((state)=>state.product.cartload);
   useEffect(()=>{
      
      const CartAPI='https://www.texasknife.com/dynamic/texasknifeapi.php?action=final_cart_details&store_id=1&customer_id='+encodedCustomerId;
     
      const fetchData = async () => {
      
       try{
        const response = await axios.get(CartAPI);
        if(response){
          setCartItem(response.data.data);
          setCount(Number(cartItem.quantity));
          setLoader(true)
         //  console.error("cart data")
        }
       }catch(error){
           console.log("Cart item  not get yet")
           setLoader(true)
       }
      }
      
      
     
      fetchData();
   },[reload])

   const DeleteApiCall=async(item)=>{
     
      const product_id=encodeURIComponent(item.id);
      try{
      
      const cartDeleteapi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=remove_cart&customer_id='+user_id+'&session_id='+session_id+'&product_id='+product_id;
      console.log("cart delete APi :: "+cartDeleteapi)
      const response=await axios.get(cartDeleteapi);
      if(response){
         
         if (Platform.OS === 'android') {
            ToastAndroid.show('Item Deleted Sucessfully', ToastAndroid.SHORT);
          } else if (Platform.OS === 'ios') {
           Alert.alert('Item Deleted successfully')
          }  
          dispatch(getCartReload(false))
      }

      }
      catch(error){
         if (Platform.OS === 'android') {
            ToastAndroid.show('Item Not Deleted', ToastAndroid.SHORT);
          } else if (Platform.OS === 'ios') {
           Alert.alert('Item Not Deleted')
          }  
         console.log("Cart Item Not Deleted")
      }
   }

   const deleteCart=(item)=>{
       DeleteApiCall(item)
   }
const increment=(count)=>{
   
}
const decrement=(count)=>{
   if(count<=1){
     
   }else{
      
   }
}
  return (
   <>
   {loader?(
       <View style={styles.cart}>
   

       {
          cartItem.length>=1?(
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
               <Icon name="minus-circle" size={20} color="#2a2e7e" onPress={()=>decrement(item.quantity)}/>
                  <Text style={styles.item_count}>{item.quantity}</Text>
                  <Icon name="plus-circle" size={20} color="#2a2e7e" onPress={()=>increment(item.quantity)} />
               </View>
              </View>
        
              <View style={styles.cartitem_name_container}>
               <Text style={styles.product_title}>{item.product_name}</Text>
               <Text style={styles.product_amt}>${item.product_price}</Text>
              </View>
        
              <View style={styles.cartitem_icon_container}>
              <Icon name="exclamation-circle" size={30} color="#2a2e7e" />
              <Micon name="delete" size={25} color="#ab0000" onPress={()=>deleteCart(item)} />
              </View>
        
           </View>
           )
           }}
           />
        
             </View>
               <View style={styles.footer_conatiner}>
               <View style={styles.total_container}>
                   <Text style={styles.total}>Sub Total-<Text style={styles.total_amt}>$19.95</Text></Text>
               </View>
               <TouchableOpacity style={styles.proceed_btn_container} onPress={()=> navigation.navigate('address')}>
                 <Text style={styles.proceed_btn}>Proceed</Text>
               </TouchableOpacity>
           </View>
       </View>
    
     </View>
       
          ):(
             <View style={styles.emptycart_container}>
             <View style={styles.emptycart_img_conatiner}>
             <Image
                     source={require('../assets/images/empty-cart.png')}
                     resizeMode='contain'
                     style={{
                         width:'100%',
                         height:'100%',
                      } }
                     />
                      <Text style={styles.emptycart_text}>Cart Empty</Text>
             </View>
            
             </View>
          )
       }
             
    
      </View>
   ):(
     <Loader/>
   )}
   </>
 
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
   alignItems:'center',
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

},
emptycart_container:{
   width:'100%',
   height:'100%',
   // backgroundColor:'yellow',
   alignItems:'center',
   justifyContent:'center'
},
emptycart_img_conatiner:{
   // backgroundColor:'red',
   width:"100%",
   height:300
},
emptycart_text:{
   textAlign:'center',
   marginTop:10,
   fontSize:22,
   fontWeight:'500',
   
 }
})
export default Cart
import React, { useEffect, useState } from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import FeatureProduct from './Sub-components/FeatureProduct';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './Sub-components/Category';


import { useSelector,useDispatch } from 'react-redux'
import { getCartCount } from '../Slice/cartDataSlice';
import axios from 'axios';


const Home = ({navigation}) => {
  const dispatch=useDispatch();
  const encodedCustomerId = encodeURIComponent( useSelector((state)=>state.login.logindata.id));
  const reload=useSelector((state)=>state.product.cartload);
useEffect(()=>{
  const CartAPI='https://www.texasknife.com/dynamic/texasknifeapi.php?action=final_cart_details&store_id=1&customer_id='+encodedCustomerId;
   console.log(CartAPI)  
  const fetchData = async () => {
  
   try{
    const response = await axios.get(CartAPI);
    if(response){
     const data=response.data.data
     dispatch(getCartCount(data.length))
     console.log(data.length)
    }
   }catch(error){
       console.log("Cart count  not get yet in home page api call")
      
   }
  }
  fetchData()
},[reload])


  return (
 <View style={styles.home}>
  <View style={styles.home_container}>

    <View style={styles.header_container}>
      <View style={styles.name_container}>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.clint_name}>{useSelector((state)=>state.login.logindata.user_name)}</Text>
      </View>
      <View style={styles.image_container}>
        <Image style={{width:45,height:45}} source={require('../assets/images/texaslogo.png')}/>
      </View>
    </View>

    <View style={styles.barcode_container}>
       <TouchableOpacity onPress={()=>navigation.navigate('ScanBar')} style={styles.scan_barcode}>
       <Icon name="barcode-sharp" size={30} color="#2a2e7e"  />
         <Text style={styles.scan}>Scan</Text>
       </TouchableOpacity>
       <TouchableOpacity  onPress={()=>navigation.navigate('SearchBar')} style={styles.enter_barcode}>
       <Icon name="barcode-sharp" size={30} color="red" />
         <Text style={styles.enter}>Enter Code</Text>  
       </TouchableOpacity>
    </View>

<View style={styles.featureproduct}> 
 {/* FeatureProduct */}
 <FeatureProduct navigation={navigation}/>
</View>
   
   <View style={styles.Category}>
     {/* categoryProduct */}
     <Category navigation={navigation}/>
   </View>

  </View>
 </View>
  )
}

const styles=StyleSheet.create({
  home:{
 width:'100%',
 height:'100%',
 backgroundColor:"#ffffff"
  },
  home_container:{
    marginTop:30,
    // backgroundColor:"lightgreen",
  },
  header_container:{
    // backgroundColor:'red',
    marginTop:20,
    margin:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  name_container:{
    paddingLeft:5
  },
  image_container:{
    paddingRight:5
  },
  hello:{
   fontSize:14,
   color:'#2a2e7e'
  },
  clint_name:{
   fontSize:20,
   fontWeight:"bold",
   color:'#2a2e7e'
  },
 barcode_container:{
  // backgroundColor:"red",
  flexDirection:'row',
  justifyContent:'space-around'
 },
 scan_barcode:{
  flexDirection:'row',
  backgroundColor:"#F2F2F7",
  padding:3,
  width:140,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10
 },
 enter_barcode:{
  flexDirection:'row',
  backgroundColor:"#F2F2F7",
  padding:3, 
   width:140,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10
 },
scan:{
 fontSize:16,
 color:'#2a2e7e',
 paddingLeft:5
},
enter:{
fontSize:16,
color:'#2a2e7e',
paddingRight:5
},
Category:{
  // backgroundColor:'red',
  height:'90%'
}
})

export default Home
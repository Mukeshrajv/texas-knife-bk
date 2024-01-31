import React, { useEffect, useState } from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import FeatureProduct from './Sub-components/FeatureProduct';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './Sub-components/Category';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



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
    //  console.log(data.length)
    }
   }catch(error){
       console.log("Cart count  not get yet in home page api call")
      
   }
  }
  fetchData()
},[reload])


  return (
    <View style={styles.Subcategory}>

    <View style={styles.header}>
    <View style={styles.header_container}>
      <View style={styles.name_container}>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.clint_name}>{useSelector((state)=>state.login.logindata.user_name)}</Text>
      </View>
      <View style={styles.image_container}>
        <Image style={{width:wp(15),height:wp(15)}} source={require('../assets/images/texaslogo.png')}/>
      </View>
    </View>

    <View style={styles.barcode_container}>
       <TouchableOpacity onPress={()=>navigation.navigate('ScanBar')} style={styles.scan_barcode}>
       <Icon name="barcode-sharp" size={30} color="#2a2e7e"  />
         <Text style={styles.scan}> Enter Scan</Text>
       </TouchableOpacity>
       <TouchableOpacity  onPress={()=>navigation.navigate('SearchBar')} style={styles.enter_barcode}>
       <Icon name="barcode-sharp" size={30} color="red" />
         <Text style={styles.enter}>Enter Code</Text>  
       </TouchableOpacity>
    </View>
    </View>

    <View style={styles.content}>
      <View style={{flex:1.5,}}>
      <FeatureProduct navigation={navigation}/>
      </View>
      <View style={{flex:2,}}>
      <Category navigation={navigation}/>
      </View>
    </View>
    {/* <View style={styles.footer}>
      
    </View> */}
 </View>

  )
}

const styles = StyleSheet.create({
  Subcategory:{
  flex:1,
  backgroundColor:'#ffffff'
  },
  header:{
    marginTop:25,
  // backgroundColor:'yellow',
  flex:1,
  // justifyContent:'center',
  // alignItems:'center',
  },
  content:{
  // backgroundColor:'pink',
  flex:4
  },
  footer:{
  backgroundColor:'white',
  flex:5,
  justifyContent:'flex-end'
  },
  header_container:{
    // backgroundColor:'red',
    // marginTop:20,
    // margin:15,
    flex:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  name_container:{
    paddingLeft:5
  },
  hello:{
    fontSize:wp(4),
    color:'#2a2e7e'
   },
   clint_name:{
    fontSize:wp(5.5),
    fontWeight:"bold",
    color:'#2a2e7e'
   },
  image_container:{
    paddingRight:5
  },
  barcode_container:{
    flex:1,
    // marginTop:20,
    // backgroundColor:"red",
    padding:5,
    flexDirection:'row',
    justifyContent:'space-around'
   },
   scan_barcode:{
    flexDirection:'row',
    backgroundColor:"#F2F2F7",
    // padding:3,
    width:wp(43),
    // height:hp(6),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
   },
   enter_barcode:{
    flexDirection:'row',
    backgroundColor:"#F2F2F7",
    // padding:3, 
    width:wp(43),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
   },
  scan:{
   fontSize:wp(5),
   color:'#2a2e7e',
   paddingLeft:5
  },
  enter:{
    fontSize:wp(5),
  color:'#2a2e7e',
  paddingRight:5
  },
  header_text:{
      fontSize:hp(2.1),
      color:'#2a2e7e'
  }
  })
  
export default Home
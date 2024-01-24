
import React from 'react'
import { View ,StyleSheet,Text,TouchableOpacity,Image,FlatList ,Platform,} from 'react-native'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux'; 
import { getProductDetails } from '../../Slice/ProductDetailsSlice'
import Loader from '../Sub-components/Loader'
import { getButtonShown } from '../../Slice/ProductDetailsSlice'
import BottomTab from "../Sub-components/ButtomTab/BottomTab";


const SubList = ({navigation}) => {
  const dispatch=useDispatch();
   const [subCategoryDataList,setSubCategoryDataList]=useState([]);
   const[loader,setLoader]=useState(false);

   
   const encodedcategoryname = encodeURIComponent(useSelector((state)=>state.category.categoryname));
   const encodedsubcategoryname=encodeURIComponent(useSelector((state)=>state.category.subcategoryname))
  
  // console.error(useSelector((state)=>state.category.categoryid))
  useEffect(()=>{
     
      const subcategorylistapi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cus_subcategory_product&category='+encodedcategoryname+'&sub_category='+encodedsubcategoryname;
      

      const fetchData = async () => {
         try{
          const response = await axios.get(subcategorylistapi);
          if(response){
       setSubCategoryDataList(response.data.data);
       setLoader(true);
            // console.log(response.data.data)
            // console.error("sucess")
          }
         }catch(error){
          setLoader(true);
             console.log("sub Category list is not get yet")   
         }
        }

       
        fetchData();
             
       
  },[])
 
  const handleChange=(item)=>{
    dispatch(getButtonShown(true));
    navigation.navigate('pop')
    dispatch(getProductDetails(item.sku))
   
  }

  const home = () => {
    navigation.navigate('Home')
}
const cart = () => {
    navigation.navigate('cart')
}
const profile = () => {
    navigation.navigate('Profile')
}
  return (
   <View style={styles.sublist}>
    <View style={styles.sublist_container}>
    <View style={styles.sublist_header_conatiner}>
    <TouchableOpacity style={{paddingRight:10,padding:5}} onPress={()=>navigation.navigate('subcategory')}>
        <Icon name="arrow-left" size={25} color="#2f2e7e" style={{marginLeft:10}} />
        </TouchableOpacity>
   
        <Text  style={styles.sublist_header}>{useSelector((state)=>state.category.subcategoryname)}</Text>
<View></View>

        {/* <TouchableOpacity style={{paddingLeft:10,padding:5}}  onPress={()=>navigation.navigate('cart')}>
         
        <Icon name="shopping-cart" size={25} color="#2f2e7e" style={{marginRight:10,position:'relative'}} onPress={()=>navigation.navigate('cart')}/>  
        <View style={styles.cart_icon_text_container}>
        <Text style={styles.cart_text}>12</Text>
        </View>
        </TouchableOpacity> */}
       
    </View>
    

{loader?(
 <View>
 {
   subCategoryDataList.length>=1?(
     <View style={styles.list_contianer}>
     {
          <FlatList
          data={subCategoryDataList}
          keyExtractor={i=>i.id}
          renderItem={({item})=>{
           return(
            <TouchableOpacity keyExtractor key={item.id} onPress={()=>handleChange(item)} >
            <View style={styles.list}>
               <View style={styles.image_container}>
                <Image style={{width:'100%',height:'100%',resizeMode:'stretch'}}  source={{ uri: item.product_image }}/>
               </View>
               <View style={styles.name_price_container}>
                <Text style={styles.item_name}>{item.product_name}</Text>
                <Text style={styles.item_price}>{item.product_price}</Text>
               </View>
            </View>
            </TouchableOpacity> 
           )
          }}
          />
      }
     </View>
   ):(
     <View style={styles.emptycart_container}>
     <View style={styles.emptycart_img_conatiner}>
     <Image
             source={require('../../assets/images/empty-cart.png')}
             resizeMode='contain'
             style={{
                 width:'100%',
                 height:'100%',
              } }
             />
            
             <Text style={styles.emptycart_text}>No Product Available</Text>
     </View>
    
     </View>
   )
 }
 </View>
):(
  <Loader/>
)}
 
   
      
     
    </View>
    <BottomTab home={home} cart={cart} profile={profile} />

   </View>
  )
} 

const styles=StyleSheet.create({
  sublist:{
    width:'100%',
    height:'100%',
    backgroundColor:"#ffffff"
  },
  sublist_container:{
    // backgroundColor:'red',
   
    ...Platform.select({
      ios: {
        marginTop:35,
        // Styles for iOS
        height: '89%'
      },
      android: {
        marginTop:25,
        height: '90%'
        // Styles for Android
      },
    }),
  },
  sublist_header_conatiner:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  sublist_header:{
   textAlign:'center',
   fontSize:16,
   fontWeight:'bold',
   color:'#2f2e7e'
  },
  list_contianer:{
    // backgroundColor:'yellow',
    marginTop:5,
    padding:10,
    height:700
  },
  list:{
   margin:5,
   flexDirection:'row',
   columnGap:20,
   backgroundColor:'#f2f2f7',
   padding:10,
   alignItems:'center',
   borderRadius:10

  },
  image_container:{
   width:65,
   height:65,
  //  backgroundColor:'lightgreen',
   borderRadius:5
  },
  name_price_container:{
    justifyContent:'center',
  },
  item_name:{
   width:220,
   height:40,
   overflow:'hidden',
   textAlign:"left",
  //  backgroundColor:'white',
   fontSize:16,
   color:'#2f2e7e',
   fontWeight:'bold'
  
  },
  item_price:{
  paddingTop:5,
  fontSize:16,
  fontWeight:'bold',
  color:'red',
  marginLeft:10
  },
  cart_icon_text_container:{
    position:'absolute',
    // backgroundColor:'white',
    width:15,
    height:15,
    borderRadius:50,
    left:16,
    top:7,
    justifyContent:'center',
    alignItems:'center',
    
},
cart_text:{
  color:'#ffffff',
fontWeight:'bold',
fontSize:8,
padding:2
},
emptycart_container:{
  width:'100%',
  height:'80%',
  //  backgroundColor:'yellow',
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

export default SubList
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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
    <View style={styles.Sublist}>
        <View style={styles.header}>
        <View style={styles.header_container}>
          {/* <TouchableOpacity style={{paddingRight:10,padding:5}} onPress={()=>navigation.navigate('Home')}>
        <Icon name="arrow-left" size={25} color="#2f2e7e" style={{marginLeft:10}} onPress={()=>navigation.navigate('Home')}/>
        </TouchableOpacity>
        <Text  style={styles.header_text}>{useSelector((state)=>state.category.categoryname)}</Text>
      <View></View> */}
       <Text  style={styles.header_text}>{useSelector((state)=>state.category.subcategoryname)}</Text>
          </View>
        </View>
        <View style={styles.content}>
          {loader?(
       <View style={styles.Sublist_content}>
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
         
           <View style={{}}>
           <Image
                   source={require('../../assets/images/empty-cart.png')}
                   resizeMode='contain'
                   style={{
                       width:'100%',
                       height:'100%',
                    } }
                   />
                  
                  
           </View>
          
        
         )
       }
       </View>
          ):(
             <Loader/>
          )}
        </View>
        <View style={styles.footer}>
        <BottomTab home={home} cart={cart} profile={profile} />
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
  Sublist:{
  flex:1,
  backgroundColor:'#ffffff'
  },
  header:{
    // backgroundColor:'yellow',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  flex:1
  },
  header_container:{
    flex:1,
    // height:hp('30%'),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:'red',
    paddingTop:hp(2),
},
header_text:{
  fontSize:hp(2.1),
  color:'#2a2e7e',
  textTransform:'capitalize'
},
  content:{
  // backgroundColor:'pink',
  flex:8
  },
  footer:{
  // backgroundColor:'white',
  flex:0.7,
  justifyContent:'flex-end'
  },
  Sublist_content:{
    flex:1
  },
  list_contianer:{
    flex:1
  },
  list:{
    margin:5,
    flexDirection:'row',
    columnGap:20,
    backgroundColor:'#e8fcfc',
    padding:10,
    // alignItems:'center',
    borderRadius:10,
    marginRight:hp(2),
    marginLeft:hp(2)
   },
   image_container:{
    width:hp(8),
    height:hp(8),
    // backgroundColor:'lightgreen',
    borderRadius:5
   },
   name_price_container:{
    // justifyContent:'center',
  },
  item_name:{
    width:hp('28%'),
    height:hp(5),
    overflow:'scroll',
    textAlign:"left",
    // backgroundColor:'white',
    fontSize:hp(2),
    color:'#2f2e7e',
    fontWeight:'bold'
   },
   item_price:{
    paddingTop:hp(1),
    fontSize:hp(2),
    fontWeight:'bold',
    color:'red',
    marginLeft:hp(1)
    },
  })

export default SubList
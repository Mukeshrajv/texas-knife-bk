
import React from 'react'
import { View ,StyleSheet,Text,TouchableOpacity,Image,FlatList ,Platform,} from 'react-native'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

const SubList = ({navigation}) => {
   const [subCategoryDataList,setSubCategoryDataList]=useState([]);
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
            // console.log(response.data.data)
            // console.error("sucess")
          }
         }catch(error){
             console.log("sub Category list is not get yet")   
         }
        }
        
       
        fetchData();
  },[])
  return (
   <View style={styles.sublist}>
    <View style={styles.sublist_container}>
    <View style={styles.sublist_header_conatiner}>
    <TouchableOpacity style={{paddingRight:10,padding:5}} onPress={()=>navigation.navigate('subcategory')}>
        <Icon name="arrow-left" size={25} color="#2f2e7e" style={{marginLeft:10}} onPress={()=>navigation.navigate('subcategory')}/>
        </TouchableOpacity>
   
        <Text  style={styles.sublist_header}>Sub Category Heading</Text>


        <TouchableOpacity style={{paddingLeft:10,padding:5}}  onPress={()=>navigation.navigate('cart')}>
         
        <Icon name="shopping-cart" size={25} color="#2f2e7e" style={{marginRight:10,position:'relative'}} onPress={()=>navigation.navigate('cart')}/>  
        <View style={styles.cart_icon_text_container}>
        <Text style={styles.cart_text}>12</Text>
        </View>
        </TouchableOpacity>
       
    </View>

       {/* <View style={styles.header_container}>
        <Text style={styles.header}>Rough</Text>
       </View> */}
   
       <View style={styles.list_contianer}>



       {
            <FlatList
            data={subCategoryDataList}
            keyExtractor={i=>i.id}
            renderItem={({item})=>{
             return(
              <TouchableOpacity keyExtractor key={item.id} onPress={()=>navigation.navigate('pop')} >
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






        {/* <TouchableOpacity >
        <View style={styles.list}>
           <View style={styles.image_container}>
            <Image style={{width:'100%',height:'100%',resizeMode:'contain'}} source={require("../../assets/images/FeatureProductImage/f_product-5.png")}/>
           </View>
           <View style={styles.name_price_container}>
            <Text style={styles.item_name}>Rought-Jackson CR White (Brown) this the lasr pafass dfa dvsdv dsvsdjv s dfsd f df sdf sdf sdf  sdfsd f</Text>
            <Text style={styles.item_price}>$18.95</Text>
           </View>
        </View>
        </TouchableOpacity> */}


       </View>
     ``
    </View>
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
      },
      android: {
        marginTop:25,
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
}
})

export default SubList
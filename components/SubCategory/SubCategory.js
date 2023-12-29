import React, { useEffect } from 'react'
import { View,Text,StyleSheet,Image,FlatList,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const SubCategory = ({navigation}) => {
    const [subCategoryData,setSubCategoryData]=useState([]);
    const encodedcategoryid = encodeURIComponent(useSelector((state)=>state.category.categoryid));
    
    // console.error(useSelector((state)=>state.category.categoryid))
    useEffect(()=>{
       
        // const subcategoryapi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cus_sub_category&category_id=2' 
       const subcategoryapi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cus_sub_category&category_id='+encodedcategoryid;
        const fetchData = async () => {
       
           try{
            const response = await axios.get(subcategoryapi);
            if(response){
         setSubCategoryData(response.data.data);
              console.log(response.data.data)
            }
           }catch(error){
               console.log("sub Category product is not get yet")
             
               
           }
          }
          
         
          fetchData();
    },[])

  return (
   <View style={styles.subcategory}>
   <View style={styles.subcategory_container}>
    <View style={styles.subcategory_header_conatiner}>
    <TouchableOpacity style={{paddingRight:10,padding:5}} onPress={()=>navigation.navigate('Home')}>
        <Icon name="arrow-left" size={25} color="#2f2e7e" style={{marginLeft:10}} onPress={()=>navigation.navigate('Home')}/>
        </TouchableOpacity>
   
        <Text  style={styles.subcategory_header}>Sub Category Heading</Text>


        <TouchableOpacity style={{paddingLeft:10,padding:5}}  onPress={()=>navigation.navigate('cart')}>
         
        <Icon name="shopping-cart" size={25} color="#2f2e7e" style={{marginRight:10,position:'relative'}} onPress={()=>navigation.navigate('cart')}/>  
        <View style={styles.cart_icon_text_container}>
        <Text style={styles.cart_text}>12</Text>
        </View>
        </TouchableOpacity>
       
    </View>
    <View style={styles.subcategory_list_container}>

    {
            <FlatList
            data={subCategoryData}
            keyExtractor={i=>i.id}
            numColumns={2}
            renderItem={({item})=>{
             return(
                <TouchableOpacity keyExtractor key={item.id} style={styles.subcategory_list}>
                <View style={styles.subcategory_list}>
                   <View style={styles.subcategory_image_container}>
                   <Image style={{width:"100%",height:"100%",resizeMode:'contain'}}  source={{ uri: item.image }} />
                   </View>
                   <View style={styles.subcategory_name_container}>
                       <Text style={styles.subcategory_name}>{item.name}</Text>
                   </View>
                </View>
                {/* <Text>CategoryId={useSelector((state)=>state.category.categoryid)}</Text> */}
               </TouchableOpacity>
             )
            }}
            />
        }





{/*         
        <TouchableOpacity >
         <View style={styles.subcategory_list}>
            <View style={styles.subcategory_image_container}>
            <Image style={{width:"100%",height:"100%",resizeMode:'contain'}}  source={require('../../assets/images/FeatureProductImage/f_product-3.png')} />
            </View>
            <View style={styles.subcategory_name_container}>
                <Text style={styles.subcategory_name}>Sub Category item name</Text>
            </View>
         </View>
        </TouchableOpacity> */}



    </View>
   </View>
   </View>
  )
}
const styles=StyleSheet.create({
    subcategory:{
        width:"100%",
        height:"100%"
    },
    subcategory_container:{
        // backgroundColor:'red',
        width:'100%',
        height:'100%'
    },
    subcategory_header_conatiner:{
        // backgroundColor:'yellow',
        marginTop:30,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    subcategory_header:{
        fontSize:16,
        fontWeight:'bold',
        color:'#2a2e7e',
        // backgroundColor:'red',
        
    },
    subcategory_list_container:{
   
        justifyContent:'space-around',
        alignItems:'center',
    
        
    },
    subcategory_list:{
        borderWidth:2,
        width:150,
        height:200,
        alignItems:'center',
        borderColor:'#2f2e7e',
        backgroundColor:'yellow'
        
       
        // borderTopEndRadius:20,
        // borderBottomLeftRadius:20
    },
    subcategory_image_container:{
        width:"100%",
        height:120,
        // backgroundColor:"orange",
        padding:10  
    },
    subcategory_name_container:{
        // backgroundColor:'yellow',
        width:'100%',
        height:70,
        alignItems:'center',
        justifyContent:'center'
    },
    subcategory_name:{
        textAlign:'center',
        color:'#2f2e7e',
        fontWeight:'500',
        padding:5
    },
    cart_icon_text_container:{
        position:'absolute',
        backgroundColor:'white',
        width:15,
        height:15,
        borderRadius:50,
        left:9,
        top:2,
        justifyContent:'center',
        alignItems:'center'
    },
    cart_text:{color:'red',
    fontWeight:'bold',
    fontSize:8,
    padding:2
    }
})
export default SubCategory
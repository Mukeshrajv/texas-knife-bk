import React, { useEffect } from 'react'
import { View,Text,StyleSheet,Image,FlatList,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getsubcategoryname } from '../../Slice/categorySlice';
import Nocategory from '../No category/Nocategory';

const SubCategory = ({navigation}) => {
    const dispatch=useDispatch();

    const [subCategoryData,setSubCategoryData]=useState([]);
    const [nocategorydata,setNocategorydata]=useState([]);

    

    const encodedcategoryname = encodeURIComponent(useSelector((state)=>state.category.categoryname));
    const encodedcategoryid = encodeURIComponent(useSelector((state)=>state.category.categoryid));
    
    // console.error(useSelector((state)=>state.category.categoryid))
    useEffect(()=>{
       
        //  const subcategoryapi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cus_sub_category&category_id=2' 
      
        const subcategoryapi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cus_sub_category&category_id='+encodedcategoryid;
        const NOCategoryListApi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cus_category_product&category='+encodedcategoryname;

        const fetchData = async () => {
       
           try{
            const response = await axios.get(subcategoryapi);
            if(response){
         setSubCategoryData(response.data);
            //   console.log(response.data.data)
            }
           }catch(error){
               console.log("sub Category product is not get yet")       
           }
          }
          fetchData();
          
          const fetchDatas = async () => {
            try{
             const response = await axios.get(NOCategoryListApi);
             if(response){
                 setNocategorydata(response.data.data);
                 //   console.error(response.data.data) 
             }
            }catch(error){
                console.log("No Category list is not get yet")   
            }
           }
           fetchDatas();
         
       
    },[])

    const calldata=(item)=>{
        navigation.navigate('subcategorylist');
        dispatch(getsubcategoryname(item.name));

    }

  return (
   <View style={styles.subcategory}>
   <View style={styles.subcategory_container}>
    <View style={styles.subcategory_header_conatiner}>
    <TouchableOpacity style={{paddingRight:10,padding:5}} onPress={()=>navigation.navigate('Home')}>
        <Icon name="arrow-left" size={25} color="#2f2e7e" style={{marginLeft:10}} onPress={()=>navigation.navigate('Home')}/>
        </TouchableOpacity>
   
        <Text  style={styles.subcategory_header}>{useSelector((state)=>state.category.categoryname)}</Text>


        <TouchableOpacity style={{paddingLeft:10,padding:5}}  onPress={()=>navigation.navigate('cart')}>
         
        <Icon name="shopping-cart" size={25} color="#2f2e7e" style={{marginRight:10,position:'relative'}} onPress={()=>navigation.navigate('cart')}/>  
        <View style={styles.cart_icon_text_container}>
        <Text style={styles.cart_text}>12</Text>
        </View>
        </TouchableOpacity>
       
    </View>


    { subCategoryData.status===200 ? (
           <View style={styles.subcategory_list_container}>
 {
            <FlatList
            data={subCategoryData.data}
            keyExtractor={i=>i.id}
            key={'_'}
              numColumns={2}
            renderItem={({item})=>{
             return(
                <TouchableOpacity style={styles.subcategory_list_touchable_opacity}  key={item.id} onPress={()=>calldata(item)}>
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
        </View>
    ):(
        <View style={styles.nocategorycontainer}>
        <FlatList
            data={nocategorydata}
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
        </View>
    )}
    
   


  
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
        width:"100%",
        height:700,
        // backgroundColor:'red',
         alignItems:'center',
        justifyContent:'space-evenly',
     
    },
    subcategory_list_touchable_opacity:{
        borderWidth:2,
        width:150,
        height:200,
        borderColor:'#2f2e7e',
        margin:10,
        // backgroundColor:'yellow'
       
    },
    subcategory_list:{
         alignItems:'center',
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
        // backgroundColor:'white',
        width:15,
        height:15,
        borderRadius:50,
        left:16,
         top:7,
        justifyContent:'center',
        alignItems:'center'
    },
    cart_text:{
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:8,
    padding:2
    },  

    // nocategory area

    nocategorycontainer:{
        backgroundColor:'#ffffff',
        marginTop:5,
        padding:10,
        height:700
    },
    nocategorylist:{
        backgroundColor:'yellow',
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
        borderRadius:5
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
})
export default SubCategory
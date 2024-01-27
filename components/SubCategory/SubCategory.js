import React, { useEffect } from 'react'
import { View,Text,StyleSheet,Image,FlatList,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getsubcategoryname } from '../../Slice/categorySlice';
import Nocategory from '../No category/Nocategory';
import Loader from '../Sub-components/Loader'
import { getButtonShown } from '../../Slice/ProductDetailsSlice'
import { getProductDetails } from '../../Slice/ProductDetailsSlice'
import BottomTab from "../Sub-components/ButtomTab/BottomTab";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SubCategory = ({navigation}) => {
    const dispatch=useDispatch();

    const [subCategoryData,setSubCategoryData]=useState([]);
    const [nocategorydata,setNocategorydata]=useState([]);
    const [loader,setLoader]=useState(false);

    

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
         setLoader(true);
            //   console.log(response.data)
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
                 setLoader(true);
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
   
     <View style={styles.Subcategory}>

        <View style={styles.header}>
          <View style={styles.header_container}>
          {/* <TouchableOpacity style={{paddingRight:10,padding:5}} onPress={()=>navigation.navigate('Home')}>
        <Icon name="arrow-left" size={25} color="#2f2e7e" style={{marginLeft:10}} onPress={()=>navigation.navigate('Home')}/>
        </TouchableOpacity>
        <Text  style={styles.header_text}>{useSelector((state)=>state.category.categoryname)}</Text>
        <View></View> */}
       <Text  style={styles.header_text}>{useSelector((state)=>state.category.categoryname)}</Text>
          </View>
        </View>

        <View style={styles.content}>
          {loader?(
            <View style={{flex:1}}>
                {subCategoryData.status===200 ? (
                <View style={styles. subcategory_list_container} >
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
                   <Image style={{width:"100%",height:"100%",resizeMode:'contain',}}  source={{ uri: item.image }} />
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
                </View>):(
                    <View style={styles.nocategory}>

                      <View style={styles.nocategorycontainer}>
                     
                      <FlatList
                          data={nocategorydata}
                          keyExtractor={i=>i.id}
                          renderItem={({item})=>{
                           return(
                          
                            <TouchableOpacity keyExtractor key={item.id} onPress={()=>handleChange(item)} >
                            <View style={styles.list}>
                               <View style={styles.image_container}>
                                {item.product_image?(
                                    <Image style={{width:'100%',height:'100%',resizeMode:'stretch'}}  source={{ uri: item.product_image }}/>
                                ):(<Loader/>)}
                                
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
                      </View>
                  )}
            </View>
          ):(
             <Loader/>
          )}
        </View>
        <View style={styles.footer}>
          <BottomTab  home={home} cart={cart} profile={profile}/>
        </View>
     </View>

  )
}

const styles = StyleSheet.create({
Subcategory:{
flex:1,
backgroundColor:'#ffffff'
},
header_container:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'red'
},
header:{
// backgroundColor:'yellow',
flex:1,
justifyContent:'center',
alignItems:'center',
},
content:{
// backgroundColor:'pink',
flex:8
},
footer:{
backgroundColor:'white',
flex:0.7,
justifyContent:'flex-end'
},
header_container:{
    flex:1,
    // height:hp('30%'),
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red',
    paddingTop:hp(2)
},
header_text:{
    fontSize:hp(2.1),
    color:'#2a2e7e',
    textTransform:'capitalize'
},
subcategory_list_container:{
    // backgroundColor:'green',
    flex:1,
    alignItems:'center',
    marginTop:hp(2)
},
subcategory_list_touchable_opacity:{
    borderWidth:2,
    width:hp(18),
    height:hp(24),
    borderColor:'#2f2e7e',
    margin:hp(1.5),
    backgroundColor:'#e8fcfc',
    borderRadius:7

},
subcategory_list:{
    
},
subcategory_image_container:{
    width:"100%",
    height:hp(15),
    padding:hp(1.1) ,
    backgroundColor:'#ffffff',
    borderRadius:5
},
subcategory_name_container:{
    // backgroundColor:'yellow',
    width:'100%',
    height:hp(8),
    alignItems:'center',
    justifyContent:'center'
},
subcategory_name:{
    textAlign:'center',
    color:'#2f2e7e',
    fontWeight:'500',
    padding:5
},
nocategory:{
    flex:1,
    // backgroundColor:'yellow',
},
nocategorycontainer:{
    flex:1,
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

export default SubCategory

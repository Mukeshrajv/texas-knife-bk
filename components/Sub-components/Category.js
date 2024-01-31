import { useEffect,useState } from 'react'
import axios from 'axios';
import React from 'react'
import { View ,StyleSheet, TouchableOpacity ,Text, Image,FlatList,Platform} from 'react-native'
import { useDispatch } from 'react-redux';
import { getcategoryid,getcategoryname} from '../../Slice/categorySlice';
import { getProductDetails } from '../../Slice/ProductDetailsSlice';
import Loader from './Loader';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Category = ({navigation}) => {
  
  const dispatch=useDispatch();

     const[categoryList,setCategoryList]=useState([]);
     const [loader,setLoader]=useState(false)

  useEffect(() => {
   

    const CategoryProductAPI='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cus_category';
    const fetchData = async () => {
    
     try{
      const response = await axios.get(CategoryProductAPI);
      if(response){
        setCategoryList(response.data.data)
        setLoader(true)
      }
     }catch(error){
         console.log("Category product is not get yet")
     }
    }
    
   
    fetchData();
   }, []); 
    
    const calldata=(item)=>{
      navigation.navigate('subcategory')
      dispatch(getcategoryid(item.id));
      dispatch(getcategoryname(item.name));
      
    }
  return (
   <>
  
   <View style={styles.category}>
   <Text style={styles.header}>Catagories</Text>
   <View>
    <View style={styles.category_container}>
        
        {
          loader?(
            <FlatList
            data={categoryList}
            keyExtractor={i=>i.id}
            numColumns={2}
            renderItem={({item})=>{
             return(
                <TouchableOpacity keyExtractor key={item.id} style={styles.category_list} onPress={()=>calldata(item)}>
                <View style={styles.image_container}>
                 <Image style={{width:'100%',height:'100%'}} source={{ uri: item.image }}/>
                </View>
                <View style={styles.category_name_conatiner}>
                   <Text style={styles.category_names}>{item.name}</Text>
                </View>
              </TouchableOpacity>

             )
            }}
            />
          ):(
            <Loader/>
          )
            
        }
        {/* <View style={{height:90,backgroundColor:'yellow'}}></View> */}
        
    </View>
    
    </View>
   </View>
   </>
  )
}
const styles=StyleSheet.create({
category:{
  flex:1,
    // backgroundColor:'red'
},
header:{
    paddingLeft:15,
    paddingTop:5,
    paddingBottom:5,
    color:'#2a2e7e',
    fontSize:wp(5),  
    fontWeight:'bold',
   
    
},
category_container:{
    // backgroundColor:'yellow',
    // flexDirection:'row',
    // height:375
    // flexWrap:'wrap',
   
    ...Platform.select({
        ios: {
          // height:300,
          // Styles for iOS
        },
        android: {
            // height:'72 %',
            // paddingBottom:-50
          // Styles for Android
        },
      }),
      // backgroundColor:'green',
      alignItems:'center',
      justifyContent:'center',
      // paddingBottom:20,
marginBottom:25,
     
     

},
category_list:{
    backgroundColor:"#F2F2F7",
    width:wp('40%'),
    padding:5,
    flexDirection:'row',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    margin:10 
},
image_container:{
    width:wp(18),
    height:wp(18),
    margin:2
},
categori_name_conatiner:{
    // width:75
},
category_names:{
    textAlign:'center',
    width:wp('20%'),
    // height:53,
    overflow:'hidden'
}
})
export default Category
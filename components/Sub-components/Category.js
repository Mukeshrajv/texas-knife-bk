import { useEffect,useState } from 'react'
import axios from 'axios';
import React from 'react'
import { View ,StyleSheet, TouchableOpacity ,Text, Image,FlatList,Platform} from 'react-native'
import { useDispatch } from 'react-redux';
import { getcategoryid,getcategoryname} from '../../Slice/categorySlice';
import { getProductDetails } from '../../Slice/ProductDetailsSlice';
import Loader from './Loader';

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
    </View>
   </View>
   </>
  )
}
const styles=StyleSheet.create({
category:{
    // backgroundColor:'red'
},
header:{
    paddingLeft:15,
    color:'#2a2e7e',
    fontSize:17,
    paddingLeft:15,  
    fontWeight:'bold',
    paddingBottom:10
},
category_container:{
    // backgroundColor:'yellow',
    // flexDirection:'row',
    // height:375
    // flexWrap:'wrap',
   
    ...Platform.select({
        ios: {
          height:300,
          // Styles for iOS
        },
        android: {
            height:370,
          // Styles for Android
        },
      }),

},
category_list:{
    margin:15,
    backgroundColor:"#F2F2F7",
    width:150,
    padding:5,
    flexDirection:'row',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    
},
image_container:{
    width:60,
    height:60,
    margin:2
},
categori_name_conatiner:{
    width:75
},
category_names:{
    textAlign:'center',
    width:75,
    height:53,
    overflow:'hidden'
}
})
export default Category
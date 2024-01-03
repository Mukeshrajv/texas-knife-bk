import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { View,Text,StyleSheet,Image,FlatList,TouchableOpacity,} from 'react-native';
import { useDispatch } from 'react-redux';
import { getProductDetails,getProductImage} from '../../Slice/ProductDetailsSlice';
const FeatureProduct = ({navigation}) => {
   const dispatch=useDispatch();
  const[featureProduct,setFeatureProduct]=useState([])

  useEffect(() => {
    const FeatureProductAPI='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cus_featured_product';
    const fetchData = async () => {
    
     try{
      const response = await axios.get(FeatureProductAPI);
      if(response){
        const { data} = response;
         setFeatureProduct(data.data);
      }
     }catch(error){
         console.log("Feature product is not get")
     }
    }
    
   
    fetchData();
   }, []); 
  const handleChange=(item)=>{
    navigation.navigate('pop')
     dispatch(getProductDetails(item.sku));
     dispatch(getProductImage(item.product_image));
    // console.log(item.sku)

  }
  return (
   <>
    <View style={styles.featureproduct_container}>
   <Text style={styles.featureproduct_header}>Feature Products</Text>
   <FlatList
   data={featureProduct}
   horizontal
   keyExtractor={i=>i.id}
   renderItem={({item})=>{
    return(
       
   <View keyExtractor style={styles.featureproduct_list_container}>
     <TouchableOpacity onPress={()=>handleChange(item)}>
   <View style={styles.featureproduct_list}>
    <Text style={styles.featureproduct_name}>{item.product_name}</Text>
    <Text style={styles.price}>$ {item.product_price}</Text>
    <View style={styles.image_container}>
    <Image style={{width:"100%",height:"100%",resizeMode:'contain'}}  source={{ uri: item.product_image }}/>
    </View>
   </View>
   </TouchableOpacity>
   </View>
    )
   }}
   />
     </View>
   </>
  )
}
const styles=StyleSheet.create({
    featureproduct_container:{
    //  backgroundColor:'red',
     marginTop:5
    },
    featureproduct_header:{
        // backgroundColor:'green',
        marginTop:5,
        color:'#2a2e7e',
        fontSize:17,
        paddingLeft:15,  
        fontWeight:'bold'
    },
    featureproduct_list_container:{
//    backgroundColor:"yellow",
   padding:15,
  
    },
    featureproduct_list:{
     borderWidth:1,
     width:150,
     height:200,
     padding:5,
     borderColor:'#F2F2F7',
     borderCurve:'circular',
     borderRadius:10,
     justifyContent:'center',
     alignItems:'center'
    },
    featureproduct_name:{
     fontSize:14,
     fontWeight:'bold',
     padding:2,
     height:60,
     overflow:'hidden' ,
     paddingTop:5,
     textAlign:'center'
    },
    featureproduct_code:{

    },
    price:{
     fontSize:14,
     fontWeight:"bold",
     marginTop:5,
     textAlign:'left',
     color:'red'
    },
    image_container:{
     width:100,
     height:100,
     marginTop:10,
     marginBottom:10,
    //  backgroundColor:'red'
    }
})

export default FeatureProduct
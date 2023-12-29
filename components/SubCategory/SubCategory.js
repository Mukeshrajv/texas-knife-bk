import React from 'react'
import { View,Text,StyleSheet,Image,FlatList,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SubCategory = () => {
  return (
   <View style={styles.subcategory}>
   <View style={styles.subcategory_container}>
    <View style={styles.subcategory_header_conatiner}>
    <Icon name="arrow-left" size={30} color="#2f2e7e" style={{marginLeft:10}}/>
        <Text  style={styles.subcategory_header}>Sub Category Heading</Text>
    </View>
    <View style={styles.subcategory_list_container}>

        
        
        <TouchableOpacity >
         <View style={styles.subcategory_list}>
            <View style={styles.subcategory_image_container}>
            <Image style={{width:"100%",height:"100%",resizeMode:'contain'}}  source={require('../../assets/images/FeatureProductImage/f_product-3.png')} />
            </View>
            <View style={styles.subcategory_name_container}>
                <Text style={styles.subcategory_name}>Sub Category item name</Text>
            </View>
         </View>
        </TouchableOpacity>



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
        width:'100%',
        paddingLeft:55
    },
    subcategory_list_container:{
        marginTop:10,
        // backgroundColor:'pink',
        margin:10,
        justifyContent:'space-around',
        flexDirection:'row'
        
    },
    subcategory_list:{
        borderWidth:2,
        width:150,
        height:200,
        alignItems:'center',
        borderColor:'#2f2e7e',
        borderTopEndRadius:20,
        borderBottomLeftRadius:20
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
        fontWeight:'500'
    }
})
export default SubCategory
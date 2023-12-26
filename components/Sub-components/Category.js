import React from 'react'
import { View ,StyleSheet, TouchableOpacity ,Text, Image,FlatList} from 'react-native'

const Category = () => {
    const categoriesList=[
        {id:1,image:"",categoryName:"**GRAB BAG DEALS"},
        {id:2,image:"",categoryName:"Abrasive/Belts/Buffing"},
        {id:3,image:"",categoryName:"Adhesives/Epoxies/Glues"},
        {id:4,image:"",categoryName:"Blades Blanks and Blade Kits"},
        {id:5,image:"",categoryName:"Books DVD and Videos"},  
        {id:6,image:"",categoryName:"Gift Certificates"},  
        {id:7,image:"",categoryName:"Handle/SpacerMaterial"},
          ]
  return (
   <>
   <View style={styles.category}>
   <Text style={styles.header}>Catagories</Text>
    <View style={styles.category_container}>
        {
            <FlatList
            data={categoriesList}
            keyExtractor={i=>i.id}
            numColumns={2}
            renderItem={({item})=>{
             return(
                <TouchableOpacity keyExtractor key={item.id} style={styles.category_list}>
                <View style={styles.image_container}>
                 <Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/FeatureProductImage/f_product-3.png')}/>
                </View>
                <View style={styles.category_name_conatiner}>
                   <Text style={styles.category_names}>{item.categoryName}</Text>
                </View>
              </TouchableOpacity>

             )
            }}
            />
        }


   {/* <TouchableOpacity style={styles.category_list}>
     <View style={styles.image_container}>
      <Image style={{width:'100%',height:'100%'}} source={require('../../assets/images/FeatureProductImage/f_product-3.png')}/>
     </View>
     <View style={styles.category_name_conatiner}>
        <Text style={styles.category_names}>Abrasive/Belts/buffing/meaching</Text>
     </View>
   </TouchableOpacity> */}


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
    flexDirection:'row',
    height:290,
    // flexWrap:'wrap',

},
category_list:{
    margin:15,
    backgroundColor:"#F2F2F7",
    width:150,
    padding:5,
    flexDirection:'row',
    borderRadius:10,
    
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
    textAlign:'justify',
    width:75,
    height:53,
    overflow:'hidden'
}
})
export default Category
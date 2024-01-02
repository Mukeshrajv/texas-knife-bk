import React, { useEffect } from 'react'
import { View,StyleSheet,Text } from 'react-native'
import axios from 'axios'
import { useState} from 'react'
import { useSelector,FlatList ,TouchableOpacity,Image} from 'react-redux'

const Nocategory = ({navigation}) => {
    const encodedcategoryname = encodeURIComponent(useSelector((state)=>state.category.categoryname));
      const [nocategorydata,setNocategorydata]=useState([]);
    useEffect(()=>{
        const NOCategoryListApi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cus_category_product&category='+encodedcategoryname;
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


  return (
    <View style={styles.nocategory}>
        <TouchableOpacity  onPress={()=>navigation.navigate('pop')} >
              <View style={styles.list}>
                 <View style={styles.image_container}>
                  <Image style={{width:'100%',height:'100%',resizeMode:'stretch'}}/>
                 </View>
                 <View style={styles.name_price_container}>
                  <Text style={styles.item_name}>pname</Text>
                  <Text style={styles.item_price}>1234</Text>
                 </View>
              </View>
              </TouchableOpacity> 


     {/* {
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
        } */}

    </View>
  )
}
const styles=StyleSheet.create({

})
export default Nocategory
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Linking } from 'react-native';
import BottomTab from "../Sub-components/ButtomTab/BottomTab";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Loader from '../Sub-components/Loader';




const MyOrder = ({navigation}) => {
  const [items, setItems] = useState([]); 
  const[loader,setLoader]=useState(false);

  
  const encodedCustomerId = encodeURIComponent(useSelector((state) => state.login.logindata.id))
  useEffect(() => {
    console.log(encodedCustomerId)
    const apiUrl = 'https://www.texasknife.com/dynamic/texasknifeapi.php?action=get_orders&customer_id=88985';
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response) {
          setLoader(true);
          setItems(response.data.data)
          //  console.log('API Response:', response.data.data);
        }
      } catch (error) {
        setLoader(true);
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
   
   
  }, [])

  const  InVoice =(item)=>{
  console.log('inVoice');
  const encodedOrderId=encodeURIComponent(item.order_id)
  const fetchDatas = async () => {
    try {
      const inVoice = 'https://www.texasknife.com/dynamic/orderinvoice/order_invoice_'+encodedOrderId+'.html';
      await Linking.openURL(inVoice);
    } catch (error) {
      console.error('Error opening invoice API in browser:', error);
    }
   }
   fetchDatas();
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
    <View style={styles.myorder}>

        <View style={styles.header}>
          <View style={styles.header_container}>
        <Text  style={styles.header_text}>Orders</Text>
          </View>
        </View>

        <View style={styles.content}>
    {loader?(
 <View style={styles.flatlist_container}>
 <FlatList
   data={items}
   showsVerticalScrollIndicator={false}
   renderItem={({ item }) => (
     <View style={styles.item}>
       <View style={styles.order_detail}>
         <Text style={styles.order_label}>Order Id</Text>
         <Text style={{fontSize:wp(6)}}>:</Text>
         <Text style={styles.order}>{item.order_id}</Text>
       </View>
       <View style={styles.order_detail}>
         <Text style={styles.order_label}>Order Date</Text>
         <Text style={{fontSize:wp(6)}}>:</Text>
         <Text style={styles.order}>{item.created_at}</Text>
       </View>
       <View style={styles.order_detail}>
         <Text style={styles.order_label}>Net Amount</Text>
         <Text style={{fontSize:wp(6)}}>:</Text>
         <Text style={styles.order}>{item.net_amount}</Text>
       </View>
       <View style={styles.invoice_container}>
         <TouchableOpacity style={styles.invoice} onPress={()=>InVoice(item)}>
           <Text style={styles.invoice_text}>Invoice</Text>
         </TouchableOpacity>
       </View>
     </View>
   )}
   keyExtractor={item => item.id}
 />
</View>
    ):(<Loader/>)}
     
    
          
        </View>
        <View style={styles.footer}>
        <BottomTab home={home} cart={cart} profile={profile} />
        </View>
     </View>
  );
};

const styles = StyleSheet.create({
  myorder:{
    flex:1,
    backgroundColor:'#ffffff'
    },
    header:{
    // backgroundColor:'yellow',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    },
    content:{
    // backgroundColor:'pink',
    flex:8,
    
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
        color:'#2a2e7e'
    },
    flatlist_container:{
      alignItems:'center'
    },
    item:{
     backgroundColor:'#e8fcfc',
     margin:hp(1),
     padding:hp(1),
     width:wp('85%'),
     borderTopLeftRadius:50,
     borderBottomRightRadius:50
    },
    order_detail:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center'
    },
    order_label:{
      fontSize:wp(5),
      fontWeight: 'bold',
      width: '50%',
      textAlign: 'center'
    },
    order:{
      fontSize:wp(5),
      fontWeight: 'bold',
      width: '50%',
      color: '#2a2e7e',
      // margin: 2,
      textAlign: 'center'
    },
    invoice_container: {
      display: 'flex',
     justifyContent:'center',
     alignItems:'center'
    },
    invoice: {
      backgroundColor: '#1975d3',
      marginTop: hp(1),
      padding:hp(1),
      borderRadius:30,
      // borderTopRightRadius: 15,
      // borderBottomLeftRadius: 15,
      width:wp(50),
      alignItems: 'center',
    
    },
    invoice_text: {
      fontSize:wp(4.5),
      fontWeight: 'bold',
      color: '#ffffff'
    },
});

export default MyOrder;

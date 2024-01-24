import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Linking } from 'react-native';

// const DATA = [
//   { id: 1, OrderId: 151515, OrderDate: '01/10/2024', NetAmount: 71.6 },
//   { id: 2, OrderId: 151515, OrderDate: '01/10/2024', NetAmount: 71.6 },
//   { id: 3, OrderId: 151515, OrderDate: '01/10/2024', NetAmount: 71.6 },
//   { id: 4, OrderId: 151515, OrderDate: '01/10/2024', NetAmount: 71.6 },
//   { id: 5, OrderId: 151515, OrderDate: '01/10/2024', NetAmount: 71.6 },
//   { id: 6, OrderId: 151515, OrderDate: '01/10/2024', NetAmount: 71.6 },
//   { id: 7, OrderId: 151515, OrderDate: '01/10/2024', NetAmount: 71.6 },
//   { id: 8, OrderId: 151515, OrderDate: '01/10/2024', NetAmount: 71.6 },
//   { id: 9, OrderId: 151515, OrderDate: '01/10/2024', NetAmount: 71.6 },
// ];


const MyOrder = ({ navigation }) => {
  const [items, setItems] = useState([]); 
  
  const encodedCustomerId = encodeURIComponent(useSelector((state) => state.login.logindata.id))
  useEffect(() => {
    console.log(encodedCustomerId)
    const apiUrl = 'https://www.texasknife.com/dynamic/texasknifeapi.php?action=get_orders&customer_id=88985';
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response) {

          setItems(response.data.data)
          //  console.log('API Response:', response.data.data);
        }
      } catch (error) {
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
  return (
    <View style={styles.container}>
      <View style={styles.cart_container}>
        <View style={styles.header_container}>
          <Text style={styles.header_title}>Orders</Text>
        </View>
      </View>
      <View style={styles.flatlist_container}>
        <FlatList
          data={items}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.order_detail}>
                <Text style={styles.order_label}>Order Id</Text>
                <Text >:</Text>
                <Text style={styles.order}>{item.order_id}</Text>
              </View>
              <View style={styles.order_detail}>
                <Text style={styles.order_label}>Order Date</Text>
                <Text >:</Text>
                <Text style={styles.order}>{item.created_at}</Text>
              </View>
              <View style={styles.order_detail}>
                <Text style={styles.order_label}>Net Amount</Text>
                <Text >:</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header_container: {
    justifyContent: "center",
    marginTop: 40,
    padding: 10,
  },
  header_title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2a2e7e'
  },
  flatlist_container: {
    margin: 10,
    height: '85%',
  },
  item: {
    backgroundColor: '#f2f2f7',
    margin: 10,
    padding: 5,
    borderColor: 'black',
    borderRadius: 10,
    width: '95%',
    shadowColor: '#000',
    elevation: 5,
    ...Platform.select({
      android: {
        shadowColor: '#000',
        elevation: 5,
      },
      ios: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      }
    })
  },
  order_label: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '50%',
    textAlign: 'center'
  },
  order_detail: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  order: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '50%',
    color: '#2a2e7e',
    margin: 2,
    textAlign: 'center'

  },
  invoice_container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  invoice: {
    backgroundColor: '#1975d3',
    margin: 10,
    padding: 5,
    borderRadius:30,
    // borderTopRightRadius: 15,
    // borderBottomLeftRadius: 15,
    width: '25%',
    alignItems: 'center',
    marginRight: 40,
  },
  invoice_text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5,
    color: '#ffffff'
  },
});

export default MyOrder;

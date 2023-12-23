import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet,Image, } from 'react-native';

const Cart =({navigation})=> {


    return (
       <View  style={styles.cartLineTotal}>
        <View style={styles.lineLeft}>
           <Text style={styles.pricetotal}> Total $</Text>
          </View>
          <View style={styles.lineRight}>
              <Text style={styles.price}> Total $</Text>
              <View >
              <Button 
              title="Proceed to Checkout"
                />
                </View>
            </View>
       </View >
    );
  

  function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
        <Image style={styles.image}  source={require('../../assets/images/TEXASnewlogo.png')} />
          <Text style={styles.line}>product name x 2</Text>
          <Text style={styles.line}>$ {item.totalPrice}</Text>
       </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}
const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
    width:'50%',
    alignSelf: 'flex-start',
    borderTopWidth: 1,
    backgroundColor: 'white',
    padding:10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  cartLineTotal: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
   
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width:'50%',
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' ,
    backgroundColor: 'white',
    padding:10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  line:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'50%',
    fontSize: 20, 
    lineHeight: 40, 
  },
  lineRight: {
    width:'30%',
    fontSize: 20, 
    lineHeight: 50, 
    color:'#333333',
    marginRight:'10%',
    backgroundColor: 'white',
    padding:10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  total: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  pricetotal:{
    fontSize: 20, 
    fontWeight: 'bold',
  },
  itemsList: {   
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  image:{
    width:'25%',
    height:100,
    resizeMode:'contain',
  },
  proceed:{
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width:'50%',
    borderTopWidth: 1,
    backgroundColor: 'white',
    padding:10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  price:{
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold', 
  }
 
});
export default Cart;
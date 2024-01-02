import React, { useEffect, useState, useContext } from 'react';
import { Text, Image, View, Button, StyleSheet, TouchableOpacity,Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const PopCard = ({ Navigation }) => {
const [show,setShow]=useState(false);
const [isRotated, setIsRotated] = useState(false);
const rotation = new Animated.Value(0);

const handlePress = () => {
  setIsRotated(!isRotated);
  Animated.timing(rotation, {
    toValue: isRotated ? 45 : 0, // Toggle between 0 and 45 degrees
    duration: 200,
  }).start();
};
    return (
        <View style={styles.ProductDetail}>
            <View style={styles.ProductDetail_container}>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/TEXASnewlogo.png')}
                    />
                </View>
                <View style={styles.Container}>
                    <Text style={styles.name}>name</Text>
                    <Text style={styles.label}>price:</Text>
                    <Text style={styles.price}>$ price</Text>
                    <Text style={styles.label}>description:</Text>
                    <Text style={styles.description}>description</Text>
                    <View style={styles.accordion}>
                    <Text style={styles.label}>Product Details</Text>
                    <TouchableOpacity onPress={handlePress}>
                    <Animated.View style={{ transform: [{ rotateZ:rotation }] }}>
                    <AntDesign  onPress={()=>setShow(!show)} name="downcircle" size={24} color="black" />
                    </Animated.View>
                     </TouchableOpacity>
                    </View>
                    {show&&
                    <View>
                      <Text>weight</Text>
                    </View>
                    }
                    
                    <Text style={styles.label}>Quantity</Text>
                    <View style={styles.quantity}>
                        <Feather name="minus-circle" size={30} color="black" />
                        <Text style={styles.description}>1</Text>
                        <Feather name="plus-circle" size={30} color="black" />
                    </View>
                    <View style={styles.btn}>
                    <Text onPress={console.log('pressed')}>Add To Cart</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    ProductDetail: {
        flexDirection: 'column',
        padding: 20,
        marginTop: 50,
        // width: 350,
    },
    image: {
        height: 300,
        width: '100%',
        resizeMode: 'contain',
        // backgroundColor: 'blue',
        marginBottom:10,
    },
    Container: {
        padding: 26,
        backgroundColor: 'lightblue',
        borderRadius: 10
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
    },
    quantity: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:5,
    },
    label: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
    btn:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      padding:13,
      width:300,
      backgroundColor:'#1975d3',
      borderRadius:50,
      color: 'white',
    },
    accordion:{
      width:300,
      flexDirection:'row',
      justifyContent:'space-between',
     
    
    }
});
export default PopCard
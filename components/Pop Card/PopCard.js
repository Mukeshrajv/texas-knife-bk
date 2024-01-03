import React, { useEffect, useState, useContext } from 'react';
import { Text, Image, View, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


const PopCard = ({ Navigation }) => {
    const [show, setShow] = useState(false);
    // const [rotateValue, setRotateValue] = useState(new Animated.Value(0)); // Initial rotation angle

    // const handleIconClick = () => {
    //     Animated.timing(rotateValue, {
    //       toValue: rotateValue._value + 180, // Rotate 360 degrees
    //       duration: 500, // Animation duration in milliseconds
    //       useNativeDriver: true, // Use native driver for smoother animation
    //     }).start();
    //   };
    return (
        <View style={styles.ProductDetail}>
            <View style={styles.ProductDetail_container}>
                <View style={styles.sublist_header_conatiner}>
                    <TouchableOpacity style={{ paddingRight: 5, padding: 5 }} onPress={console.log('pressed')}>
                        <Icon name="arrow-left" size={25} color="#2f2e7e" style={{ marginLeft: 5 }} onPress={console.log('pressed')} />
                    </TouchableOpacity>

                    <Text style={styles.sublist_header}>Product Details</Text>

                    <TouchableOpacity style={{ paddingLeft: 5, padding: 5 }} onPress={() => navigation.navigate('cart')}>

                        <Icon name="shopping-cart" size={25} color="#2f2e7e" style={{ marginRight: 10, position: 'relative' }} onPress={() => navigation.navigate('cart')} />
                        <View style={styles.cart_icon_text_container}>
                            <Text style={styles.cart_text}>12</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/TEXASnewlogo.png')}
                    />
                </View>
                <View style={styles.Container}>
            
                    <Text style={styles.name}>Glow-in-the-Dark Beads -Package of 50</Text>
                    <View style={styles.code}>
                        <Text style={{color:'white'}}>BEAD5</Text>
                    </View>
                    <Text style={styles.label}>Price:</Text>
                    <Text style={styles.price}>$ 12.95</Text>
                    <Text style={styles.label}>Description:</Text>
                    <Text style={styles.description}>The soft black sanding sponge is 4-1/2"*5-1/2".The ultrafine pad is for fine sanding.Use dry or wet.Flexible,comfortable and long-lasting.Great for sanding hard to reach areas.</Text>
                    <View style={styles.accordion}>
                        <Text style={styles.label}>Product Details</Text>
                        <TouchableOpacity onPress={() => setShow(!show)} >
                            <View style={styles.icon}
                            >
                                <AntDesign name="downcircle" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {show &&
                        <View style={styles.weight}>
                            <View  style={{backgroundColor:'gray',padding:10,width:'30%'}}>
                            <Text >weight:</Text>
                            </View>
                            <View style={{backgroundColor:'white',padding:10,width:'70%'}}>
                            <Text>0.25</Text>
                            </View>
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
        width: '100%',
        height: '100%',
        padding: 10,
        marginTop: 15,
        // width: 350,
    },
    ProductDetail_container: {
        // marginTop:15,
        padding: 10,
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'contain',
        // backgroundColor: 'blue',
        marginBottom: 10,
    },
    Container: {
        padding: 16,
        backgroundColor: '#ffdbdb',
        borderRadius: 25,
    },
    sublist_header_conatiner: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sublist_header: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2f2e7e'
    },
    code: {
        backgroundColor: 'black',
        width: '25%',
        borderRadius:10,
        alignItems:'center',
        marginBottom:10,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2f2e7e',
        marginBottom:10,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
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
        padding: 5,
    },
    label: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom:5,
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 13,
        width: '100%',
        backgroundColor: '#1975d3',
        borderRadius: 50,
        color: 'white',
    },
    accordion: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    rotated: {
        transform: [{ rotate: '180deg' }],
        transition: 'transform 0.2s ease-in-out', // Add a smooth transition
    },
    weight:{
        width:'100%',
        flexDirection:'row',
    },
    cart_icon_text_container: {
        position: 'absolute',
        width: 15,
        height: 15,
        borderRadius: 50,
        left: 16,
        top: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cart_text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 8,
        padding: 2
    }
    //   icon:{
    //     transform: [{ rotate: rotateValue.interpolate({
    //         inputRange: [0, 180],
    //         outputRange: ['0deg', '180deg'],
    //       }) }]
    //   }
});
export default PopCard
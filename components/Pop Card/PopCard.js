import React, { useEffect, useState, useContext } from 'react';
import { Text, Image, View, Button, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const PopCard = ({ Navigation }) => {
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
                    <Text style={styles.label}>Product Details</Text>
                    <Text style={styles.label}>Quantity</Text>
                    <View style={styles.quantity}>
                        <Feather name="minus-circle" size={30} color="black" />
                        <Text style={styles.description}>1</Text>
                        <Feather name="plus-circle" size={30} color="black" />
                    </View>
                    <Button title="Add to cart" />
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
        padding: 16,
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
    }
});
export default PopCard
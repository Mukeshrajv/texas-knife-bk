import React, { useEffect, useState, useContext } from 'react';


import { Text, Image, View, Button, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import axios from 'axios';
import HTMLView from 'react-native-htmlview';



const PopCard = ({ navigation }) => {
    const [show, setShow] = useState(false);


    const [reload, setReload] = useState(false);
    const [productData, setProductData] = useState([]);
    const [productImage, setProductImage] = useState([]);
    const [imageurl, setImageurl] = useState('');

    const encodedProductCode = encodeURIComponent(useSelector((state) => state.product.pdata));


    //   https://www.texasknife.com/dynamic/texasknifeapi.php?action=product&sku=AWD180

    useEffect(() => {
        const productapi = 'https://www.texasknife.com/dynamic/texasknifeapi.php?action=product&sku=' + encodedProductCode;

        const fetchData = async () => {
            // console.log(productapi)
            try {
                const response = await axios.get(productapi);
                if (response) {
                    setProductData(response.data.data[0]);
                    // console.log("dai: "+response.data.data[0].product_image);
                    setImageurl(response.data.data[0].product_image)
                    // setProductImage(productData.product_image)

                    const encodedProductImage = encodeURIComponent(imageurl);
                    const productimageapi = 'https://www.texasknife.com/dynamic/texasknifeapi.php?action=image&image=' + encodedProductImage;
                    // console.log("url : "+productimageapi)
                    const fetchimage = async () => {
                        try {
                            const response = await axios.get(productimageapi);
                            if (response) {

                                setProductImage(response.data.data[0])
                            }
                        } catch (error) {
                            console.log("product image not get yet")
                        }
                    }
                    fetchimage()


                }
            } catch (error) {
                console.log(" product data is not get yet")
            }
        }
        fetchData();
        //    console.log("hello")


        //    const encodedProductImage = encodeURIComponent(imageurl);
        //    const productimageapi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=image&image='+encodedProductImage;
        //    console.log("url : "+productimageapi)
        //    const fetchimage=async()=>{
        //        try{
        //        const response=await axios.get(productimageapi);
        //        if(response){

        //            setProductImage(response.data.data[0])
        //        }
        //        }catch(error){
        //            console.log("product image not get yet")
        //        }
        //    }
        //    fetchimage()



        //   console.log("product image : "+productImage.msg)

        setTimeout(() => setReload(true), 1000)
    }, [reload])
    //  console.log(productData.product_price)


    return (
        <View style={styles.ProductDetail}>
            <View style={styles.ProductDetail_container}>
                <View style={styles.header_container}>
                    {/* onPress={()=>navigation.navigate(()=>useSelector((state)=>state.product.cartrout))} */}
                    <TouchableOpacity style={{ paddingRight: 5, padding: 5 }}  >
                        <Icon name="arrow-left" size={25} color="#2f2e7e" style={{ marginLeft: 5 }} />

                    </TouchableOpacity>

                    <Text style={styles.header_title}>Product Details</Text>

                    <TouchableOpacity style={{ paddingLeft: 5, padding: 5 }} onPress={() => navigation.navigate('cart')}>

                        <Icon name="shopping-cart" size={25} color="#2f2e7e" style={{ marginRight: 10, position: 'relative' }} onPress={() => navigation.navigate('cart')} />
                        <View style={styles.header_cart_icon}>
                            <Text style={styles.cart_text}>12</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.product_detail_container}>
                <View style={styles.image_container}>

                    <Image
                        style={styles.image}
                        source={{ uri: productImage.msg }}
                    />
                </View>
                <View style={styles.Product_container}>
                    <View>
                        <Text style={styles.name}>{productData.product_name}</Text>
                    </View>
                    <View style={styles.code}>
                        <Text style={{ color: 'white' }}>{productData.sku}</Text>
                    </View>
                    <View style={styles.price_container}>
                        <Text style={styles.label}>Price:</Text>
                        <Text style={styles.price}>$ {productData.product_price}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.label} >Description:</Text>
                        <ScrollView style={{ height: 80 }}>

                            <HTMLView value={productData.description} stylesheet={customStyles} />
                        </ScrollView>
                    </View>
                    {/* <Text style={styles.description}>{productData.description}</Text> */}
                    <View style={styles.accordion}>
                        <Text style={styles.label}>Product Details</Text>
                        <TouchableOpacity onPress={() => setShow(!show)} >
                            <View style={styles.icon}>
                                {
                                    show ? (<View><AntDesign name="upcircle" size={24} color="black" /></View>) : (<View><AntDesign name="downcircle" size={24} color="black" /></View>)
                                }

                            </View>
                        </TouchableOpacity>
                    </View>
                    {show &&
                        <View style={styles.weight}>
                            <View style={{ backgroundColor: 'gray', padding: 10, width: '30%' }}>
                                <Text >weight:</Text>
                            </View>
                            <View style={{ backgroundColor: 'white', padding: 10, width: '70%' }}>

                                <Text>{productData.weight}</Text>

                            </View>
                        </View>
                    }

                    <Text style={styles.label}>Quantity</Text>
                    <View style={styles.quantity}>
                        <Feather name="minus-circle" size={30} color="black" />
                        <Text>1</Text>
                        <Feather name="plus-circle" size={30} color="black" />
                    </View>
                    <View style={styles.btn}>

                        <Text >Add To Cart</Text>

                    </View>
                </View>
                </View>
            </View>
        </View>
    );
}
const customStyles = StyleSheet.create({
    p: {
        fontSize: 14,
        color: 'grey',
        marginBottom: -60
    },
    // Add more styles for other HTML elements as needed
});

const styles = StyleSheet.create({
    ProductDetail: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 10,
        marginTop: 15,
        // width: 350,

        backgroundColor: '#ffffff'
    },
    ProductDetail_container: {
        // padding: 10,
    //    backgroundColor:'gray'
    },
    product_detail_container:{
        width: '100%',
        height: 700,
        justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'yellow'
    },
    image_container: {
        alignItems: 'center',
        width: '100%',
        height: 150,
        marginBottom: 10,
    },
    ProductDetail_container: {
        // marginTop:15,
        padding: 10,
    },
    image: {

        height: "100%",
        width: '90%',
        resizeMode: 'contain',
        // backgroundColor: 'blue',
        marginBottom: 10,
        resizeMode: 'stretch',
        borderRadius: 20

    },
    price_container: {
        marginBottom: 5,
    },
    Product_container: {
        padding: 16,
        backgroundColor: '#ffdbdb',
        borderRadius: 25,
    },
    header_container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header_title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2f2e7e'
    },
    code: {
        backgroundColor: 'black',
        width: '25%',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2f2e7e',
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        // marginBottom: 10,
    },
    description_container: {
        marginBottom: 10,

    },
    description_container:{
        // backgroundColor:'yellow',
    //    marginBottom:-20


    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
        //    width:200,
        //    height:60,
        //    backgroundColor:'white'
    },
    quantity: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        marginBottom: 10,
    },
    label: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
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
    weight: {
        width: '100%',
        flexDirection: 'row',
    },
    header_cart_icon: {
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

   

});
export default PopCard
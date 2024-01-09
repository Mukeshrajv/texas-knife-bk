import React, { useEffect, useState } from 'react';


import { Text, Image, View,StyleSheet, TouchableOpacity,ScrollView,ToastAndroid ,Alert} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import axios from 'axios';
import HTMLView from 'react-native-htmlview'; 
import { getCartReload } from '../../Slice/ProductDetailsSlice';
import { useDispatch } from 'react-redux';
import Loader from '../Sub-components/Loader';
import { getButtonShown } from '../../Slice/ProductDetailsSlice';



const PopCard = ({ navigation }) => {

    const dispatch=useDispatch();
    const [show, setShow] = useState(false);

    const [productData, setProductData] = useState([]);
    const [productImage, setProductImage] = useState([]);
    const [quantity,setQuantity]=useState(1);
    const [loader,setLoader]=useState(false);
    const encodedProductCode = encodeURIComponent(useSelector((state) => state.product.pdata));

    const store_id=encodeURIComponent(1);
    const user_id=encodeURIComponent(useSelector((state)=>state.login.logindata.id));
    const user_email=encodeURIComponent(useSelector((state)=>state.login.logindata.email));
    const product_id=encodeURIComponent(productData.id);
    const product_quantity=encodeURIComponent(quantity);
    const product_price=encodeURIComponent(productData.product_price);
    const product_code=encodeURIComponent(productData.sku);
    const session_id=encodeURIComponent(123456);
    
    const buttonShow=useSelector((state)=>state.product.buttonshown);

//    quantity increment function
    const quantityAdd=()=>{
        setQuantity(quantity+1)
    }
//  quantity decrement function 
    const quantitySub=()=>{
        if(quantity <= 1){
            setQuantity(1)
        }else{
            setQuantity(quantity-1)
        }   
    }
 
    
//api call for add to cart
    const sendData=async()=>{
        const AddToCartApi='https://www.texasknife.com/dynamic/texasknifeapi.php?action=cart&store_id='+store_id+'&user_id='+user_id+'&product_id='+product_id+'&product_det_qty='+product_quantity+'&get_cur_price='+product_price+'&sku='+product_code+'&user_email='+user_email+'&session_ids='+session_id+'&based_on=Add';
            //  console.log(AddToCartApi);   
        try{
        const response=await axios.get(AddToCartApi)
        
        // console.log("cart added response : "+response)
        if(response){
            navigation.navigate("Home")
            if (Platform.OS === 'android') {
                ToastAndroid.show('Item Added Sucessfully', ToastAndroid.SHORT);
              } 
              else if (Platform.OS === 'ios') {
               Alert.alert('Item Added successfully')
              }  
              dispatch(getCartReload(!useSelector((state)=>state.product.cartload)))
                
         }
       }
       catch(error){
       
        console.log("Item Not added to cart")
       }
    }
//this function used for to call api function
    const AddToCart=()=>{
        sendData()
        dispatch(getCartReload(false))
        // console.log("item added sucess")
    }

    //This function used for back to cart 
    const BackToCart=()=>{
        navigation.navigate("cart");
        dispatch(getButtonShown(true));

    }

//useeffect used for to fetch product detail data while navigate the page
    useEffect(() => {
        const productapi = 'https://www.texasknife.com/dynamic/texasknifeapi.php?action=product&sku=' + encodedProductCode;

        const fetchData = async () => {
            // console.log(productapi)
            try {
                const response = await axios.get(productapi);
                if (response) {
                    setProductData(response.data.data[0]);
                    let responseImageUrl=response.data.data[0].product_image;
                    // console.log("dai: "+response.data.data[0].product_image);


                    const encodedProductImage = encodeURIComponent(responseImageUrl);
                    const productimageapi = 'https://www.texasknife.com/dynamic/texasknifeapi.php?action=image&image=' + encodedProductImage;
                    // console.log("url : "+productimageapi)
                    const fetchimage = async () => {
                        try {
                            const response = await axios.get(productimageapi);
                            if (response) {
                                setLoader(true)
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
    
    }, []);
    //   console.log(useSelector((state)=>state.login.logindata))
  
  
    return (
        <>
    
        {loader?(
            <View style={styles.ProductDetail}>
            <View style={styles.ProductDetail_container}>
                <View style={styles.header_container}>
                    <Text style={styles.header_title}>Product Details</Text>
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
                        <Feather name="minus-circle" size={30} color="black" onPress={()=>quantitySub()}/>
                        <Text>{quantity}</Text>
                        <Feather name="plus-circle" size={30} color="black" onPress={()=>quantityAdd()} />
                    </View>

                    {buttonShow?(
                    <TouchableOpacity style={styles.btn} onPress={()=>AddToCart()}>                            
                    <Text >Add To Cart</Text>
                    </TouchableOpacity>
                    ):(
                        <TouchableOpacity style={styles.btn} onPress={()=>BackToCart()}>                            
                    <Text >Back</Text>
                    </TouchableOpacity>
                    )}
                   
                </View>
                </View>
            </View>
        </View>
        ):(
            <Loader/>
        )}
          </> 
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
        padding: 10
    },
    header_title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2f2e7e',
        width:'100%'
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
        marginTop:5
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
        alignItems:'center'
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
    weight: {
        width: '100%',
        flexDirection: 'row',
    }   

});
export default PopCard
import React, { useEffect, useState } from 'react';


import { Text, Image, View,StyleSheet, TouchableOpacity,ScrollView,ToastAndroid ,Alert,Platform} from 'react-native';
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
import BottomTab from "../Sub-components/ButtomTab/BottomTab";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




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
        <View style={styles.productdetail}>

        <View style={styles.header}>
          <View style={styles.header_container}>
        <Text  style={styles.header_text}>Product Details</Text>
          </View>
        </View>

        <View style={styles.content}>
          {loader?(
            <ScrollView style={{flex:1}}>
              <View style={styles.productdetail_container}>
              <View style={styles.card}>

              <View style={styles.image_container}>
                <Image
                    style={{width:'100%',height:'100%',resizeMode:'cover',borderTopLeftRadius:20,borderTopRightRadius:20}}
                    source={{ uri: productImage.msg }}
                />
                </View>

                <View style={styles.content_container}>
           
                        <Text style={styles.name}>{productData.product_name}</Text>
               
                    <View style={styles.code}>
                        <Text style={{ color: 'white' ,fontSize:wp(4.5)}}>{productData.sku}</Text>
                    </View>

                    <View style={styles.price_container}>
                        <Text style={styles.label}>Price:</Text>
                        <Text style={styles.price}>$ {productData.product_price}</Text>
                    </View>

                    <View style={styles.description_container}>
                        <Text style={styles.label} >Description:</Text>
                        <ScrollView style={styles.scrollview} >
                            <HTMLView value={productData.description} stylesheet={customStyles} />
                        </ScrollView>
                    </View>
  
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
                    <Text style={styles.btn_text} >Add To Cart</Text>
                    </TouchableOpacity>
                    ):(
                        <TouchableOpacity style={styles.btn} onPress={()=>BackToCart()}>                            
                    <Text style={styles.btn_text} >Back</Text>
                    </TouchableOpacity>
                    )}
                   
                </View>


              </View>
              </View>
            </ScrollView>
           
          ):(
             <Loader/>
          )}
        </View>
        <View style={styles.footer}>
        <BottomTab home={home} cart={cart} profile={profile} />
        </View>
     </View>
    );
}
const customStyles = StyleSheet.create({
    p: {
        fontSize:hp(1.6),
        color: 'grey',
        marginBottom: -60
    },
    // Add more styles for other HTML elements as needed
});

const styles = StyleSheet.create({
    productdetail:{
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
        // backgroundColor:'white',
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
        productdetail_container:{
            // backgroundColor:'yellow',
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        card:{
        width:wp("90%"),
        // height:hp('50%'),
        // backgroundColor:'lightgreen',
        marginTop:hp(5),
        marginBottom:hp(5)
        },
        image_container:{
            width:'100%',
            height:hp('30%'),
            // backgroundColor:'orange'
        },
        scrollview:{
            // backgroundColor:'red',
            // height:hp(10),
            paddingBottom:10,
            width:'100%'
            // paddingLeft:hp(1),
        },
        name:{
            fontSize:wp(5),
            fontWeight: 'bold',
            color: '#2f2e7e',
            marginBottom:hp(1.5),
            textAlign:'center'
        },
        code: {
            backgroundColor: 'black',
            width:wp(25),
            borderRadius: 10,
            alignItems: 'center',
            marginBottom:hp(1.5),
            padding:2
        },
        price: {
            fontSize:wp(4.5),
        },
        quantity: {
            width:wp('30%'),
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 5,
            marginBottom: 10,
            alignItems:'center'
        },
        label: {
            color: '#1975d3',
            fontWeight: 'bold',
            fontSize:wp(5.5),
            marginBottom: 5,
        },
        btn: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
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
            alignItems:'center'
        },
        weight: {
            width: '100%',
            flexDirection: 'row',
        }   ,
        btn_text:{
            color:'#ffffff',
            fontSize:wp(4.5),
            fontWeight:'bold'
        },
        content_container:{
            backgroundColor:'#e8fcfc',
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20
        }
    
    
    
    
      

});
export default PopCard
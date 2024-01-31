import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Platform, Alert,Image,ToastAndroid} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getuserdata } from '../../Slice/loginSlice';
import Loader from '../Sub-components/Loader';
import { useState } from 'react';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please Enter Your Email'),
    password: Yup.string().required('Please Enter Your Password')
  });
 


const Login = ({ navigation }) => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={{flex:1}}>
         {isLoading?(<Loader/>):(
    <View style={styles.login}>
        <View style={styles.header}></View>
        <View style={styles.login_container}>
{/* ............................................................................ */}
<Formik
initialValues={{
    email: '',
    password: '',
  }}
  validationSchema={SignupSchema}
  onSubmit={values => {
    const encodedEmail = encodeURIComponent(values.email);
     const encodedPassword = encodeURIComponent(values.password);
     const apiUrl='https://www.texasknife.com/dynamic/texasknifeapi.php?action=static_login&email='+encodedEmail+'&password='+ encodedPassword;
     
     const fetchData = async () => {
     setIsLoading(true);
     try {
       const response = await axios.get(apiUrl);
       if(response){
    
         dispatch(getuserdata(response.data.data[0]))
         // console.log('API Response:', response.data.data[0]);
         setIsLoading(false)
         navigation.navigate('tab');
       }
      

     } catch (error) {
       // console.error('Error fetching data:', error);
       
       if (Platform.OS === 'android') {
         ToastAndroid.show('Please check your credentials', ToastAndroid.SHORT);
       } else if (Platform.OS === 'ios') {
        Alert.alert('Please check your credentials')
       }  
       
       setIsLoading(false);
       console.log("Invalid user detail");
      
     }
   };
   fetchData()
  }}
>
{({values,errors,touched,handleSubmit,handleChange,setFieldTouched,isValid})=>(


            <View style={styles.form}>
                <View style={styles.image_container}>
                    <View style={styles.img}>
                    <Image style={{ width: 100, height: 100 }} source={require('../../assets/images/TEXASnewlogo.png')}  />

                    </View>
                </View>
                <View style={styles.form_input_container}>
                    <View style={styles.form_input}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                         style={styles.input}
                         placeholder="Enter email"
                         autoCapitalize="none"
                         value={values.email}
                         onChangeText={handleChange('email')}
                         onBlur={()=>setFieldTouched('email')}
                         />
                         {touched.email && errors.email&&
                         <Text style={styles.error_message}>{errors.email}</Text>
                         }
                    </View>
                </View>
                <View style={styles.form_input_container}>
                    <View style={styles.form_input}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput 
                         style={styles.input}
                         placeholder="Enter Password"
                         autoCapitalize="none"
                         value={values.password}
                         secureTextEntry={true}
                         onChangeText={handleChange('password')}
                         onBlur={()=>setFieldTouched('password')}
                         />
                         {touched.password && errors.password&&
                        <Text style={styles.error_message}>{errors.password}</Text>
                         }
                    </View>
                </View>
              
              <View style={styles.button_container} >
                <TouchableOpacity
                 onPress={handleSubmit}
                 disabled={!isValid}
                 style={[styles.login_btn,{backgroundColor: isValid ?'#1975d3':'#8fc6ff'}]} 
             
                 >
                    <Text style={styles.login_btn_text}>Login</Text>
                </TouchableOpacity>
                <Text style={{paddingBottom:hp(1),fontSize:hp(2)}}>Don't have an account</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('register')}>
                <Text style={{color: '#1975d3',fontSize:hp(2.1)}} >Sign Up</Text>
                </TouchableOpacity>
              </View>

            </View>
            )}
            </Formik>
{/* .......................................................................................... */}
        </View>
         <View style={styles.footer}></View>
    </View>
    )}
    </View>
  )
}
const styles = StyleSheet.create({
    login:{
     flex:1
    },
    header:{
     flex:1,
    },
    login_container:{
     flex:5,
    //  backgroundColor:'pink',
     display:'flex',
     justifyContent:'center',
     
    },
    footer:{
    flex:1
    },
    form:{
    //  backgroundColor:'yellow',
     margin:15,
    },
    image_container:{
    display:'flex',
    alignItems:'center',
    marginBottom:hp(5)
    },
    img:{
        // backgroundColor:'red',
        height: hp('15%'), // 70% of height device screen
        width: hp('15%')   // 80% of width device screen
    },
    form_input_container:{
     marginBottom:hp(3)
    },
    form_input:{
     
    },
    label:{
     fontSize:hp(2.3),
     fontWeight:'600'
    },
    input:{
    // backgroundColor:'orange',
    fontSize:hp(2.5),
    fontWeight:'300',
    paddingTop:hp(1),
    paddingBottom:hp(.7),
    borderBottomWidth:1
    },
    error_message:{
     fontSize:hp(1.7),
     color:'red'
    },
    button_container:{
        display:'flex',
        alignItems:'center'
    },
    login_btn:{
        // backgroundColor: '#1975d3',
        margin:15,
        borderRadius:50,
        width:wp('80%'),
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10
        
    },
    login_btn_text:{
        color:'#ffffff',
        fontSize:wp(6),
        fontWeight:'600',
      
    },



})

export default Login

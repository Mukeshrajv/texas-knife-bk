import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Platform, Alert,Image} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getuserdata } from '../../Slice/loginSlice';
import { ToastAndroid } from 'react-native';
import { useState } from 'react';

const SignupSchema = Yup.object().shape({
    name:Yup.string()
    .min(2,'Too short!')
    .max(20,'Too Long!').
    required('Please Enter Your Name'),
    email: Yup.string().email('Invalid email')
    .required('Please Enter Your Email'),
    password: Yup.string()
    .min(8)
    // .matches(/^(?=.? [A-Z] ) (?=.? [a-z] ) (?=.? [0-9] ) ( ?=. ? [#? !@$%^&*-] ) . {8,}$/,'Must Contain minimum 8 characters,al least 1 uppercase,1 lowercase,1number,1 specal characters')
    .required('Please Enter Your Password'),
    conformPassword:Yup.string()
    .min(8,'Confirm Password must be 8 characters long')
    .oneOf([Yup.ref('password')],'Password dosnot match')
    .required('Please Enter Confirm Password'),
    
  });
 


const Register = ({ navigation }) => {
  const dispatch=useDispatch();
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
    name:'',
    email: '',
    password: '',
    conformPassword:''
  }}
  validationSchema={SignupSchema}
  onSubmit={values => {
  const encodedUsername = encodeURIComponent(values.name);
  const encodedEmail = encodeURIComponent(values.email);
  const encodedPassword = encodeURIComponent(values.password);
    const apiUrl = 'https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=create&table=mobile_app_users&name='+encodedUsername+'&email='+encodedEmail+'&password='+encodedPassword;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (Platform.OS === 'android') {
          ToastAndroid.show('Registration successfully', ToastAndroid.SHORT);
        } else if (Platform.OS === 'ios') {
         Alert.alert('Registration successfully')
        }  
        navigation.navigate('login');
        dispatch(getuserdata(response.data.data[0]))
       
      } catch (error) {
        if (Platform.OS === 'android') {
          ToastAndroid.show(error, ToastAndroid.SHORT);
        } else if (Platform.OS === 'ios') {
         Alert.alert(error)
        }  
        console.error('Error fetching data:', error);
      }
    };
  
  
    fetchData();
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
                        <Text style={styles.label}>Name</Text>
                        <TextInput 
                         style={styles.input}
                         placeholder="Enter Name"
                         autoCapitalize="none"
                         value={values.name}
                         onChangeText={handleChange('name')}
                         onBlur={()=>setFieldTouched('name')}
                         />
                         {touched.name && errors.name&&
                         <Text style={styles.error_message}>{errors.name}</Text>
                         }
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
                         onChangeText={handleChange('password')}
                         onBlur={()=>setFieldTouched('password')}
                         />
                         {touched.password && errors.password&&
                        <Text style={styles.error_message}>{errors.password}</Text>
                         }
                    </View>
                </View>
                <View style={styles.form_input_container}>
                    <View style={styles.form_input}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput 
                         style={styles.input}
                         placeholder="ReEnter Password"
                         autoCapitalize="none"
                         value={values.conformPassword}
                         onChangeText={handleChange('conformPassword')}
                         onBlur={()=>setFieldTouched('conformPassword')}
                         />
                         {touched.conformPassword && errors.conformPassword&&
                         <Text style={styles.error_message}>{errors.conformPassword}</Text>
                         }
                    </View>
                </View>
                
              
              <View style={styles.button_container} >
                <TouchableOpacity
                 onPress={handleSubmit}
                 disabled={!isValid}
                 style={[styles.login_btn,{backgroundColor: isValid ?'#1975d3':'#8fc6ff'}]} 
             
                 >
                    <Text style={styles.login_btn_text}>SignUp</Text>
                </TouchableOpacity>
                <Text style={{paddingBottom:hp(.5),fontSize:hp(2)}}>Have an account</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                <Text style={{color: '#1975d3',fontSize:hp(2.1)}}>Login</Text>
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
     marginBottom:hp(2)
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
        margin:10,
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

export default Register

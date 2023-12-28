
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity,Platform,AlertIOS, Alert } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getuserdata } from '../../Slice/loginSlice';
import Loader from '../Sub-components/Loader';
import { ToastAndroid } from 'react-native';




const Login = ({ navigation }) => {
  const dispatch = useDispatch();
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const encodedEmail = encodeURIComponent(email);
  const encodedPassword = encodeURIComponent(password);

  const [isLoading, setIsLoading] = useState(false);

  

  const handleSubmit = () => {

    if (!email) {
      setEmailError('Please enter your email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid email format');
    }
    else {
      setEmailError('');
    } 

    if (!password) {
      setPasswordError('Please enter your password');
    } else if (password.length < 6) {
      setPasswordError('password should be minimum 6 characters');
    }
    else {
     
    const apiUrl = 'https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=read&table=mobile_app_users&email=' + encodedEmail + '&password=' + encodedPassword;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(apiUrl);
        if(response){
          navigation.navigate('tab');
          
      
          dispatch(getuserdata(response.data.data[0]))
          console.log('API Response:', response.data.data[0]);
          setIsLoading(false)
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
       
        // Toast.show({
        //   type: 'error',
        //   position: 'bottom',
        //   text1: 'Error',
        //   text2: 'This is an error message.',
        // });
      

      }
    };
    fetchData();
    setEmail('')
    setPassword('')
    setEmailError('')
    setPasswordError('')

    }



 
  };

  return (
    <View style={styles.loginpage}>
      
      {isLoading?(
        <Loader/>
        // <ActivityIndicator animating={true} hidesWhenStopped={true} size={60} color="blue" style={{justifyContent: 'center',alignItems: 'center',backgroundColor:'ffffff',width:'100%',height:'100%'}} />
      ):(
         <View style={styles.logincontainer}>

         <View style={styles.logo}>
           <Image style={{ width: 100, height: 100 }} source={require('../../assets/images/TEXASnewlogo.png')}  />
         </View>
         <View style={{ marginBottom: 15 }}>
 
           {/* email */}
           <View style={styles.form_container}>
             <Text style={styles.label} >Email</Text>
 
             <TextInput
               style={styles.input}
               placeholder="Enter email"
               onChangeText={text => setEmail(text)}
               value={email}
               onBlur={() => {
                 if (!email) {
                   setEmailError('Please enter your email');
                 } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                   setEmailError('Invalid email format');
                 }
                 else {
                   setEmailError('');
                 }
               }}
             />
 
             <View style={styles.error_message}>
 
               <Text style={{ fontSize: 12, color: 'red', textTransform: 'capitalize' }}> {emailError}</Text>
             </View>
           </View>
 
           {/* password */}
           <View style={styles.form_container}>
             <Text style={styles.label}>Password</Text>
 
             <TextInput
               style={styles.input}
               placeholder="Enter password"
               value={password}
               onChangeText={text => setPassword(text)}
               onBlur={() => {
                 if (!password) {
                   setPasswordError('Please enter your password');
                 } else if (password.length < 6) {
                   setPasswordError('password should be minimum 6 characters');
                 }
                 else {
                   setPasswordError('');
                 }
               }}
             />
             <View style={styles.error_message}>
               {/* <Image style={{width:15,height:15,marginRight:10}} source={require('../../assets/images/error.png')}/> */}
               <Text style={{ fontSize: 12, color: 'red', textTransform: 'capitalize', }}>{passwordError}</Text>
             </View>
           </View>
         </View>
         <View style={styles.forgotpassword}>
           <TouchableOpacity ><Text>Forgot Password?</Text></TouchableOpacity>
         </View>
         <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
           <Text style={styles.btn_text} >Login</Text>
         </TouchableOpacity>
 
         <View style={styles.donthave}>
           <Text>Don't have an account</Text>
           <TouchableOpacity >
             <Text style={styles.signuptxt} onPress={()=>navigation.navigate('register')} >Sign Up</Text>
           </TouchableOpacity>
         </View>
       </View>
      )}
     
    </View>

  )
}


// Styles for the components
const styles = StyleSheet.create({
  loginpage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logincontainer: {
    // backgroundColor: "yellow",
    width: 370,
    padding: 20,
  },
  loginheader: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#1975d3',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    // backgroundColor: "white",
  },
  form_container: {
    padding: 2,

  },
  label: {
    fontSize: 15,
    fontWeight: '500',

  },
  error_message: {
    padding: 5
  },
  input: {
    fontSize: 16,
    borderColor: '#959595',
    borderBottomWidth: 1,
    borderBottomColor: '#1975d3',
    padding: 3,
    // marginTop: 3
  },
  btn: {
    backgroundColor: '#1975d3',
    padding: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  btn_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signuptxt: {
    color: '#1975d3'
  },
  donthave: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    // backgroundColor:"blue",
  },
  forgotpassword: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'flex-end',
    // textAlign:'right',
    color: '#1975d3',
    // backgroundColor:"green",
    // width:100,
  }
});

export default Login
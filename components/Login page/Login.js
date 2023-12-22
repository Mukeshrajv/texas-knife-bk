import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet ,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getuserdata } from '../../Slice/loginSlice';
const Login = () => {
    const dispatch=useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const encodedEmail = encodeURIComponent(email);
  const encodedPassword = encodeURIComponent(password);

  

  const handleSubmit=()=>{
    if (!password) {
        setPasswordError('Please enter your password');
      } else if(password.length < 6){
        setPasswordError('password should be minimum 6 characters');
      }
      else {
        setPasswordError('');
      }
     

    const apiUrl = 'https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=read&table=mobile_app_users&email=' + encodedEmail + '&password=' + encodedPassword; 
    const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          dispatch(getuserdata(response.data.data[0]))
        //   console.log('API Response:', response.data.data[0]);
        
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
     
  
      fetchData();
      setEmail('')
      setPassword('')
      setEmailError('')
      setPasswordError('')
  };
 
  return (
    <View style={styles.loginpage}>   
   <View style={styles.logincontainer}>   
                <Text style={styles.loginheader}>Login</Text>
    <View style={{marginBottom:15}}>
              
            {/* email */}
        <View style={styles.form_container}>
        <Text style={styles.label}>Email</Text>
     
        <TextInput
            style={styles.input}
            placeholder="Enter email"
            onChangeText={text => setEmail(text)}
            value={email}
            onBlur={()=>{
                if (!email) {
                    setEmailError('Please enter your email');
                  } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
                    setEmailError('Invalid email format');
                  }
                  else {
                    setEmailError('');
                  }
            }}
        />

    <View style={styles.error_message}>
    {/* <Image style={{width:15,height:15}} source={require('../../assets/images/error.png')}/> */}
    <Text style={{ fontSize:12,color:'red',textTransform:'capitalize'}}> {emailError}</Text>
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
            } else if(password.length < 6){
              setPasswordError('password should be minimum 6 characters');
            }
            else {
              setPasswordError('');
            }
          }}
      />
      <View style={styles.error_message}>
        {/* <Image style={{width:15,height:15,marginRight:10}} source={require('../../assets/images/error.png')}/> */}
        <Text style={{ fontSize:12,color:'red',textTransform:'capitalize',}}>{passwordError}</Text>
        </View> 
    </View>

    </View> 
    
      <TouchableOpacity >
        <Text style={styles.forgotpassword} >Forgot Password?</Text>
      </TouchableOpacity>
      

     <Button color={'#2196F3'} title='Login' onPress={()=>handleSubmit()}/>


     <View style={styles.donthave}>
      <Text>Don't have an account</Text>
      <TouchableOpacity >
        <Text style={styles.signuptxt} >Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
    
  )
}


// Styles for the components
const styles = StyleSheet.create({
    loginpage:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    logincontainer:{
        // backgroundColor:"yellow",
        padding:20,
        width:300,
    },
    loginheader:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:50,
        color:'#2196F3',
        },
        form_container:{
            padding:2,
           
        },
        label:{
            fontSize:20,
            fontWeight:'500'
        },
        error_message:{
            padding:5
        },
        input:{
            fontSize:16,
            borderColor:'#959595',
            borderWidth:1,
            paddingLeft:5,
            marginTop:5
        },
        signuptxt: {
            color: '#2196F3'
          },
          donthave:{
            alignItems:'center',
            marginBottom:10,
            marginTop:30
          },
          forgotpassword:{
            marginBottom:10,
            textAlign:'right',
            color: '#2196F3'
          }
  });

export default Login
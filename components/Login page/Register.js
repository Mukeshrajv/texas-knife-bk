import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getuserdata } from '../../Slice/loginSlice';
const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError,setNameError]=useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const encodedUsername = encodeURIComponent(name);
  const encodedEmail = encodeURIComponent(email);
  const encodedPassword = encodeURIComponent(password);



  const handleSubmit = () => {
    if (!password) {
      setPasswordError('Please enter your password');
    } else if (password.length < 6) {
      setPasswordError('password should be minimum 6 characters');
    }
    else {
      setPasswordError('');
    }


    const apiUrl = 'https://trackappt.desss-portfolio.com/dynamic/dynamicapi.php?action=create&table=mobile_app_users&name='+encodedUsername+'&email='+encodedEmail+'&password='+encodedPassword;
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
    setName('')
    setEmail('')
    setPassword('')
    setNameError('')
    setEmailError('')
    setPasswordError('')
  };

  return (
    <View style={styles.loginpage}>
      <View style={styles.logincontainer}>

        <View style={styles.logo}>
          <Image style={{ width: 100, height: 100 }} source={require('../../assets/images/TEXASnewlogo.png')} />
        </View>
        <View style={{ marginBottom: 15 }}>

        <View style={styles.form_container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              onChangeText={text => setName(text)}
              value={name}
              onBlur={() => {
                if (!name) {
                  setNameError('Please enter your name');
                } 
                else {
                  setNameError('');
                }
              }}
            />

            <View style={styles.error_message}>

              <Text style={{ fontSize: 12, color: 'red', textTransform: 'capitalize' }}> {nameError}</Text>
            </View>
          </View>

          {/* email */}
          <View style={styles.form_container}>
            <Text style={styles.label}>Email</Text>
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

          <View style={styles.form_container}>
            <Text style={styles.label}>Re-Enter Password</Text>

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
      
        <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
          <Text style={styles.btn_text}>SignUp</Text>
        </TouchableOpacity>


        <View style={styles.donthave}>
          <Text>Don't have an account</Text>
          <TouchableOpacity >
            <Text style={styles.signuptxt} >Login</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default Register
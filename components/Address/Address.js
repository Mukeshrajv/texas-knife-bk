import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput, ToastAndroid, Alert, Platform } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../Sub-components/Loader'
import { getNewShippingAddress, getNewBillingAddress, getCustomerState } from '../../Slice/paymentSlice';
import BottomTab from '../Sub-components/ButtomTab/BottomTab';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const Address = ({ navigation }) => {
  const dispatch = useDispatch();
  const customer_id = encodeURIComponent(useSelector((state) => state.login.logindata.id))

  const [loading, setLoading] = useState(true)

  const [same, setSame] = useState(false);
  const [different, setDifferent] = useState(false)


  const [f1email, setF1email] = useState("");
  const [f1firstName, setF1firstName] = useState("");
  const [f1lastName, setF1lastName] = useState("");
  const [f1companyName, setF1companyName] = useState("");
  const [f1address, setF1address] = useState("");
  const [f1apartment, setF1apartment] = useState("");
  const [f1city, setF1city] = useState("");
  const [f1country, setF1country] = useState("");
  const [f1state, setF1state] = useState("");
  const [f1zipCode, setF1zipCode] = useState("");
  const [f1phoneNumber, setF1phoneNumber] = useState("");


  const [f2email, setF2email] = useState("");
  const [f2firstName, setF2firstName] = useState("");
  const [f2lastName, setF2lastName] = useState("");
  const [f2companyName, setF2companyName] = useState("");
  const [f2address, setF2address] = useState("");
  const [f2apartment, setF2apartment] = useState("");
  const [f2city, setF2city] = useState("");
  const [f2country, setF2country] = useState("");
  const [f2state, setF2state] = useState("");
  const [f2zipCode, setF2zipCode] = useState("");
  const [f2phoneNumber, setF2phoneNumber] = useState("");



  const [errormsg, setErrormsg] = useState({
    email: false,
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    country: false,
    state: false,
    zip: false,
    phoneNumber: false,
  });

  const [errormsg2, setErrormsg2] = useState({
    email: false,
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    country: false,
    state: false,
    zip: false,
    phoneNumber: false,
  });

  const [error1email, setError1email] = useState(false);
  const [error1firstName, setError1firstName] = useState(false);
  const [error1lastName, setError1lastName] = useState(false);
  const [error1address, setError1address] = useState(false);
  const [error1city, setError1city] = useState(false);
  const [error1country, setError1country] = useState(false);
  const [error1state, setError1state] = useState(false);
  const [error1zipCode, setError1zipCode] = useState(false);
  const [error1phoneNumber, setError1phoneNumber] = useState(false);


  const [error2email, setError2email] = useState(false);
  const [error2firstName, setError2firstName] = useState(false);
  const [error2lastName, setError2lastName] = useState(false);
  const [error2address, setError2address] = useState(false);
  const [error2city, setError2city] = useState(false);
  const [error2country, setError2country] = useState(false);
  const [error2state, setError2state] = useState(false);
  const [error2zipCode, setError2zipCode] = useState(false);
  const [error2phoneNumber, setError2phoneNumber] = useState(false);



  const isValidEmail = (email) => {
    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const Ef1Email = encodeURIComponent(f1email);
  const Ef1firstName = encodeURIComponent(f1firstName);
  const Ef1lastName = encodeURIComponent(f1lastName);
  const Ef1address = encodeURIComponent(f1address);
  const Ef1city = encodeURIComponent(f1city);
  const Ef1country = encodeURIComponent(f1country);
  const Ef1state = encodeURIComponent(f1state);
  const Ef1zipCode = encodeURIComponent(f1zipCode);
  const Ef1phoneNumber = encodeURIComponent(f1phoneNumber);
  const Ef1companyName = encodeURIComponent(f1companyName);
  const Ef1apartment = encodeURIComponent(f1apartment);

  const sendForm1Data = () => {

  }

  const fetchForm1Data = () => {
    const formApi = 'https://www.texasknife.com/dynamic/texasknifeapi.php?action=insert_update_checkoutship&bill_name=' + Ef1firstName + '&bill_l_name=' + Ef1lastName + '&bill_address1=' + Ef1address + '&bill_address2=' + Ef1apartment + '&bill_town_city=' + Ef1city + '&bill_state_region1=' + Ef1state + '&bill_zip_code=' + Ef1zipCode + '&bill_country=' + Ef1country + '&bill_phone=' + Ef1phoneNumber + '&bill_email1=' + Ef1Email + '&customer_id=' + customer_id + '&sessions_id=123456&rurl=&ship_amt=&tx_amount=&check_out_total_amount=&payment_type=&shipment_name=&bill_company=' + Ef1companyName
    //  console.log(formApi) 
    const fetchdata = async () => {
      setLoading(true)
      try {
        const response = await axios.get(formApi)
        if (response) {
          dispatch(getCustomerState(f1state))
          const data = { email: f1email, firstName: f1firstName, lastName: f1lastName, companyName: f1companyName, address: f1address, apartment: f1apartment, city: f1city, country: f1country, state: f1state, zipCode: f1zipCode, phoneNumber: f1phoneNumber }
          dispatch(getNewShippingAddress(data))
          dispatch(getNewBillingAddress(data))
          navigation.navigate("shipping")
          setLoading(false)
        }
      } catch (error) {
        console.log("form1 data not updated");
      }
    }

    navigation.navigate("shipping")
    fetchdata()
  }



  const fetchForm2Data = () => {
   
    dispatch(getCustomerState(f1state))

    const data1 = { email: f1email, firstName: f1firstName, lastName: f1lastName, companyName: f1companyName, address: f1address, apartment: f1apartment, city: f1city, country: f1country, state: f1state, zipCode: f1zipCode, phoneNumber: f1phoneNumber }
    dispatch(getNewShippingAddress(data1))


    const data2 = { email: f2email, firstName: f2firstName, lastName: f2lastName, companyName: f2companyName, address: f2address, apartment: f2apartment, city: f2city, country: f2country, state: f2state, zipCode: f2zipCode, phoneNumber: f2phoneNumber }
    dispatch(getNewBillingAddress(data2))



    navigation.navigate("shipping")

  }

  const form1Validation = () => {

    if (!f1email) {
      setError1email(true)
    } else if (!isValidEmail(f1email)) {
      setError1email(true)
    } else if (error1email == false && error1firstName == false && error1lastName == false && error1address == false && error1city == false && error1country == false && error1state == false && error1zipCode == false && error1phoneNumber == false) {
      fetchForm1Data()
    } else {
      setError1email(false)
    }

    if (!f1firstName) {
      setError1firstName(true)
    } else {
      setError1firstName(false)
    }

    if (!f1lastName) {
      setError1lastName(true)
    } else {
      setError1lastName(false)
    }

    if (!f1address) {
      setError1address(true)
    } else {
      setError1address(false)
    }

    if (!f1city) {
      setError1city(true)
    } else {
      setError1city(false)
    }

    if (!f1country) {
      setError1country(true)
    } else {
      setError1country(false)
    }

    if (!f1state) {
      setError1state(true)
    } else {
      setError1state(false)
    }

    if (!f1zipCode) {
      setError1zipCode(true)
    } else {
      setError1zipCode(false)
    }

    if (!f1phoneNumber) {
      setError1phoneNumber(true)
    }
    else {
      setError1phoneNumber(false)
    }

    if (error1email == false && error1firstName == false && error1lastName == false && error1address == false && error1city == false && error1country == false && error1state == false && error1zipCode == false && error1phoneNumber == false) {
      fetchForm1Data()
    }

  }

  const form2Validation = () => {
    if (!f2email) {
      setError2email(true)
    } else if (!isValidEmail(f2email)) {
      setError2email(true)
    } else if (error2email == false && error2firstName == false && error2lastName == false && error2address == false && error1city == false && error2country == false && error2state == false && error2zipCode == false && error2phoneNumber == false) {
      fetchForm2Data()
    } else {
      setError2email(false)
    }

    if (!f2firstName) {
      setError2firstName(true)
    } else {
      setError2firstName(false)
    }

    if (!f2lastName) {
      setError2lastName(true)
    } else {
      setError2lastName(false)
    }

    if (!f2address) {
      setError2address(true)
    } else {
      setError2address(false)
    }

    if (!f2city) {
      setError2city(true)
    } else {
      setError2city(false)
    }

    if (!f2country) {
      setError2country(true)
    } else {
      setError2country(false)
    }

    if (!f2state) {
      setError2state(true)
    } else {
      setError2state(false)
    }

    if (!f2zipCode) {
      setError2zipCode(true)
    } else {
      setError2zipCode(false)
    }

    if (!f2phoneNumber) {
      setError2phoneNumber(true)
    }
    else {
      setError2phoneNumber(false)
    }

    if (error2email == false && error2firstName == false && error2lastName == false && error2address == false && error1city == false && error2country == false && error2state == false && error2zipCode == false && error2phoneNumber == false) {
      fetchForm2Data()
    }

  }


  const handleSaveChange = () => {

    if (same == false && different == false) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Please Select the Billing Address', ToastAndroid.SHORT);
      }
      else if (Platform.OS === 'ios') {
        Alert.alert('Please Select the Billing Address')
      }
    } else {
      if (same == true) {
        form1Validation()
      } else {
        form2Validation()
      }
    }

  };


  useEffect(() => {
    fetchdataurl = "https://www.texasknife.com/dynamic/texasknifeapi.php?action=get_checkoutship&customer_id=" + customer_id;
    // fetchdataurl="https://www.texasknife.com/dynamic/texasknifeapi.php?action=get_checkoutship&customer_id=88985";
    fetchdata = async () => {
      try {
        const response = await axios.get(fetchdataurl)
        if (response) {
          setLoading(false)
          // console.log(response.data.data[0])
          setF1email(response.data.data[0].bill_email1)
          setF1firstName(response.data.data[0].bill_name)
          setF1lastName(response.data.data[0].bill_l_name)
          setF1companyName(response.data.data[0].bill_company)
          setF1address(response.data.data[0].bill_address1)
          setF1apartment(response.data.data[0].bill_address2)
          setF1city(response.data.data[0].bill_town_city)
          setF1state(response.data.data[0].bill_state_region1)
          setF1country(response.data.data[0].bill_country)
          setF1zipCode(response.data.data[0].bill_zip_code)
          setF1phoneNumber(response.data.data[0].bill_phone)


        }
      } catch (error) {
        setLoading(false)
        console.log("api not working")
      }


    }
    fetchdata()

  }, [])

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


    <View style={styles.Subcategory}>

      <View style={styles.header}>
        <View style={styles.header_container}>
          <Text style={styles.title}>Address</Text>
        </View>
      </View>
      {loading?(
          <Loader/>
         ):(
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.address_scrollview}>
          <View style={styles.contact_information_container}>
            <Text style={styles.contact}>Contact Information</Text>
            <View style={styles.address_input_conatiner}>
              <Text style={styles.address_input_inlinetext}>Email</Text>
              <View style={styles.input_text}>
                <TextInput
                  style={styles.address_input_text}
                  value={f1email}
                  onChangeText={(text) => setF1email(text)}
                  onBlur={() => {
                    if (!f1email) {
                      setError1email(true)
                    } else if (!isValidEmail(f1email)) {
                      setError1email(true)
                    } else {
                      setError1email(false)
                    }
                  }
                  }
                />
                {error1email &&
                  <View>
                    <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg({ ...errormsg, email: !errormsg.email })} />
                    {errormsg.email == true ? (<Text style={styles.error_message}>Invalid email </Text>) : (<View></View>)}
                  </View>
                }
              </View>
            </View>
          </View>

          <View style={styles.shipping_address_container}>


            <View style={styles.name_container}>
              <View style={styles.address_input}>
                <Text style={styles.address_input_inlinetext}>FirstName</Text>
                <View style={styles.input_text}>
                  <TextInput
                    style={styles.address_input_text}
                    value={f1firstName}
                    onChangeText={(text) => setF1firstName(text)}
                    onBlur={() => {
                      if (!f1firstName) {
                        setError1firstName(true)
                      } else {
                        setError1firstName(false)
                      }
                    }}
                  />
                  {error1firstName &&
                    <View>
                      <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg({ ...errormsg, firstName: !errormsg.firstName })} />
                      {errormsg.firstName == true ? (<Text style={styles.error_message}>Enter FirstName  </Text>) : (<View></View>)}
                    </View>
                  }
                </View>
              </View>
              <View style={styles.address_input}>
                <Text style={styles.address_input_inlinetext}>LastName</Text>
                <View style={styles.input_text}>
                  <TextInput
                    style={styles.address_input_text}
                    value={f1lastName}
                    onChangeText={(text) => setF1lastName(text)}
                    onBlur={() => {
                      if (!f1lastName) {
                        setError1lastName(true)
                      } else {
                        setError1lastName(false)
                      }
                    }}
                  />
                  {error1lastName &&
                    <View>
                      <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg({ ...errormsg, lastName: !errormsg.lastName })} />
                      {errormsg.lastName == true ? (<Text style={styles.error_message}>Enter LastName </Text>) : (<View></View>)}
                    </View>
                  }
                </View>
              </View>
            </View>

            <View style={styles.address_input_conatiner}>
              <Text style={styles.address_input_inlinetext}>Company(Optional)</Text>
              <TextInput
                style={styles.address_input_text}
                value={f1companyName}
                onChangeText={(text) => setF1companyName(text)}
              // onBlur={()=>form1Validation()}
              />
            </View>

            <View style={styles.address_input_conatiner}>
              <Text style={styles.address_input_inlinetext}>Address</Text>
              <View style={styles.input_text}>
                <TextInput
                  style={styles.address_input_text}
                  value={f1address}
                  onChangeText={(text) => setF1address(text)}
                  onBlur={() => {
                    if (!f1address) {
                      setError1address(true)
                    } else {
                      setError1address(false)
                    }
                  }}
                />
                {error1address &&
                  <View>
                    <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg({ ...errormsg, address: !errormsg.address })} />
                    {errormsg.address == true ? (<Text style={styles.error_message}>Enter Address </Text>) : (<View></View>)}
                  </View>
                }
              </View>
            </View>

            <View style={styles.address_input_conatiner}>
              <Text style={styles.address_input_inlinetext}>Apartment,Suite,Etc (Optional)</Text>
              <TextInput
                style={styles.address_input_text}
                value={f1apartment}
                onChangeText={(text) => setF1apartment(text)}
              // onBlur={()=>form1Validation()}
              />
            </View>

            <View style={styles.address_input_conatiner}>
              <Text style={styles.address_input_inlinetext}>City</Text>
              <View style={styles.input_text}>
                <TextInput
                  style={styles.address_input_text}
                  value={f1city}
                  onChangeText={(text) => setF1city(text)}
                  onBlur={() => {
                    if (!f1city) {
                      setError1city(true)
                    } else {
                      setError1city(false)
                    }
                  }}
                />
                {error1city &&
                  <View>
                    <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg({ ...errormsg, city: !errormsg.city })} />
                    {errormsg.city == true ? (<Text style={styles.error_message}>Enter City </Text>) : (<View></View>)}
                  </View>
                }
              </View>
            </View>

            <View style={styles.name_container}>
              <View style={styles.address_input}>
                <Text style={styles.address_input_inlinetext}>Country/Region</Text>
                <View style={styles.input_text}>
                  <TextInput
                    style={styles.address_input_text}
                    value={f1country}
                    onChangeText={(text) => setF1country(text)}
                    onBlur={() => {
                      if (!f1country) {
                        setError1country(true)
                      } else {
                        setError1country(false)
                      }
                    }}
                  />
                  {error1country &&
                    <View>
                      <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg({ ...errormsg, country: !errormsg.country })} />
                      {errormsg.country == true ? (<Text style={styles.error_message}>Enter Country </Text>) : (<View></View>)}
                    </View>
                  }
                </View>
              </View>
              <View style={styles.address_input}>
                <Text style={styles.address_input_inlinetext}>State</Text>
                <View style={styles.input_text}>
                  <TextInput
                    style={styles.address_input_text}
                    value={f1state}
                    onChangeText={(text) => setF1state(text)}
                    onBlur={() => {
                      if (!f1state) {
                        setError1state(true)
                      } else {
                        setError1state(false)
                      }
                    }}
                  />
                  {error1state &&
                    <View>
                      <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg({ ...errormsg, state: !errormsg.state })} />
                      {errormsg.state == true ? (<Text style={styles.error_message}>Enter State </Text>) : (<View></View>)}
                    </View>
                  }
                </View>
              </View>
            </View>

            <View style={styles.address_input_conatiner}>
              <Text style={styles.address_input_inlinetext}>ZipCode</Text>
              <View style={styles.input_text}>
                <TextInput
                  style={styles.address_input_text}
                  value={f1zipCode}
                  onChangeText={(text) => setF1zipCode(text)}
                  keyboardType='numeric'
                  maxLength={6}
                  onBlur={() => {

                    if (!f1zipCode) {
                      setError1zipCode(true)
                    } else {
                      setError1zipCode(false)
                    }
                  }}
                />
                {error1zipCode &&
                  <View>
                    <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg({ ...errormsg, zip: !errormsg.zip })} />
                    {errormsg.zip == true ? (<Text style={styles.error_message}>Enter ZipCode </Text>) : (<View></View>)}
                  </View>
                }
              </View>
            </View>

            <View style={styles.address_input_conatiner}>
              <Text style={styles.address_input_inlinetext}>PhoneNumber</Text>
              <View style={styles.input_text}>
                <TextInput
                  style={styles.address_input_text}
                  value={f1phoneNumber}
                  onChangeText={(text) => setF1phoneNumber(text)}
                  keyboardType='numeric'
                  maxLength={10}
                  onBlur={() => {

                    if (!f1phoneNumber) {
                      setError2phoneNumber(true)
                    }
                    else {
                      setError2phoneNumber(false)
                    }
                  }}
                />
                {error1phoneNumber &&
                  <View>
                    <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg({ ...errormsg, phoneNumber: !errormsg.phoneNumber })} />
                    {errormsg.phoneNumber == true ? (<Text style={styles.error_message}>Enter phoneNumber</Text>) : (<View></View>)}
                  </View>
                }
              </View>
            </View>

          </View>

          <View style={styles.billiing_address_container}>
            <View style={styles.billing_address_header_container}>
              <Text style={styles.header}>Billing Address</Text>
              <Text style={styles.billing_address_header_text}>Select The Address That Matches Your Cards Or Payment Method.</Text>
            </View>

            <View style={styles.same_address_container}>
              <CheckBox
                title='Same As Shipping'
                checked={same}
                onPress={() => { setSame(true), setDifferent(false) }}

              />
            </View>

            <View style={styles.same_address_container}>
              <CheckBox
                title='Use A Different Address'
                checked={different}
                onPress={() => { setSame(false), setDifferent(true) }}
              />
            </View>
            {/* -------------------------- */}
            {different &&
              <View>


                <View style={styles.address_input_conatiner}>
                  <Text style={styles.address_input_inlinetext}>Email</Text>
                  <View style={styles.input_text}>
                    <TextInput
                      style={styles.address_input_text}
                      value={f2email}
                      onChangeText={(text) => setF2email(text)}
                      onBlur={() => {
                        if (!f2email) {
                          setError2email(true)
                        } else if (!isValidEmail(f2email)) {
                          setError2email(true)
                        } else {
                          setError2email(false)
                        }
                      }}

                    />
                    {error2email &&
                      <View>
                        <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg2({ ...errormsg2, email: !errormsg2.email })} />
                        {errormsg2.email == true ? (<Text style={styles.error_message}>Enter valid email </Text>) : (<View></View>)}
                      </View>
                    }
                  </View>
                </View>


                <View style={styles.shipping_address_container}>


                  <View style={styles.name_container}>
                    <View style={styles.address_input}>
                      <Text style={styles.address_input_inlinetext}>FirstName</Text>
                      <View style={styles.input_text}>
                        <TextInput
                          style={styles.address_input_text}
                          value={f2firstName}
                          onChangeText={(text) => setF2firstName(text)}
                          onBlur={() => {
                            if (!f2firstName) {
                              setError2firstName(true)
                            } else {
                              setError2firstName(false)
                            }
                          }}
                        />
                        {error2firstName &&
                          <View>
                            <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg2({ ...errormsg2, firstName: !errormsg2.firstName })} />
                            {errormsg2.firstName == true ? (<Text style={styles.error_message}>Enter FirstName</Text>) : (<View></View>)}
                          </View>
                        }
                      </View>
                    </View>
                    <View style={styles.address_input}>
                      <Text style={styles.address_input_inlinetext}>LastName</Text>
                      <View style={styles.input_text}>
                        <TextInput
                          style={styles.address_input_text}
                          value={f2lastName}
                          onChangeText={(text) => setF2lastName(text)}
                          onBlur={() => {
                            if (!f2lastName) {
                              setError2lastName(true)
                            } else {
                              setError2lastName(false)
                            }
                          }}
                        />
                        {error2lastName &&
                          <View>
                            <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg2({ ...errormsg2, lastName: !errormsg2.lastName })} />
                            {errormsg2.lastName == true ? (<Text style={styles.error_message}>Enter LastName</Text>) : (<View></View>)}
                          </View>
                        }

                      </View>
                    </View>
                  </View>

                  <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>company</Text>
                    <TextInput
                      style={styles.address_input_text}
                      value={f2companyName}
                      onChangeText={(text) => setF2companyName(text)}

                    />
                  </View>

                  <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Address</Text>
                    <View style={styles.input_text}>
                      <TextInput
                        style={styles.address_input_text}
                        value={f2address}
                        onChangeText={(text) => setF2address(text)}
                        onBlur={() => {
                          if (!f2address) {
                            setError2address(true)
                          } else {
                            setError2address(false)
                          }
                        }}
                      />
                      {error2address &&
                        <View>
                          <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg2({ ...errormsg2, address: !errormsg2.address })} />
                          {errormsg2.address == true ? (<Text style={styles.error_message}>Enter Address</Text>) : (<View></View>)}
                        </View>
                      }
                    </View>
                  </View>

                  <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Apartment,Suite,Etc (Optional)</Text>
                    <TextInput
                      style={styles.address_input_text}
                      value={f2apartment}
                      onChangeText={(text) => setF2apartment(text)}

                    />

                  </View>

                  <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>City</Text>
                    <View style={styles.input_text}>
                      <TextInput
                        style={styles.address_input_text}
                        value={f2city}
                        onChangeText={(text) => setF2city(text)}
                        onBlur={() => {

                          if (!f2city) {
                            setError2city(true)
                          } else {
                            setError2city(false)
                          }
                        }}
                      />
                      {error2city &&
                        <View>
                          <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg2({ ...errormsg2, city: !errormsg2.city })} />
                          {errormsg2.city == true ? (<Text style={styles.error_message}>Enter City</Text>) : (<View></View>)}
                        </View>
                      }
                    </View>
                  </View>

                  <View style={styles.name_container}>
                    <View style={styles.address_input}>
                      <Text style={styles.address_input_inlinetext}>Country/Region</Text>
                      <View style={styles.input_text}>
                        <TextInput
                          style={styles.address_input_text}
                          value={f2country}
                          onChangeText={(text) => setF2country(text)}
                          onBlur={() => {
                            if (!f2country) {
                              setError2country(true)
                            } else {
                              setError2country(false)
                            }
                          }}
                        />
                        {error2country &&
                          <View>
                            <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg2({ ...errormsg2, country: !errormsg2.country })} />
                            {errormsg2.country == true ? (<Text style={styles.error_message}>Enter Country</Text>) : (<View></View>)}
                          </View>
                        }
                      </View>
                    </View>
                    <View style={styles.address_input}>
                      <Text style={styles.address_input_inlinetext}>State</Text>
                      <View style={styles.input_text}>
                        <TextInput
                          style={styles.address_input_text}
                          value={f2state}
                          onChangeText={(text) => setF2state(text)}
                          onBlur={() => {
                            if (!f2state) {
                              setError2state(true)
                            } else {
                              setError2state(false)
                            }
                          }}
                        />
                        {error2state &&
                          <View>
                            <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg2({ ...errormsg2, state: !errormsg2.state })} />
                            {errormsg2.state == true ? (<Text style={styles.error_message}>Enter State</Text>) : (<View></View>)}
                          </View>
                        }
                      </View>
                    </View>
                  </View>

                  <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>ZipCode</Text>
                    <View style={styles.input_text}>
                      <TextInput
                        style={styles.address_input_text}
                        value={f2zipCode}
                        onChangeText={(text) => setF2zipCode(text)}
                        keyboardType='numeric'
                        maxLength={6}
                        onBlur={() => {
                          if (!f2zipCode) {
                            setError2zipCode(true)
                          } else {
                            setError2zipCode(false)
                          }
                        }}
                      />
                      {error2zipCode &&
                        <View>
                          <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg2({ ...errormsg2, zip: !errormsg2.zip })} />
                          {errormsg2.zip == true ? (<Text style={styles.error_message}>Enter ZipCode</Text>) : (<View></View>)}
                        </View>
                      }
                    </View>
                  </View>

                  <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>PhoneNumber</Text>
                    <View style={styles.input_text}>
                      <TextInput
                        style={styles.address_input_text}
                        value={f2phoneNumber}
                        onChangeText={(text) => setF2phoneNumber(text)}
                        keyboardType='numeric'
                        maxLength={10}
                        onBlur={() => {
                          if (!f2phoneNumber) {
                            setError2phoneNumber(true)
                          }
                          else {
                            setError2phoneNumber(false)
                          }

                        }}
                      />
                      {error2phoneNumber &&
                        <View>
                          <MaterialIcons name="error" size={24} color="red" onPress={() => setErrormsg2({ ...errormsg2, phoneNumber: !errormsg2.phoneNumber })} />
                          {errormsg2.phoneNumber == true ? (<Text style={styles.error_message}>Enter PhoneNumber</Text>) : (<View></View>)}
                        </View>
                      }
                    </View>
                  </View>
                </View>

              </View>
            }

          </View>
        </ScrollView>
        <TouchableOpacity style={styles.footer_button} onPress={()=>handleSaveChange()}>
                        <Text style={{ fontWeight: 'bold', fontSize: hp(2) }}>Continue to Shipping</Text>
                    </TouchableOpacity>
        
      
      <BottomTab />
      </View>
     
     )}



    </View>


  )
}
const styles = StyleSheet.create({
  Subcategory: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    // backgroundColor:'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:25,
  },
  content: {
    // backgroundColor: 'pink',
    flex: 8
  },
 
  header_container: {
    flex: 1,
    // height:hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
    paddingTop: hp(2)
  },
  header_text: {
    fontSize: hp(2.1),
    color: '#2a2e7e'
  },
  // address_scrollview: {
  //   height: '70%',
  // },
  
 
  input_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10
  },

  header_conatiner: {
    marginTop: 25,
    textAlign: 'center',
    alignItems: 'center',
  },
  address_input_conatiner: {
    fontSize: 16,
    borderColor: '#959595',
    borderWidth: 2,

    borderRadius: 5,
    margin: 10
  },
  address_input: {
    fontSize: wp(4),
    borderWidth: 2,
    borderColor: '#959595',
    borderRadius: 5,
    width: wp('44%'),
    margin: 10,
  },
  contact: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2f2e7e'
  },
  name_container: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center'
    // backgroundColor:'yellow'
  },
  address_input_inlinetext: {
    position: 'absolute',
    top: -12, // Adjust to position the label accurately
    left: 20,
    zIndex: 1, // Ensure label is above the border
    backgroundColor: 'white',
    color: '#959595'
  },
  footer_button: {
    backgroundColor: '#1975d3',
    height:hp(6),
    // width:wp(50),
    // padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 10,
  },
  error_message: {
    position: 'absolute',
    width: 120,
    left: -90,
    top: 30,
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    borderTopWidth: 2,
    borderTopColor: 'red',
    paddingTop: 2,
    zIndex: 2,
    padding: 2
  },
  address_input_text: {
    // backgroundColor:"green",
    width: '80%',
    padding: 10,
  }

})

export default Address
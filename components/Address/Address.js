import React from 'react'
import { View ,StyleSheet,Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { CheckBox } from 'react-native-elements'

const Address = () => {
  return (
    <View style={styles.address}>
        <View style={styles.address_container}>
            <View style={styles.address_content}>

            <View style={styles.header_conatiner}>
               <Text style={styles.header}>Address</Text>
            </View>

            <ScrollView style={styles.address_scrollview}>

               <View style={styles.contact_information_container}>
                <Text style={styles.contact_information}>Contact Information</Text>
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Email</Text>
                    <TextInput style={styles.address_input_text}>desss@gmail.com</TextInput>
                </View>
               </View>

               <View style={styles.shipping_address_container}>
                <Text style={styles.shipping_address_header}>Shipping address</Text>

                <View style={styles.name_container}>
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>FirstName</Text>
                    <TextInput style={styles.address_input_text}>Mukesh</TextInput>
                </View>
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>LastName</Text>
                    <TextInput style={styles.address_input_text}>Raj</TextInput>
                </View>
                </View>
                
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>company</Text>
                    <TextInput style={styles.address_input_text}>Companty(Optional)</TextInput>
                </View>
                
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Address</Text>
                    <TextInput style={styles.address_input_text}>No:1/110 streetName</TextInput>
                </View>

                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Apartment,Suite,Etc (Optional)</Text>
                    <TextInput style={styles.address_input_text}>Majestic Ridge Lane</TextInput>
                </View>

                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>City</Text>
                    <TextInput  style={styles.address_input_text}>Chennai</TextInput>
                </View>

                 <View style={styles.country_state_container}>
                 <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Country/Region</Text>
                    <TextInput style={styles.address_input_text}>India</TextInput>
                </View>
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>State</Text>
                    <TextInput style={styles.address_input_text}>TamilNadu</TextInput>
                </View>
                 </View>

                 <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>ZipCode</Text>
                    <TextInput style={styles.address_input_text}>600064</TextInput>
                </View>

                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>PhoneNumber</Text>
                    <TextInput style={styles.address_input_text}>9854248786</TextInput>
                </View>

               </View>

            <View style={styles.billiing_address_container}>
                <View style={styles.billing_address_header_container}>
                    <Text style={styles.billing_address_header}>Billing Address</Text>
                    <Text style={styles.billing_address_header_text}>Select The Address That Matches Your Cards Or Payment Method.</Text>
                </View>
                
                <View style={styles.same_address_container}>
                <CheckBox
                 title='Same As Shipping'
                 checked={false}
                //  onPress={() => setChecked(!checked)}
                  />
                </View>

                <View style={styles.same_address_container}>
                <CheckBox
                 title='Use A Different Address'
                 checked={true}
                //  onPress={() => setChecked(!checked)}
                  />
                  {/* -------------------------- */}
                  
                  <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Email</Text>
                    <TextInput style={styles.address_input_text}>desss@gmail.com</TextInput>
                </View>
               </View>

               <View style={styles.shipping_address_container}>
                <Text style={styles.shipping_address_header}>Shipping address</Text>

                <View style={styles.name_container}>
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>FirstName</Text>
                    <TextInput style={styles.address_input_text}>Mukesh</TextInput>
                </View>
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>LastName</Text>
                    <TextInput style={styles.address_input_text}>Raj</TextInput>
                </View>
                </View>
                
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>company</Text>
                    <TextInput style={styles.address_input_text}>Companty(Optional)</TextInput>
                </View>
                
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Address</Text>
                    <TextInput style={styles.address_input_text}>No:1/110 streetName</TextInput>
                </View>

                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Apartment,Suite,Etc (Optional)</Text>
                    <TextInput style={styles.address_input_text}>Majestic Ridge Lane</TextInput>
                </View>

                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>City</Text>
                    <TextInput  style={styles.address_input_text}>Chennai</TextInput>
                </View>

                 <View style={styles.country_state_container}>
                 <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>Country/Region</Text>
                    <TextInput style={styles.address_input_text}>India</TextInput>
                </View>
                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>State</Text>
                    <TextInput style={styles.address_input_text}>TamilNadu</TextInput>
                </View>
                 </View>

                 <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>ZipCode</Text>
                    <TextInput style={styles.address_input_text}>600064</TextInput>
                </View>

                <View style={styles.address_input_conatiner}>
                    <Text style={styles.address_input_inlinetext}>PhoneNumber</Text>
                    <TextInput style={styles.address_input_text}>9854248786</TextInput>
                </View>




                </View>

            </View>

            </ScrollView>

            </View>
           

            <View style={styles.footer_button_conatiner}>
                <TouchableOpacity style={styles.footer_button}>
                <Text>Continue to shipping</Text>
                </TouchableOpacity>
            </View>
        </View>
       
    </View>
  )
}
const styles=StyleSheet.create({

})

export default Address
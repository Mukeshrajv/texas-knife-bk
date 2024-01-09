import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';

const Address = ({ navigation }) => {
    return (
        <View style={styles.address}>
            <View style={styles.address_container}>
                <View style={styles.address_content}>

                    <View style={styles.header_conatiner}>
                        <Text style={styles.title}>Address</Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={styles.address_scrollview}>

                        <View style={styles.contact_information_container}>
                            <Text style={styles.header}>Contact Information</Text>
                            <View style={styles.address_input_conatiner}>
                                <Text style={styles.address_input_inlinetext}>Email</Text>
                                <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text} >desss@gmail.com</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.shipping_address_container}>
                            <Text style={styles.header}>Shipping address</Text>

                            <View style={styles.name_container}>
                                <View style={styles.address_input}>
                                    <Text style={styles.address_input_inlinetext}>FirstName</Text>
                                    <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text}>Mukesh</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                </View>
                                <View style={styles.address_input}>
                                    <Text style={styles.address_input_inlinetext}>LastName</Text>
                                    <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text}>Raj</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                </View>
                            </View>

                            <View style={styles.address_input_conatiner}>
                                <Text style={styles.address_input_inlinetext}>company</Text>
                                <TextInput style={styles.address_input_text}>Companty(Optional)</TextInput>
                            </View>

                            <View style={styles.address_input_conatiner}>
                                <Text style={styles.address_input_inlinetext}>Address</Text>
                                <View style={styles.input_text}>
                                <TextInput style={styles.address_input_text}>No:1/110 streetName</TextInput>
                                <MaterialIcons name="error" size={24} color="red" />
                                </View>
                            </View>

                            <View style={styles.address_input_conatiner}>
                                <Text style={styles.address_input_inlinetext}>Apartment,Suite,Etc (Optional)</Text>
                                <TextInput style={styles.address_input_text}>Majestic Ridge Lane</TextInput>
                            </View>

                            <View style={styles.address_input_conatiner}>
                                <Text style={styles.address_input_inlinetext}>City</Text>
                                <View style={styles.input_text}>
                                <TextInput style={styles.address_input_text}>Chennai</TextInput>
                                <MaterialIcons name="error" size={24} color="red" />
                                </View>
                            </View>

                            <View style={styles.name_container}>
                                <View style={styles.address_input}>
                                    <Text style={styles.address_input_inlinetext}>Country/Region</Text>
                                    <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text}>India</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                </View>
                                <View style={styles.address_input}>
                                    <Text style={styles.address_input_inlinetext}>State</Text>
                                    <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text}>TamilNadu</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                </View>
                            </View>

                            <View style={styles.address_input_conatiner}>
                                <Text style={styles.address_input_inlinetext}>ZipCode</Text>
                                <View style={styles.input_text}>
                                <TextInput style={styles.address_input_text}>600064</TextInput>
                                <MaterialIcons name="error" size={24} color="red" />
                                </View>
                            </View>

                            <View style={styles.address_input_conatiner}>
                                <Text style={styles.address_input_inlinetext}>PhoneNumber</Text>
                                <View style={styles.input_text}>
                                <TextInput style={styles.address_input_text}>9854248786</TextInput>
                                <MaterialIcons name="error" size={24} color="red" />
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
                                    <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text}>desss@gmail.com</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                </View>
                            </View>

                            <View style={styles.shipping_address_container}>
                                <Text style={styles.shipping_address_header}>Shipping address</Text>

                                <View style={styles.name_container}>
                                    <View style={styles.address_input}>
                                        <Text style={styles.address_input_inlinetext}>FirstName</Text>
                                        <View style={styles.input_text}>
                                        <TextInput style={styles.address_input_text}>Mukesh</TextInput>
                                        <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                    </View>
                                    <View style={styles.address_input}>
                                        <Text style={styles.address_input_inlinetext}>LastName</Text>
                                        <View style={styles.input_text}>
                                        <TextInput style={styles.address_input_text}>Raj</TextInput>
                                        <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                    </View>
                                </View>

                                <View style={styles.address_input_conatiner}>
                                    <Text style={styles.address_input_inlinetext}>company</Text>
                                    
                                    <TextInput style={styles.address_input_text}>Companty(Optional)</TextInput>
                                </View>

                                <View style={styles.address_input_conatiner}>
                                    <Text style={styles.address_input_inlinetext}>Address</Text>
                                    <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text}>No:1/110 streetName</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                </View>

                                <View style={styles.address_input_conatiner}>
                                    <Text style={styles.address_input_inlinetext}>Apartment,Suite,Etc (Optional)</Text>
                                    <TextInput style={styles.address_input_text}>Majestic Ridge Lane</TextInput>
                                    
                                </View>

                                <View style={styles.address_input_conatiner}>
                                    <Text style={styles.address_input_inlinetext}>City</Text>
                                    <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text}>Chennai</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                </View>

                                <View style={styles.name_container}>
                                    <View style={styles.address_input}>
                                        <Text style={styles.address_input_inlinetext}>Country/Region</Text>
                                        <View style={styles.input_text}>
                                        <TextInput style={styles.address_input_text}>India</TextInput>
                                        <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                    </View>
                                    <View style={styles.address_input}>
                                        <Text style={styles.address_input_inlinetext}>State</Text>
                                        <View style={styles.input_text}>
                                        <TextInput style={styles.address_input_text}>TamilNadu</TextInput>
                                        <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                    </View>
                                </View>

                                <View style={styles.address_input_conatiner}>
                                    <Text style={styles.address_input_inlinetext}>ZipCode</Text>
                                    <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text}>600064</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                </View>

                                <View style={styles.address_input_conatiner}>
                                    <Text style={styles.address_input_inlinetext}>PhoneNumber</Text>
                                    <View style={styles.input_text}>
                                    <TextInput style={styles.address_input_text}>9854248786</TextInput>
                                    <MaterialIcons name="error" size={24} color="red" />
                                </View>
                                </View>
                            </View>

                        </View>

                    </ScrollView>

                </View>


                <View style={styles.footer_button_conatiner}>
                    <TouchableOpacity style={styles.footer_button} onPress={()=> navigation.navigate("shipping")}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Continue to Shipping</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    address: {
        flex: 1,
        // width: '100%',
        // height: '100%',
        backgroundColor: 'white'
    },
    address_scrollview: {
        height: '84%',
    },
    address_container: {
        margin: 20,

    },
    input_text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        padding: 10,
        borderRadius: 5,
        margin: 10
    },
    address_input: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#959595',
        // borderColor: '#eee',
        borderRadius: 5,
        width: '44%',
        margin: 10,
        padding: 10,
    },
    header: {
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
        width: '100%',
        flexDirection: 'row',
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
    footer_button_conatiner: {
        backgroundColor: '#1975d3',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        margin: 10,
    },

})

export default Address
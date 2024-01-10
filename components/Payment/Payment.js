import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import Tab from "../../Tab/Tab";
import { MaterialIcons } from "@expo/vector-icons";
import DatePicker from "react-native-datepicker";

const Payment = () => {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioPress = (radioId) => {
    setSelectedRadio(radioId);
  };
  return (
    <View style={styles.payment}>
      <View style={styles.payment_container}>
        {/* <View style={styles.headerpluscontent}> */}
        <View style={styles.payment_header_container}>
          <Text style={styles.payment_header}>Payment</Text>
        </View>
        <View style={styles.payment_card_container}>
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            source={require("../../assets/images/card_img.png")}
          />
        </View>
        <View style={styles.payment_method_container}>
          <View style={styles.payment_method_header_container}>
            <Text style={styles.payment_method_header}>All Transaction</Text>
          </View>
          <View style={styles.alltransaction_container}>
            {/* .................. */}
            <View>
              <TouchableOpacity
                onPress={() => handleRadioPress(1)}
                style={styles.radioContainer}
              >
                <View
                  style={[styles.radio, { padding: 5, borderColor: "#2a2e7e" }]}
                >
                  <View
                    style={[
                      styles.radio,
                      {
                        backgroundColor:
                          selectedRadio === 1 ? "#2a2e7e" : "white",
                        position: "absolute",
                        width: 10,
                        height: 10,
                        top: 4,
                        left: 4,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.transaction_headers}>Credit Card</Text>
              </TouchableOpacity>
              {selectedRadio === 1 && (
                <View style={styles.creditcard_container}>
                  <View style={styles.creditcard}>
                    <View style={styles.input_border}>
                      <TextInput style={styles.input} placeholder="Card Name" />
                      <View style={styles.errorcontainer}>
                        <MaterialIcons name="error" size={24} color="red" />
                      </View>
                    </View>

                    <View style={styles.input_border}>
                      <TextInput
                        style={styles.input}
                        placeholder="Credit Name"
                      />
                      <View style={styles.errorcontainer}>
                        <MaterialIcons name="error" size={24} color="red" />
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        columnGap: 10,
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={styles.input_border_date}>
                        <TextInput
                          style={styles.input}
                          placeholder="Date"
                          type={"date"}
                          options={{
                            format: "MM/DD/YYYY",
                          }}
                        />
                        <View style={styles.errorcontainer}>
                          <MaterialIcons name="error" size={24} color="red" />
                        </View>
                      </View>
                      <View style={styles.input_border_date}>
                        <TextInput
                          style={styles.input}
                          placeholder="Security"
                        />
                        <View style={styles.errorcontainer}>
                          <MaterialIcons name="error" size={24} color="red" />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}

              <TouchableOpacity
                onPress={() => handleRadioPress(2)}
                style={styles.radioContainer}
              >
                <View
                  style={[styles.radio, { padding: 5, borderColor: "#2a2e7e" }]}
                >
                  <View
                    style={[
                      styles.radio,
                      {
                        backgroundColor:
                          selectedRadio === 2 ? "#2a2e7e" : "white",
                        position: "absolute",
                        width: 10,
                        height: 10,
                        top: 4,
                        left: 4,
                      },
                    ]}
                  />
                </View>

                <Text style={styles.transaction_headers}>Money Order</Text>
              </TouchableOpacity>
              {selectedRadio === 2 && (
                <View style={{width:"90%",marginLeft:20}}>

               <View style={styles.input_border}>
                 <TextInput style={styles.input}
                  placeholder="Money Order Number"
                   />
                  <MaterialIcons name="error" size={24} color="red" />
                </View>
                 </View>
           
              )}

              <TouchableOpacity
                onPress={() => handleRadioPress(3)}
                style={styles.radioContainer}
              >
                <View
                  style={[styles.radio, { padding: 5, borderColor: "#2a2e7e" }]}
                >
                  <View
                    style={[
                      styles.radio,
                      {
                        backgroundColor:
                          selectedRadio === 3 ? "#2a2e7e" : "white",
                        position: "absolute",
                        width: 10,
                        height: 10,
                        top: 4,
                        left: 4,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.transaction_headers}>Cheque</Text>
              </TouchableOpacity>
              {selectedRadio === 3 && (
                <View style={{width:"90%",marginLeft:20}}>

                <View style={styles.input_border}>
                  <TextInput style={styles.input}
                   placeholder="Cheque Number"
                    />
                   <MaterialIcons name="error" size={24} color="red" />
                 </View>
                  </View>
              )}
            </View>
            {/* ................... */}
          </View>
        </View>
      </View>
      {/* </View> */}
      <View style={styles.payment_footer_container}>
        <View style={styles.payment_footer_button_container}>
          <TouchableOpacity
            style={styles.payment_footer_button}
            onPress={() => navigation.navigate("payment")}
          >
            <Text style={styles.payment_footer_button_text}>
              Continue To payment
            </Text>
          </TouchableOpacity>
        </View>
        <Tab />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 8,
  },
  payment_footer_container: {

  },
  payment_footer_button_container: {
  },
  payment_footer_button: {
    backgroundColor: "#1975d3",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 10,
  },
  payment_footer_button_text: {
    color: "white",
  },
  payment: {
    width: "100%",
    height: "90%",
    justifyContent: "space-between",
  },
  payment_container: {},
  payment_header_container: {
    padding: 10,
    marginTop: 30,
  },
  payment_header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2a2e7e",
    textAlign: "center",
    padding: 5,
  },
  payment_card_container: {
    width: "100%",
    height: 200,
    padding: 5,
  },
  payment_method_container: {
  },
  payment_method_header_container: {
    margin: 10,
  },
  payment_method_header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  alltransaction_container: {
    padding: 10,
  },
  transaction_headers: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2a2e7e",
  },
  creditcard_container: {
    alignItems: "center",
    marginBottom:10
  },
  creditcard: {
    width: 300,
  },
  input_border: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#8c8c8c",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "90%",
  },
  input_border_date: {
    flexDirection: "row",
    width: "45%",
    borderWidth: 1,
    borderColor: "#8c8c8c",
    paddingRight:15,
    alignItems:'center'
  },
});
export default Payment;

import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  ToastAndroid ,Alert
} from "react-native";
import ProductTotal from "../Sub-components/ProductTotal";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { getCartReload } from "../../Slice/ProductDetailsSlice";
import BottomTab from "../Sub-components/ButtomTab/BottomTab";

const Checkout = ({navigation}) => {
 
  const dispatch=useDispatch();

  const [tax, setTax] = useState([]);
  const [comment, setComment] = useState("");

  const website_id = encodeURIComponent(
    useSelector((state) => state.login.logindata.website_id)
  );
  const customer_id = encodeURIComponent(
    useSelector((state) => state.login.logindata.id)
  );
  const customer_email = encodeURIComponent(
    useSelector((state) => state.login.logindata.email)
  );
  const session_id = encodeURIComponent(123456);

  const billing_firstName = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.firstName)
  );
  const billing_lastName = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.lastName)
  );
  const billing_address1 = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.address)
  );
  const billing_address2 = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.apartment)
  );
  const billing_City = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.city)
  );
  const billing_State = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.state)
  );
  const billing_zipCode = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.zipCode)
  );
  const billing_Country = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.country)
  );
  const billing_phoneNumber = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.phoneNumber)
  );
  const billing_email = encodeURIComponent(
    useSelector((state) => state.payment.newBillingAddress.email)
  );

  const payment_typr = encodeURIComponent(
    useSelector((state) => state.payment.paymentData.name)
  );
  const payment_number = encodeURIComponent(
    useSelector((state) => state.payment.paymentData.number)
  );

  const comments = encodeURIComponent(comment);

  const shipping_firstName = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.firstName)
  );
  const shipping_lastName = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.lastName)
  );
  const shipping_address1 = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.address)
  );
  const shipping_address2 = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.apartment)
  );
  const shipping_City = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.city)
  );
  const shipping_State = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.state)
  );
  const shipping_zipCode = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.zipCode)
  );
  const shipping_Country = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.country)
  );
  const shipping_phoneNumber = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.phoneNumber)
  );
  const shipping_email = encodeURIComponent(
    useSelector((state) => state.payment.newShippingAddress.email)
  );
  const product_ids = encodeURIComponent(tax.product_ids_exact);
  const quantitys = encodeURIComponent(tax.quantity_exact);
  const product_names = encodeURIComponent(tax.product_names_exact);
  const product_skus = encodeURIComponent(tax.product_skus_exact);
  const product_pricess = encodeURIComponent(tax.product_pricess_exact);
  const discount = encodeURIComponent(tax.discount_exact);
  const discount_price = encodeURIComponent(tax.discount_price_exact);
  const base_price = encodeURIComponent(tax.base_price_exact);
  const price = encodeURIComponent(tax.price_exact);
  const taxable = encodeURIComponent(tax.taxable_exact);
  const tax_percentage = encodeURIComponent(tax.tax_percentage_exact);

  const taxable_amt = encodeURIComponent(useSelector((state)=>state.cartdata.netAmount));
  const ship_amt = encodeURIComponent(useSelector((state)=>state.cartdata.shippingTax));
  const total = encodeURIComponent(useSelector((state)=>state.cartdata.overAllTotal));
  const net_amount = encodeURIComponent(useSelector((state)=>state.cartdata.overAllTotal));

  // const shipping_Tax=encodeURIComponent(useSelector((state)=>state.cartdata.shippingTax));
  // const TaxAmount=encodeURIComponent(useSelector((state)=>state.cartdata.netAmount));
  // const TotalAmount=encodeURIComponent(useSelector((state)=>state.cartdata.overAllTotal));
  // const shippment_name=encodeURIComponent(useSelector((state)=>state.cartdata.taxFullData.name));
  // const shippment_tax=encodeURIComponent(useSelector((state)=>state.cartdata.taxFullData.price));
  // const billCompany=encodeURIComponent(useSelector((state)=>state.payment.newShippingAddress.companyName));
  // navigation.navigate("checkout")
  const checkoutButton = () => {
    const apiUrl = 'https://www.texasknife.com/dynamic/texasknifeapi.php?action=front_counter_insertion&website_id='+website_id+'&customer_id='+customer_id+'&customer_email='+customer_email+'&session_id='+session_id+'&bill_f_name='+billing_firstName+'&bill_l_name='+billing_lastName+'&bill_address1='+billing_address1+'&bill_address2='+billing_address2+'&bill_town_city='+billing_City+'&bill_state_region1='+billing_State+'&bill_zipcode='+billing_zipCode+'&bill_country='+billing_zipCode+'&bill_phone='+billing_phoneNumber+'&bill_emaill='+billing_email+'&payment_type='+payment_typr+'&comments='+comments+'&number='+payment_number+'&ship_f_name='+shipping_firstName+'&ship_l_name='+shipping_lastName+'&ship_address1='+shipping_address1+'&ship_address2='+shipping_address2+'&ship_town_city='+shipping_City+'&ship_state='+shipping_State+'&ship_zipcode='+shipping_zipCode+'&ship_country='+shipping_Country+'&ship_phone='+shipping_phoneNumber+'&ship_email='+shipping_email+'&product_id='+product_ids+'&quantity='+quantitys+'&product_names='+product_names+'&product_skus='+product_skus+'&product_pricess='+product_pricess+'&discount='+discount+'&discount_price='+discount_price+'&base_price='+base_price+'&price='+price+'&taxable='+taxable+'&tax_percentage='+tax_percentage+'&taxable_amt='+taxable_amt+'&ship_amt='+ship_amt+'&total='+total+'&net_amount='+net_amount
   
    // console.log("checkout API : "+apiUrl);
    const fetchData = async () => {
      try{
      const response = await axios.get(apiUrl);
      if (response) {
       
        // console.log(response.data.data[0].msg);
       
        if (Platform.OS === 'android') {
          ToastAndroid.show(response.data.data[0].msg, ToastAndroid.SHORT);
        } 
        else if (Platform.OS === 'ios') {
         Alert.alert(response.data.data[0].msg)
        }  
        dispatch(getCartReload(true))
        navigation.navigate('tab')
      }
    }catch(error){
      console.log("checkout page final api call error")
    }
    };
    fetchData();
  };
  
 //  -----------------------------------
 const home=()=>{
  navigation.navigate('Home')
}
const cart=()=>{
  navigation.navigate('cart')
}
const profile=()=>{
  navigation.navigate('Profile')
}

  useEffect(() => {
    const apiUrl =
      "https://www.texasknife.com/dynamic/texasknifeapi.php?action=final_tax_rate&store_id=1&customer_id=" +
      customer_id;
    const fetchApi = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response) {
          setTax(response.data.data[0]);
          // console.log(response.data.data[0]);
         
        }
      } catch (error) {
        console.log("taxable amount and discount api not working");
      }
    };
    fetchApi();
  }, []);
  return (
    <View style={styles.checkout}>
      <View style={styles.checkout_container}>
        <View style={styles.checkout_header_container}>
          <Text style={styles.checkout_header}>Checkout</Text>
        </View>
        {/* -------------------------- */}
        <ScrollView>
          <ProductTotal />

          <View style={styles.checkout_middle_container}>
            <View style={styles.contact_container}>
              <Text style={styles.contact}>Contact</Text>
              <Text style={styles.contact_value}>
                {useSelector((state) => state.payment.newShippingAddress.email)}
              </Text>
            </View>

            <View style={styles.shippingto_container}>
              <Text style={styles.shippingto}>Shipping To</Text>
              <View style={styles.shippingto_address_container}>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newShippingAddress.firstName
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newShippingAddress.lastName
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newShippingAddress.address
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newShippingAddress.apartment
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newShippingAddress.state
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newShippingAddress.city
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newShippingAddress.country
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newShippingAddress.zipCode
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.method_container}>
              <Text style={styles.method}>Method</Text>
              <Text style={styles.method_value}>
                {useSelector((state) => state.cartdata.taxFullData.name)} -{" "}
                {useSelector((state) => state.cartdata.taxFullData.price)}
              </Text>
            </View>

            <View style={styles.shippingto_container}>
              <Text style={styles.shippingto}>Billing To</Text>
              <View style={styles.shippingto_address_container}>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newBillingAddress.firstName
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newBillingAddress.lastName
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newBillingAddress.address
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newBillingAddress.apartment
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newBillingAddress.state
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector((state) => state.payment.newBillingAddress.city)}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newBillingAddress.country
                  )}
                </Text>
                <Text style={styles.shippingto_address}>
                  {useSelector(
                    (state) => state.payment.newBillingAddress.zipCode
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.paywith_container}>
              <Text style={styles.paywith}>paywith</Text>
              <Text style={styles.paywith_value}>Money Order</Text>
            </View>

            <View style={styles.command_container}>
              <TextInput
                style={styles.command}
                placeholder="comment"
                value={comment}
                onChangeText={(text) => setComment(text)}
              />
            </View>
          </View>
        </ScrollView>
        {/* ------------------------------- */}

        <View style={styles.checkout_footer_container}>
          <View style={styles.checkout_footer_button_container}>
            <TouchableOpacity
              style={styles.checkout_footer_button}
              onPress={() => checkoutButton()}
            >
              <Text style={styles.checkout_footer_button_text}>
                Place Order
              </Text>
            </TouchableOpacity>
            <BottomTab home={home} cart={cart} profile={profile}/>
          </View>
          {/* <Tab/> */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  checkout: {
    width: "100%",
    height: "100%",
  },
  checkout_container: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  checkout_header_container: {
    marginTop: 25,
    textAlign: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  checkout_header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2a2e7e",
  },
  checkout_middle_container: {
    backgroundColor: "#ffffff",
    margin: 10,
    padding: 5,
    marginBottom: 20,
    paddingBottom: 20,
    borderRadius: 15,
    // ...Platform.select({
    //   android: {
    //     shadowColor: 'red',
    //     elevation: 10,
    // },
    // ios: {
    //     shadowColor: '#171717',
    //     shadowOffset: { width: 2, height: 4 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 3,
    // }
    // })
  },
  contact_container: {
    // backgroundColor:'yellow',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  contact: {
    fontSize: 14,
    fontWeight: "bold",
  },
  contact_value: {
    fontSize: 14,
    width: 160,
    textAlign: "right",
    color: "#2a2e7e",
  },
  shippingto_container: {
    // backgroundColor:'yellow',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  shippingto: {
    fontSize: 14,
    fontWeight: "bold",
  },
  shippingto_address_container: {
    // backgroundColor:'red',
    width: 160,
  },
  shippingto_address: {
    fontSize: 14,
    textAlign: "right",
    color: "#2a2e7e",
  },
  method_container: {
    // backgroundColor:'orange',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  method: {
    fontSize: 14,
    fontWeight: "bold",
  },
  method_value: {
    fontSize: 14,
    width: 160,
    textAlign: "right",
    color: "#2a2e7e",
  },
  paywith_container: {
    // backgroundColor:'green',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
    borderTopWidth: 1,
  },
  paywith: {
    fontSize: 14,
    fontWeight: "bold",
  },
  paywith_value: {
    fontSize: 14,
    width: 160,
    textAlign: "right",
    color: "#2a2e7e",
  },
  command_container: {
    marginTop: 5,
  },
  command: {
    //  backgroundColor:"white",
    borderWidth: 2,
    borderColor: "#8c8c8c",
    padding: 5,
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    textTransform: "capitalize",
    borderRadius: 5,
  },
  checkout_footer_container: {},
  checkout_footer_button_container: {},
  checkout_footer_button: {
    backgroundColor: "#1975d3",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 10,
  },
  checkout_footer_button_text: {
    color: "white",
    fontWeight: "bold",
  },
});
export default Checkout;

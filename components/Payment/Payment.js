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
import { getPaymentData } from "../../Slice/paymentSlice";
import { useDispatch } from "react-redux";

const Payment = ({navigation}) => {
  const dispatch=useDispatch();
  const [selectedRadio, setSelectedRadio] = useState(null);

  const[cardNumber,setCardNumber]=useState('');
  const[cardName,setCardName]=useState('');
  const [date, setDate] = useState('');
  const[cvn,setCvn]=useState('');
  const[moneyOrder,setMoneyOrder]=useState('');
  const[cheque,setCheque]=useState('');

  const[error,setError]=useState({
    cardNumberErr:false,
    cardNameErr:false,
    dateErr:false,
    cvnErr:false,
    moneyOrderErr:false,
    chequeErr:false
  })

const [cardNumberIcon,setCardNumberIcon]=useState(false);
const[cardNameIcon,setCardNameIcon]=useState(false);
const[cardDateIcon,setCardDateIcon]=useState(false);
const[cardCvnIcon,setCardCvnIcon]=useState(false);
const[MoneyOrderIcon,setMoneyOrderIcon]=useState(false);
const[chequeIcon,setChequeIcon]=useState(false);

//  const[errorIcon,setErrorIcon]=useState({
//   cardNumberErr:false,
//   cardNameErr:false,
//   dateErr:false,
//   cvnErr:false,
//   moneyOrderErr:false,
//   chequeErr:false
//  })

 const checkCardNumber=()=>{
  if(!cardNumber){
    setCardNumberIcon(true)
    return true;
   }else if(cardNumber.length<16){
    setCardNumberIcon(true)
    return true;
    return true;
   }else{
    setCardNumberIcon(false)
    return false;
   }
 }
 const checkCardName=()=>{
  if(!cardName){
    setCardNameIcon(true)
    return true;
   }else{
    setCardNameIcon(false)
    return false;
   }
 }

 const checkCardDate=()=>{
  if(!date){
    setCardDateIcon(true)
    return true;
  }else if(date.length<4){
    setCardDateIcon(true)
    return true;
  }else{
    setCardDateIcon(false)
    return false;
  }
 }
 const checkCardCvn=()=>{
  if(!cvn){
    setCardCvnIcon(true)
    return true;
  }else if(cvn.length<3){
    setCardCvnIcon(true)
    return true;
  }else{
    setCardCvnIcon(false)
    return false;
  }
 }

 const checkMoneyorder=()=>{
  if(!moneyOrder){
    setMoneyOrderIcon(true)
    return true;
  }else{
    setMoneyOrderIcon(false)
    return false;
  }
 } 

 const CheckCheque=()=>{
  if(!cheque){
    setChequeIcon(true);
    return true;
  }else{
    setChequeIcon(false);
    return false;
  }
 }

const validate=()=>{
  if(selectedRadio==1){
    checkCardNumber();
    checkCardName();
    checkCardDate();
    checkCardCvn();
    if(checkCardNumber()==false&&checkCardName()==false&&checkCardDate()==false&&checkCardCvn()==false){
      // console.log("credit data is getten")
      const cardData={
        name:'card',
        number:cardNumber,
        cardname:cardName,
        date:date,
        cvn:cvn,
      }
      dispatch(getPaymentData(cardData))
      navigation.navigate("checkout")
    }
    // console.log("---------------")
    // console.log(checkCardNumber());
    // console.log(checkCardName());
    // console.log(checkCardDate());
    // console.log(checkCardCvn());
  }else if(selectedRadio==2){
    checkMoneyorder();
    if(checkMoneyorder()==false){
      // console.log("moneyOrder is getting")
      const moneyOrderData={
        name:'moneyorder',
        number:moneyOrder
      }
      dispatch(getPaymentData(moneyOrderData))
      navigation.navigate("checkout")
    }
  }else{
    CheckCheque();
    if(CheckCheque()==false){
      // console.log("cheque data is getting")
      const chequeData={
        name:'cheque',
        number:cheque
      }
      dispatch(getPaymentData(chequeData))
      navigation.navigate("checkout")
    }
  }



}

const continueToPayment=()=>{
  validate()
  // navigation.navigate("payment")
}

  const handleDateChange = (inputDate) => {
    // Validate and format the date as mm/yy
    const formattedDate = inputDate.replace(/[^0-9]/g, '').slice(0, 4);

    if (formattedDate.length >= 2) {
      const month = parseInt(formattedDate.slice(0, 2), 10);
      const validMonth = Math.min(Math.max(month, 1), 12); // Ensure month is between 1 and 12
      setDate(`${validMonth}/${formattedDate.slice(2)}`);
    } else {
      setDate(formattedDate);
    }
  };

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
                      <TextInput style={styles.input}
                       placeholder="Card Number" 
                       maxLength={16}
                       keyboardType="numeric" 
                       value={cardNumber}
                       onChangeText={(text)=>setCardNumber(text)}
                       onBlur={checkCardNumber}
                       />
                       {cardNumberIcon&&
                       <View style={styles.errorcontainer}>
                       <MaterialIcons style={styles.error} name="error" size={24} color="red" onPress={()=>setError({...error,cardNumberErr:!error.cardNumberErr})} />
                      {error.cardNumberErr && <Text style={styles.error_message}>Invalid Number </Text>} 
                     </View>
                       }
                      
                    </View>

                    <View style={styles.input_border}>
                      <TextInput
                        style={styles.input}
                        placeholder="Card Holder Name"
                        value={cardName}
                        onChangeText={(text)=>setCardName(text)}
                        onBlur={checkCardName}
                      />
                      {cardNameIcon&&
                       <View style={styles.errorcontainer}>
                       <MaterialIcons style={styles.error} name="error" size={24} color="red" onPress={()=>setError({...error,cardNameErr:!error.cardNameErr})} />
                        {error.cardNameErr && <Text style={styles.error_message}>Invalid Name </Text>} 
                       </View>
                      }
                     
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
                            placeholder="mm/yy"
                            keyboardType="numeric"
                            value={date}
                            onChangeText={handleDateChange}
                            maxLength={5} // Limit the input length to 5 characters (mm/yy)
                            onBlur={checkCardDate}
                        />
                        {cardDateIcon&&
                        <View style={styles.errorcontainer}>
                        <MaterialIcons style={styles.error} name="error" size={24} color="red" onPress={()=>setError({...error,dateErr:!error.dateErr})} />
                       {error.dateErr && <Text style={styles.error_message}>Enter Date </Text>} 
                        </View>
                        }
                        
                      </View>
                      <View style={styles.input_border_date}>
                        <TextInput
                          style={styles.input}
                          placeholder="cvn"
                          maxLength={3} 
                          value={cvn}
                          onChangeText={(text)=>setCvn(text)}
                          onBlur={checkCardCvn}
                        />
                        {cardCvnIcon&&
                         <View style={styles.errorcontainer}>
                         <MaterialIcons style={styles.error} name="error" size={24} color="red" onPress={()=>setError({...error,cvnErr:!error.cvnErr})} />
                        {error.cvnErr && <Text style={styles.error_message}>Invalid CVN Number</Text>} 
                         </View>
                        }
                       
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
                  value={moneyOrder}
                  onChangeText={(text)=>setMoneyOrder(text)}
                  onBlur={checkMoneyorder}
                   />
                   {MoneyOrderIcon&&
                     <View style={styles.errorcontainer}>
                     <MaterialIcons style={styles.error} name="error" size={24} color="red" onPress={()=>setError({...error,moneyOrderErr:!error.moneyOrderErr})} />
                    {error.moneyOrderErr && <Text style={styles.error_message}>Invalid MoneyOrder Number</Text>} 
                     </View>
                   }
               
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
                   value={cheque}
                   onChangeText={(text)=>setCheque(text)}
                   onBlur={CheckCheque}
                    />
                    {chequeIcon&&
                     <View style={styles.errorcontainer}>
                     <MaterialIcons style={styles.error} name="error" size={24} color="red" onPress={()=>setError({...error,chequeErr:!error.chequeErr})} />
                    {error.chequeErr && <Text style={styles.error_message}>Invalid Cheque Number</Text>} 
                     </View>
                    }
                  
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
            onPress={() => continueToPayment()}
          >
            <Text style={styles.payment_footer_button_text}>
              Continue To payment
            </Text>
          </TouchableOpacity>
        </View>
      <Tab/>
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
    marginBottom:10,
    zIndex:-1
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
    alignItems:'center',
    zIndex:-2,
  },
  errorcontainer:{
    position:'relative'
  },
  error:{
    paddingRight:5
  },
  error_message:{
  position:'absolute',
  width:120,
  left:-90,
  top:30,
  backgroundColor:'black',
  textAlign:'center',
  color:'white',
  fontSize:12,
  borderTopWidth:2,
  borderTopColor:'red',
  paddingTop:2,
  padding:2,
  zIndex:5
},
});
export default Payment;

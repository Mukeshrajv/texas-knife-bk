import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet ,Platform} from "react-native";
import { useSelector } from "react-redux";
const ProductTotal = () => {
  // const [cartData,setCartData]=useState([])
  // useEffect(()=>{
  //   setCartData(useSelector((state)=>state.cartdata.cartList))
  // })
  // console.log("cart list" + useSelector((state) => state.cartdata.cartList));

  return (
    <View style={styles.shipping_item_card_container}>
      <View>
        {useSelector((state) => state.cartdata.cartList).map((item) => (
          <View style={styles.shipping_item_card} key={item.id}>
            <View style={styles.image_container}>
              <Image
                style={{ width: "100%", height: "100%" ,resizeMode:'stretch'}}
                source={{uri:item.product_image }}
              />
            </View>

            <View style={styles.card_detail_container}>
              <View style={styles.card_title_container}>
                <Text style={styles.card_title}>
                  {item.product_name}
                </Text>
              </View>
              <Text style={styles.card_price}>{item.quantity} * {item.product_price}</Text>
              <Text style={styles.card_total}>Total Price:${item.total} </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.shipping_total_conatiner}>
        <View style={styles.shipping_subtotal_container}>
          <Text style={styles.total_text}>Sub Total</Text>
          <Text style={styles.total_amount_text}>$ {useSelector((state)=>state.cartdata.carttotal)}</Text>
        </View>
        <View style={styles.shipping_subtotal_container}>
          <Text style={styles.total_text}>Shipping</Text>
          <Text style={styles.total_amount_text}>$ {useSelector((state)=>state.cartdata.shippingTax)}</Text>
        </View>
        <View style={styles.shipping_subtotal_container}>
          <Text style={styles.total_text}>Estimated Sales Tax</Text>
          <Text style={styles.total_amount_text}>$ {useSelector((state)=>state.cartdata.netAmount)}</Text>
        </View>
        <View style={styles.shipping_subtotal_container_Total}>
          <Text style={styles.total_text}>Total</Text>
          <Text style={styles.total_amount_text}>$ {useSelector((state)=>state.cartdata.overAllTotal)}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shipping_item_card_container: {
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 10,
    borderRadius: 15,
    ...Platform.select({
      android: {
        shadowColor: "#000",
        elevation: 5,
      },
      ios: {
        shadowColor: "#171717",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
    }),
  },
  shipping_item_card: {
    backgroundColor: "#f2f2f7",
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  image_container: {
    width: 80,
    height: 80,
    // backgroundColor:'red'
  },
  card_detail_container: {
    width: 220,
    height: 80,
  },
  card_title_container: {
    height: 40,
    overflow: "hidden",
  },
  card_title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  card_price: {
    fontSize: 15,
    marginTop: 2,
  },
  card_total: {
    marginTop: 5,
    fontSize: 16,
  },
  shipping_total_conatiner: {
    // backgroundColor:'pink',
    borderTopWidth: 2,
  },
  shipping_subtotal_container: {
    // backgroundColor:'lightgreen',
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  total_text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  shipping_subtotal_container_Total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTopWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },
  total_amount_text: {
    fontSize: 16,
    paddingRight: 5,
  },
});
export default ProductTotal;

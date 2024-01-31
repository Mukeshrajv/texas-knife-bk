import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Profile = ({ navigation }) => {
  return (
    <View style={styles.Subcategory}>

      <View style={styles.header}>
        <View style={styles.logout_container}>
          <View style={styles.logout_btn_opacity}>
            <TouchableOpacity >
              <Text style={styles.logout_btn} onPress={() => navigation.navigate('login')}>Logout</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.profile_header_container}>
          <Text style={styles.profile_header} >Profile</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.image_container}>
          <Image style={{ width: 100, height: 100 }} source={require('../assets/images/texaslogo.png')} />
        </View>
        <View style={styles.profile_user_container}>
          <View style={styles.profile_user}>
            <View style={styles.username_container}>
              <View style={styles.logo_container}><Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('../assets/images/user.png')} /></View>
              <View>
                <Text style={styles.username_header}>Username</Text>
                <Text style={styles.username}>{useSelector((state) => state.login.logindata.user_name)}</Text>
              </View>
            </View>

            <View style={styles.email_container}>
              <View style={styles.logo_container}><Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('../assets/images/email.png')} /></View>
              <View>
                <Text style={styles.email_header}>Email</Text>
                <Text style={styles.email}>{useSelector((state) => state.login.logindata.email)}</Text>
              </View>
            </View>
          </View>
          <View style={styles.order_btn_container}>
            <TouchableOpacity onPress={() => navigation.navigate('MyOrder')} style={styles.order_btn_oppacity}>
              <Text style={styles.order_btn}>My Orders</Text>
            </TouchableOpacity>
          </View>

          <View>

          </View>
        </View>
      </View>

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
    flex: 1.5,
    // justifyContent:'center',
    // alignItems:'center',
  },
  logout_container: {
    alignItems: "flex-end",
  },
  logout_btn_opacity: {
    width: wp(30)
  },
  logout_btn: {
    textAlign: 'right',
    fontSize: wp(4.5),
    marginTop: 45,
    marginRight: 15,
    fontWeight: '500',
    color: '#1975d3',

  },
  profile_header_container: {
    // backgroundColor:"green",
    // marginTop:20,
  },
  profile_header: {
    fontSize: wp(5),
    fontWeight: '500',
    textAlign: 'center'
  },
  content: {
    // backgroundColor: 'pink',
    flex: 8
  },
  image_container: {
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  profile_user_container: {
    margin: 10,
    padding: 5,
    // backgroundColor: 'orange'
  },
  // profile_user:{
  //   alignItems:'center'
  // },
  username_container: {
    flexDirection: 'row',
    // backgroundColor:'yellow',
    marginBottom: 15
  },
  username_header: {
    fontSize: wp(5)
  },
  username: {
    fontSize: wp(4),
    color: '#2a2e7e',
    fontWeight: '500',
  },
  email_container: {
    flexDirection: 'row',
    // backgroundColor:'yellow',
  },
  email_header: {
    fontSize: wp(5)
  },
  email: {
    fontSize: wp(4),
    color: '#2a2e7e',
    fontWeight: '500',
  },
  logo_container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  order_btn_container: {
    // backgroundColor:'yellow',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    padding: 10,
    alignItems: 'center'
  },
  order_btn_oppacity: {
    width: wp('40%'),
    height:wp('10%'),
    backgroundColor: '#1975d3',
    justifyContent:'center',
    alignItems:'center',
    // padding: 10,
    borderRadius: 50
  },
  order_btn: {
    color: '#ffffff',
    fontSize: wp(4),
    fontWeight: '500',
    textAlign: 'center',
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
  }
})


export default Profile
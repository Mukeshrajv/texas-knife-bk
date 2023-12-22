import React from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import { useSelector } from 'react-redux'

const Profile = () => {
  return (
   <View style={styles.profile}>

    <View style={styles.profile_container}>
    
  <View style={styles.logout_container}>
    <View style={styles.logout_btn_opacity}>
    <TouchableOpacity >
       <Text style={styles.logout_btn}>Logout</Text>
    </TouchableOpacity>
    </View>
   
  </View>
   
    

     <View style={styles.profile_header_container}>
      <Text style={styles.profile_header}>Profile</Text>
     </View>

     <View style={styles.image_container}>
      <Image style={{width:100,height:100}} source={require('../assets/images/texaslogo.png')}/>
     </View>

      <View style={styles.profile_user_container}>

       <View style={styles.username_container}>
         <View style={styles.logo_container}><Image style={{width:30,height:30,marginRight:10}} source={require('../assets/images/user.png')}/></View>
         <View>
          <Text style={styles.username_header}>Username</Text>
          <Text style={styles.username}>{useSelector((state)=>state.login.logindata.name)}</Text>
         </View>
       </View>

       <View style={styles.email_container}>
       <View  style={styles.logo_container }><Image style={{width:30,height:30,marginRight:10}} source={require('../assets/images/email.png')}/></View>
         <View>
          <Text style={styles.email_header}>Email</Text>
          <Text style={styles.email}>{useSelector((state)=>state.login.logindata.email)}</Text>
         </View>
       </View>
       
       <View style={styles.order_btn_container}>
        <TouchableOpacity style={styles.order_btn_oppacity}>
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

const styles=StyleSheet.create({
profile:{
width:'100%',
height:'100%'
},
profile_container:{
// backgroundColor:"skyblue",
marginTop:50
},
profile_header_container:{
// backgroundColor:"green",
marginTop:10,

},
profile_header:{
  fontSize:20,
  fontWeight:'500',
  textAlign:'center'
},
logout_container:{
  alignItems:"flex-end"
},
logout_btn_opacity:{
 width:80
},
logout_btn:{
  textAlign:'right',
  fontSize:16,
  marginRight:15,
  fontWeight:'500',
  color:'#1975d3',
 
},
image_container:{
// backgroundColor:'yellow',
justifyContent:'center',
alignItems:'center',
padding:30
},
profile_user_container:{
margin:10,
padding:5,
// backgroundColor:'orange'
},
username_container:{
flexDirection:'row',
// backgroundColor:'yellow',
marginBottom:15
},
username_header:{
fontSize:12
},
username:{
fontSize:16,
color:'#2a2e7e',
fontWeight:'500',
},
email_container:{
  flexDirection:'row',
  // backgroundColor:'yellow',
},
email_header:{
fontSize:12
},
email:{
fontSize:16,
color:'#2a2e7e',
fontWeight:'500',
},
logo_container:{
alignItems:'center',
justifyContent:'center'
},
order_btn_container:{
  // backgroundColor:'yellow',
  marginLeft:5,
  marginRight:5,
  marginTop:30,
  padding:10,
  alignItems:'center'
},
order_btn_oppacity:{
width:150,
backgroundColor:'#1975d3',

padding:10,
borderRadius:50
},
order_btn:{
  color:'#ffffff',
  fontSize:16,
  fontWeight:'500',
  textAlign:'center',
}

})

export default Profile
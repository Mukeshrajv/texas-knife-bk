import React from 'react'
import { StyleSheet, Text, View,Image,Platform ,TouchableOpacity} from 'react-native';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Profile from '../components/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UseSelector, useSelector } from 'react-redux';
// import { NavigationContainer } from '@react-navigation/native';

const Tab = ({navigation}) => {
    const Tabs=createBottomTabNavigator();
  return (
    
    <Tabs.Navigator
    screenOptions={{
     headerShown:false,
     tabBarShowLabel:false,
     tabBarStyle:{
         ...Platform.select({
         android:{
         backgroundColor:"#2a2e7e",
        height:55,
         ...Style.shadow
             },
             ios:{
                 alignContent:'center',
                 padding:15,
                 backgroundColor:"#2a2e7e",
                 height:80,
                 ...Style.shadow
             }
     })
     }

    }}

  >
     <Tabs.Screen name='Home' component={Home} 
      options={{
         tabBarIcon:({focused})=>(
             <TouchableOpacity >
                 <Image
                 source={require('../assets/images/home.png')}
                 resizeMode='contain'
                 style={{
                     width:25,
                     height:25,
                     tintColor:focused?'#ffffff':'#748c94'
                  } }
                 />
             </TouchableOpacity>
         )
     }}
      />
     <Tabs.Screen name='cart' component={Cart}
      options={{
         tabBarIcon:({focused})=>(
             <TouchableOpacity >
               <View style={{backgroundColor:'#FF0000',borderRadius:50,width:15,height:15,position:'absolute',top:-3,left:8,zIndex:1}}>
                 <Text style={{color:"#ffffff",textAlign:"center",fontSize:10}}>{useSelector((state)=>state.cartdata.cartCount)}</Text>
               </View>
                 <Image
                 source={require('../assets/images/cart.png')}
                 resizeMode='contain'
                 style={{
                     width:25,
                     height:25,
                     tintColor:focused?'#ffffff':'#748c94',
                     position:'relative'
                     
                  } }
                 />
             </TouchableOpacity>
         )
     }}
    />
     <Tabs.Screen name='Profile' component={Profile}
      options={{
         tabBarIcon:({focused})=>(
             <View>
                 <Image
                 source={require('../assets/images/profile.png')}
                 resizeMode='contain'
                 style={{
                     width:25,
                     height:25,
                     tintColor:focused?'#ffffff':'#748c94'
                  } }
                 />
             </View>
         )
     }}
     />
   
  </Tabs.Navigator>
  )
}
const Style=StyleSheet.create({
    shadow:{
     shadowColor:'#7F5DF0',
     shadowOffset:{
         width:0,
         height:'10'
     }
    
    }
 })

export default Tab
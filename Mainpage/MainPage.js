import React from 'react'
import { View,Text } from 'react-native'
import Tab from '../Tab/Tab';
import { NavigationContainer } from '@react-navigation/native';

const MainPage = () => {
  return (
   <>
    
    <NavigationContainer>
       <Tab/>
    </NavigationContainer>
       
   </>
  )
}

export default MainPage
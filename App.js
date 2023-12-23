import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainPage from './Mainpage/MainPage';
import Login from './components/Login page/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './components/Login page/Register';
import Cart from './components/Login page/Cart';
import ProductDetail from './components/Login page/ProductDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
     <ProductDetail/>
       <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});

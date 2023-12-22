import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainPage from './Mainpage/MainPage';
import Login from './components/Login page/Login';


export default function App() {
  return (
    <Provider store={store}>
    <MainPage/>
       <StatusBar style="auto" />
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  
});

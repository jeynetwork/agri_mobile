import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View,ScrollView } from 'react-native';
import Auth from './components/Auth';
import Register from './components/Register';
import Products from './components/Products';
import Services from './components/Services';
import Orders from './components/Orders';
import BottomNav from './components/BottomNav'
import PropTypes from 'prop-types';

export default function App() {
  return (
    <View style={styles.contain} >
      <ScrollView style={styles.container}>
        {/* <Auth/> */}
        {/* <Register/> */}
        {/* <Products/> */}
        {/* <Services/> */}
        <Orders/>
      </ScrollView>
      <BottomNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding:15,
    flexDirection:'column',
    paddingBottom:100,
    flex: .9,
  },
  contain: {
    backgroundColor: '#fff',
    flex:1
  },
});

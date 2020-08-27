import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './components/Auth';
import Register from './components/Register';
import Products from './components/Products';
import Services from './components/Services';
import Orders from './components/Orders';
import PropTypes from 'prop-types';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Auth/> */}
      {/* <Register/> */}
      {/* <Products/> */}
      {/* <Services/> */}
      <Orders/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:15,
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View,ScrollView } from 'react-native';
import Navigator from './routes/homeStack';
import BottomNav from './components/BottomNav'
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import store from './components/redux/Store';

export default function App() {
  return (
    <Provider store={store} >
      <View style={styles.contain} >
          <Navigator/>
      </View>
    </Provider>
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

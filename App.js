import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, TouchableWithoutFeedback, View,ScrollView } from 'react-native';
import Navigator from './routes/homeStack';
import BottomNav from './components/BottomNav'
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import store from './components/redux/Store';
import {loadUser, loadUsers} from './components/redux/actions/auth_actions'

export default function App() {


  useEffect(()=>{
    store.dispatch(loadUser());
    store.dispatch(loadUsers());
  })
  
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

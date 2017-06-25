import React, { Component } from 'react';
import {Image, View, Text, ListView, StyleSheet} from 'react-native';

import ICNDB from './components/ICNDB';

class MainApp extends Component {
  render(){
    return(
      <View className = 'MainApp'>
       <ICNDB />
      < /View>
    );
  }
}
  const styles = StyleSheet.create({
  // will do
  });
export default MainApp;

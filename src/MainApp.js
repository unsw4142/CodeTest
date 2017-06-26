import React, { Component } from 'react';
import {Image, View, Text, ListView, StyleSheet} from 'react-native';

import ICNDB from './components/ICNDB';
import Useaxios from './components/useaxios';

class MainApp extends Component {
  render(){
    return(
      <View className = 'MainApp'>
       <Useaxios style = {{color: 'black'}} url = {'https://api.icndb.com/jokes/random.json'} />
       <Useaxios  url = {'https://api.icndb.com/jokes/random.json'} />
      </View>
    );
  }
}
  const styles = StyleSheet.create({
  // will do
  });
export default MainApp;

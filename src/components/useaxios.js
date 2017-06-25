import React, {Component} from 'react';
import {Image, View, Text, ListView, StyleSheet, ActivityIndicator} from 'react-native';
import axios, {} from 'axios';

class ICNDB extends Component {
  constructor(props) {
    super(props);
    this.state = {jokes: []};
  }
  randomJokes= () =>{
     return fetch('https://api.icndb.com/jokes/random.json')
      // then this
      .then((response) => response.json())
      .then(resJSON => {
        this.setState({
          isLoading: false,
          jobs: resJSON.value.joke
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }

  render() {

    // First time it renders, no data defined
    if(this.state.isLoading){
       return (<Text style = {{padding: 20}}> Loading.... </Text>);
     }

    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(Data) => <Text> {Data.joke} </Text>}
        />
      <Text> {this.state.joke}</Text>
      </View>
    );
  }
}

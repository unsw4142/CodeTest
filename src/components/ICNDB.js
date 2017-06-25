import React, {Component} from 'react';
import {Image, View, Text, ListView, StyleSheet} from 'react-native';
//var math = require('mathjs');
// 3 digits n
var n = 5;
var JOKES_URL = 'http://www.icndb.com/api/jokes/random';

class ICNDB extends Component {
  constructor(){
    super();
    this.state = {
      requestFailed: false,
      jokes: '',
    };
  };

  getJokes(rjokes){
    this.setState(jokes: rjoke);
  }
  // To Make network request, as per react
  // Automatically called by React
  componentDidMount() {
      // call the fetch function
      // Input - API url
      fetch(JOKES_URL)
        //To check if the response recieved is OKAY
        .then(res =>{
          if(!res.ok){
            // Error by this
            throw Error("Network req failed")
          }
        })
        // then this
        .then(res => res.json())
        .then(res => {
            this.setState({
            data: res,
            jokes: res.value.joke,
            });
        },
        // Not applying catch here
        // One of these will work
        () =>{
          this.setState({
            requestFailed: true
          })
        });
  }
  renderJokes(inp){
    return(
      <View>
        <Text> {inp.value.joke} </Text>
      </View>
  );
  }
  render() {
    //If it connects to the url
    //if(this.state.requestFailed) return <Text> Failed Network </Text>
    // First time it renders, no data defined
    //if(!this.state.data) return <Text> Loading </Text>
    return (
      <View>
        <ListView dataSource= {this.state.data}
                  renderRow = {this.renderJokes}> </ListView>
      </View>
    );
  }
}

export default ICNDB;

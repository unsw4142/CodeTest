import React, {Component} from 'react';
import {Image, View, Text,ListView,
    FlatList, StyleSheet, ActivityIndicator,
    TouchableWithoutFeedback} from 'react-native';


class ICNDB extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      jokes: [],
    };
  };
  // To Make network request, as per react
  // Automatically called by React
  componentDidMount() {
      // call the fetch function
      // Input - API url- https
       return fetch('https://api.icndb.com/jokes/random.json')
        // then this
        .then((response) => response.json())
        .then(resJSON => {
          this.setState({
            //dataSource: this.state.
            isLoading: false,
            jokes: this.state.jokes.concat(resJSON.value.joke),
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
/*
    return (
      <View style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={this.componentDidMount()}>
          <Text style = {styles.style1}>
            {this.state.jokes}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
    */
    return (
      <View style={{flex: 1}}>
          <Text style = {styles.style1}>
            {this.state.jokes}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style1:{
    backgroundColor: 'white',
    color: 'skyblue',
    fontSize: 16,
    alignItems: 'center',
    marginRight: 10, paddingTop: 20,
  },
  style2:{
    color: 'green',
  },
});

export default ICNDB;

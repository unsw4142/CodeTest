import React, {Component} from 'react';
import {Image, View, Text, ListView, StyleSheet, ActivityIndicator} from 'react-native';


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
  componentWillMount() {
      // call the fetch function
      // Input - API url- https
      return fetch('https://api.icndb.com/jokes/random.json')
        // then this
        .then((res) => res.json())
        .then(resJSON => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(resJSON.value),
            jobs: resJSON.value.jokes
          });
        })
        .catch((error) => {
          console.error(error);
        });
  }
  render() {

    // First time it renders, no data defined
    if(this.state.isLoading) return <Text style = {{padding: 20}}> Loading.... </Text>;

    return (
      <View >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(Data) => <Text>{Data.joke}</Text>}
        />
      <Text> {this.state.jokes}</Text>
      </View>
    );
  }
}

export default ICNDB;

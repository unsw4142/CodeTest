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
  componentDidMount() {
      // call the fetch function
      // Input - API url
      return fetch('http://api.icndb.com/jokes/random.json')
        // then this
        .then((res) => res.json())
        .then(resJSON => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(resJSON.value),
            jobs: resJSON.value.jokes
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
  }
  render() {

    // First time it renders, no data defined
    if(this.state.isLoading) return <Text> Loading </Text>;

    return (
      <View >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(Data) => <Text>{Data.joke}</Text>}
        />
      </View>
    );
  }
}

export default ICNDB;

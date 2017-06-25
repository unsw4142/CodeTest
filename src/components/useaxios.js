import React, {Component} from 'react';
import {Image, View, Text, ListView,
   FlatList, StyleSheet, ActivityIndicator} from 'react-native';
//import axios, {} from 'axios';

// Not using axios
class useaxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://api.icndb.com/jokes/random.json', jokes: []};
  }

  newUrl(n){
    this.setState({ url :'https://api.icndb.com/jokes/random/' + n + '.json'});
    return true;
  }
  componentDidMount() {
      // call the fetch function
      // Input - API url- https
       return fetch(this.state.url)
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
    const iter = [1,2,3,4,5];
    // First time it renders, no data defined
    if(this.state.isLoading){
       return (<Text style = {{padding: 20}}> Loading.... </Text>);
     }

     return (
       <View style={{flex: 1}}>

           <Text style = {styles.style1}>
             {this.state.jokes}
           </Text>

           <FlatList
             data={[
               {key: (iter) => {if(this.newUrl(iter[0])) return this.state.jokes}},
               {key: (iter) => {if(this.newUrl(iter[1])) return this.state.jokes}},
             ]}
             renderItem={({item}) => <Text style={styles.style1}> {item.key} </Text>}
           />
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

 export default useaxios;

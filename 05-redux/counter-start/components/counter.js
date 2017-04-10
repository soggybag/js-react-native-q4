import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import B from './b';

class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>00</Text>
        <B styles={styles.button} title="+" onPress={()=>{}} />
        <B styles={styles.button} title="-" onPress={()=>{}} />
      </View>
    );
  }
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: 40
  }
});

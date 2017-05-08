import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default PlusButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: 'orange',
    backgroundColor: 'white'
  },
  text: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 60,
    lineHeight: 60,
    backgroundColor: 'rgba(0,0,0,0)'
  }
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StartBtn from './start-btn';

const TimerCell = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}>
        <Text style={styles.items}>{props.name}</Text>
        <Text style={[styles.items, styles.time]}>{props.time}</Text>
        <View style={styles.btn}>
          <StartBtn
            styles={{}}
            isPaused={props.isPaused}
            onPress={props.onStartTimer} />
        </View>
    </TouchableOpacity>
  );
};

export default TimerCell;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: 'rgba(255, 132, 44, 1)',
    margin: 5,
    padding: 5,
    borderRadius: 10
  },
  items: {
    flex: 1,
    backgroundColor: '#f00'
  },
  time: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'magenta'
  },
  btn: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 40,
    height: 40,
    backgroundColor: '#0f0'
  }
});






//

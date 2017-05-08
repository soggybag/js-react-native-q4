import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PlayButton from './play-button';
import { formatTime } from '../stuff/formatters';

const TimerCell = (props) => {
  const time = formatTime(props.timer);

  return (
    <TouchableOpacity onPress={()=>{
      props.onSelectTimer();
    }}>
      <View style={styles.container}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.button}>
          <PlayButton
            play={props.isRunning}
            onPress={props.onPressPlay}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default TimerCell;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    margin: 5,
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 10
  },
  name: {
    flex: 1,
    fontSize: 20
  },
  time: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    flex: 0
  }
});

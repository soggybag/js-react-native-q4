import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const playImage = require('../images/play.png');
const pauseImage = require('../images/pause.png');

const StartBtn = (props) => {

  const source = props.isPaused ? playImage : pauseImage;

  return (
    <TouchableOpacity
      style={[styles.container, props.styles]}
      onPress={props.onPress}>
      <Image resizeMode="contain" source={source} style={{width:40, height: 40}} />
    </TouchableOpacity>
  );
}

export default StartBtn;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    flex: 1
  }
});







//

import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const playImage = require('../images/play.png');
const pauseImage = require('../images/pause.png');

const PlayButton = (props) => {

  const source = props.play ? pauseImage : playImage;
  const moreStyles = props.styles ? props.styles : {};
  
  return  (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        style={[styles.image, moreStyles]}
        source={source}
        resizeMode='contain'
      />
    </TouchableOpacity>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  container: {

  },
  image: {
    height: 40,
    width: 40
  }
});

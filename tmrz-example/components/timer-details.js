import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { pauseTimer } from '../actions';
import StartBtn from './start-btn';

class TimerDetails extends Component {
    render() {
      return (
        <View>
          <Text>{props.time}</Text>
          <StartBtn />
        </View>
      );
    }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, { pauseTimer })(TimerDetails);


const styles = StylSheet.create({

});


//

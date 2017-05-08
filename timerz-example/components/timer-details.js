import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { startTimer } from '../actions';
import { formatTime } from '../stuff/formatters';

import B from './b';
import PlayButton from './play-button';

class TimerDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.timer.name}</Text>
        <Text style={styles.time}>{formatTime(this.props.timer.time)}</Text>
        <PlayButton
          play={this.props.timer.isRunning}
          styles={styles.playButtonStyle}
          onPress={()=>{
            this.props.startTimer(this.props.selectedTimer);
          }}
        />
        <B
          title="Back"
          onPress={this.props.back}
          textStyle={styles.backButtonText}
          buttonStyle={styles.backButton} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timers: state.timers,  // Must get this property cuz issues with shallow equal
    timer: state.timers[state.selectedTimer],
    selectedTimer: state.selectedTimer
  }
}



export default connect(mapStateToProps, {
  startTimer
})(TimerDetails);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3d5'
  },
  name: {
    fontSize: 24,
    textAlign: 'center'
  },
  time: {
    fontSize: 48,
    textAlign: 'center'
  },
  playButtonStyle: {
    width: 100,
    height: 100,
    margin: 20
  },
  backButtonText: {
    fontSize: 18,
  },
  backButton: {
    padding: 15
  }
});

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import TimerCell from './timer-cell';
import { addTimer, pauseTimer, selectTimer } from '../actions';

class TimerList extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
  }

  render() {
    const timerz = this.props.timers.map((timer, i)=>{
      return <TimerCell
        key={i}
        name={timer.name}
        time={timer.time}
        isPaused={timer.isPaused}
        onStartTimer={()=>{ this.props.pauseTimer(i); }}
        onPress={()=>{ this.props.selectTimer(i); }}
      />;
    });

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          {timerz}
        </ScrollView>

        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={(text)=>{
              this.setState({name:text});
            }}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={()=>{this.props.addTimer(this.state.name)}}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timers: state.timers,
    selectedTimer: state.selectedTimer
  }
}

export default connect(mapStateToProps, {
  addTimer, pauseTimer, selectTimer
} )(TimerList);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69f'
  },
  inputBox: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#ddd'
  },
  addButton: {
    flex: 0,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 3,
    width: 40,
    height: 40,
    backgroundColor: 'yellow'
  }
});








//

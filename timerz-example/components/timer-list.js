import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTimer, startTimer, selectTimer } from '../actions';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import TimerCell from './timer-cell';
import PlusButton from './plus-button';

class TimerList extends Component {
  constructor(props) {
    super(props);

    this.state = {newName:''};
  }

  onInput(text) {
    this.setState({newName: text});
  }

  newTimer() {
    this.props.addTimer(this.state.newName);
    this.setState({newName: ""});
  }

  render() {
    const timers = this.props.timers.map((timer, i)=>{
      return (
        <TimerCell
          key={i}
          name={timer.name}
          timer={timer.time}
          isRunning={timer.isRunning}
          onPressPlay={()=>{
            this.props.startTimer(i);
          }}
          onSelectTimer={()=>{
            this.props.selectTimer(i);
            this.props.showDetails();
          }}
        />);
    });

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {timers}
        </ScrollView>
        <View style={styles.button}>
          <View style={{flex:1}}>
            <TextInput
              style={styles.input}
              onChangeText={this.onInput.bind(this)}
              value={this.state.newName}
            />
          </View>
          <PlusButton onPress={this.newTimer.bind(this)} />
        </View>
      </View>
    );
  };
};

// export default App;

const mapStateToProps = (state) => {
  return {
    timers: state.timers
  }
}

export default connect(mapStateToProps, {
  addTimer: addTimer,
  startTimer: startTimer,
  selectTimer: selectTimer
})(TimerList);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor:'blue'
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'magenta'
  },
  button: {
    flex: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
    // alignSelf: 'center'
  },
  input: {
    flex: 1,
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    backgroundColor: 'white'
  }
});

// React Native prompt
// npm install react-native-prompt --save

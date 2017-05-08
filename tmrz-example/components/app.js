import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

import reducers from '../reducers';
import { updateTime } from '../actions';

import StartBtn from './start-btn';
import TimerCell from './timer-cell';
import TimerList from './timer-list';


const store = createStore(reducers);

setInterval(()=>{
  store.dispatch(updateTime());
}, 1000);


const App = (props) => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TimerList />
      </View>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, StyleSheet, Navigator, Text } from 'react-native';
import reducers from '../reducers';
import TimerList from './timer-list';
import TimerDetails from './timer-details';
import { startTimer } from '../stuff/timer-manager';

// TODO: Save Redux to localStorage

export const store = createStore(reducers);
// Load data from local storage
startTimer();

const routes = [
  {title: "Timers", index: 0},
  {title: "Timer Details", index: 1}
];

const handleRoute = (route, navigator) => {
  switch(route.index) {
    case 0:
      return <TimerList showDetails={()=>{
        console.log("App Show details");
        navigator.push(routes[1]);
      }} />
    case 1:
      return <TimerDetails back={()=>{
        navigator.pop();
      }}/>;
    default:
      return <Text>Not sure what happened?</Text>;
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Navigator
        style={{flex:1}}
        initialRoute={routes[0]}
        renderScene={handleRoute}
      />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {

  }
});

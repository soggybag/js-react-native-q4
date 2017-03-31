# React Native Components

React projects are built on components and components are composable. That is components
are built from a hierarchy of other components. 

## Simple and Stateful

Simple components are defined by a function that returns JSX. A stateful component is 
defined as a class that extends React.component. 

## Simple Component

Make a simple component. Make a new file with the following: 

```
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});
```

# props 

All components take in `props`. Props are always a JavaScript object. Use `props` to 
configure a component. Here is an example imagine Title bar Component. The title bar 
component will take a property to set it's title. 

```
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleBar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

export default TitleBar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0 // Whoa!
  },
  title: {
    fontSize: 22,
    color: '#ddd',
    flex: 0, // Whoa!
  }
});
```

**Challenge** 

- Destructure the title prop in the function parameter. 
- Add another param or params that add other features. 
    - Try adding styles param with styles that overwrite the default styles. 

## React Native Components

React Native supplies a set of built in components. These components cover a wide
range of the common UI elements you find in iOS and Android apps. These include: 

- Text
- View 
- Button
- ActivityIndicator 
- Image
- ListView 
- ScrollView 
- ...

And many more. Some of these components are specific to iOS or Anrdoid. 








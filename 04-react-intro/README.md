# React

React is a JavaScript framework from Facebook. It's popular and gaining in popularity. 
In use React is the **View** in MVC use it to create user interfaces. 

React is based on a **Component Architecture**. 

> Component : noun, a part or element of a larger whole, especially a part of a machine 
> or vehicle.

Components are composable. That is components can be made of other components. 

> compose : (of elements) constitute or make up (a whole). 

In React a component represents something or part of something displayed on the screen. 
A component could be:

- Text Label
- box with a frame
- input field
- login form
    - made up of text labels, input fields, in a box with a frame. 

## Types of Components 

Components can be one of two types: **Simple** and **Stateful**. This distinction doesn't 
effect how a component appears on the screen it only effects how the component works 
internally. 

A **Simple component** is a _JavaScript function_ that returns a **JSX** expression.

A **Stateful component** is a _class that_ extends React.Component, and implements a render
method which returns a **JSX** expression.

## props

Components take in **props** a _JavaScript Object_. This object is used to configure the 
component. For example a button component might attach a `title` and `onClick` to props
used to configure the button.

```
const MyComponent = (props) => {
    // props.title
    // props.onClick
}
```

## state 

A stateful component can declare a state object containing properties that describe the 
'state' of the component. Changing the state of the component will cause the component to 
re-render. 

```
class SmartComponent extends React.Component {
    // state.lightsOn = false
    
    render() {
        ...
        // state.lightsOn determines how this component is rendered
        ...
    }
}
```

## JSX

React adds an extension to the JavaScript language called JSX. JSX looks like HTML but 
is written inside your JavaScript. Here is an example: 

`<Text>Hello World</Text>`

In the case of an empty tag use the "/" before the closing ">". 

`<View />` equivalent to `<View></View>`

Like HTML, JSX uses **attributes**. Attributes are always quoted for String values, or 
put a JavaScript expression inside the {}.

```
<ActivityIndicator 
    message="Loading" 
    animating={this.state.animating} 
/>
```

Attribute values become properties on **props**. 

You will write JSX mixed in with other JavaScript. The code snippet below is an example
of a **simple component**. It is a function that takes props (an object) as a parameter
and returns JSX. You can see this is a regular JavaScript with the addition of JSX
which looks like HTML. 

```
const IconText = (props) => {
  return (
    <Text>
      <IconSmall image={props.image} />
      {props.text}
    </Text>
  );
}
```

The JSX from the above example would compile to JavaScript that looks like this:  

```
var IconText = function IconText(props) {
  return React.createElement(
    Text,
    null,
    React.createElement(IconSmall, { image: props.image }),
    props.text
  );
};
```

The JSX version is shorter and easier to read. 

JSX has a few rules of syntax. The best way to learn these rules is write some JSX.
Below are some examples. Don't expect to absorb all of this here in one read. 

_A JSX expression must have a single top level node._

**Good!**

```
<View>
    <Text />
</View>
```

**Error** siblings need a parent

```
<View />
<Text />
```

Tags that don't have a closing tag can be closed with /. 

No closing tag so it is closed with the /. 

**Good**

```
<Text />
```

**Error** missing />

```
<Text>
```

Attributes become props. 

```
<Title text="Hello World" color="red">
```

The two attributes in the JSX expresion above would become values on props. The props 
object for this component would look like: 

```
{
    text: "Hello World",
    color: "red"
}
```

JavaScript expressions within JSX must be wrapped in {}. 

**Good**

```
<CartItem name="Banana" price={1.23} qty={3} total={1.23 * 3}>
```

**Error** expressions include which numbers must be wrapped in {}

```
<CartItem name="Banana" price=1.23 qty=3 total=1.23 * 3>
```

Numbers, bools, pretty much everything that is not a string should be wrapped in {}. 

If you are writing a multiline JSX expression wrap it in (). 

```
render() {
    return (
        <View>
            <Text>The time is:</Text>
            <Clock />
        </View>
    );
}
```

## Install React Native

Install React Native by following the: Getting Started instructions here: 

- https://facebook.github.io/react-native/docs/getting-started.html

## Video notes and tutorials 

- https://www.youtube.com/watch?v=gdk7Io8BfUA&list=PLoN_ejT35AEi6ynsLwQJN1o116SFjWuEt

## Challenges 

- Install React Native
- Init a React Native project
- Follow the examples under "The Basics" after getting started
    - https://facebook.github.io/react-native/docs/tutorial.html
- Do the Flex box tutorial here: http://flexboxfroggy.com
- Stretch Challenge!
    - Implement the tutorial here in React Native!
    - https://facebook.github.io/react/tutorial/tutorial.html



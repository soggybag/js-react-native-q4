# React

React is the View in MVC. It's a Framework for creating user interfaces with JavaScript. 
React is based on a Component Architecture. Components are composable. That is components
can be made of other components. 

> Component : noun, a part or element of a larger whole, especially a part of a machine 
> or vehicle.

A component represent something or a part of something you might display on the screen. 
A component could be a Text Label, a box with a frame, an input field, or a form made 
up of text labels, input fields, in a box with a frame. 

## Types of Components 

Components can be one of two types: Simple and Stateful. 

A Simple component is a function that returns a JSX expression.

A Stateful component is a class that extends React.Component, and implements a render
method which returns a JSX expression.

## JSX

React adds an extension to the JavaScript language called JSX. JSX looks like HTML but 
you'll write inside your JavaScript. Here is an example: 

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

The example above is a Simple component (a function that returns JSX). The function returns
what looks like HTML, this is JSX. JSX is an extension of the JavaScript language that 
a compiles to regular JavaScript. The example above would compile to: 

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
Below are some examples. Don't expect to absorb all of this here. 

A JSX expression must have a single top level node.

**Good!**

```
<View>
    <Text />
</View>
```

**Error**

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

**Error**

```
<Text>
```

JSX expressions are assigned properties in the same way that HTML tags use attributes. 

```
<Title text="Hello World" color="red">
```

JavaScript expressions within JSX must be wrapped in {}. 

**Good**

```
<CartItem name="Banana" price={1.23} qty={3} total={1.23 * 3}>
```

**Errors**

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

 


## Build a web page using React

Build a simple app with React for the web. While the course will focus on React Native, 
you can build components for the web with React, the code is almost identical.


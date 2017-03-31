# React Native - Styles 

React Native components are built from native objects. Elements are styled with css styles
which are translated to properties on the native objects. This allows you to use your 
understanding of CSS to design your Native components. 

keep in mind that React Native components uses CSS styles but may only support a subset 
of those styles. You can check which styles are supported by a component by looking at 
the documentation. 

Look for the list of components on the bottom of the left column. 

- https://facebook.github.io/react-native/docs/getting-started.html

### React Native StyleSheet.create()

React Native doesn't use CSS files instead you'll use a JavaScript Object that defines 
all of your style properties and values. Define a new style sheet like this:

```
const styles = StyleSheet.create({
    fontSize: 22,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    color: '#ddd'
    ...
});
```

General rules: 

- Property names are camel case. 
- Numeric values are numbers, do not inlcude the unit (px, em, etc.)
- Other values are strings. This includes colors. 

### Apply styles to a component

Apply styles to a component through the component's style attribute. 

```
<Text style={styles}>Hello World</Text>
```

You can also write styles in a component directly: 

```
<Text style={{color: '#f00'}}>Hello World</Text>
```

### Organize your styles

You can organize your styles in nested objects. This can give you a flexibility similar to 
using class names with CSS. 

```
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444'
    }, 
    title: {
        fontSize: 22,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        color: '#ddd'
    }
});
```

Apply these styles to a couple components: 

```
<View style={styles.container}>
    <Text style={styles.title}>Hello World</Text>
</View>
```

#### Combine styles 

You can combine or merge styles using an array. 

```
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444'
    }, 
    title: {
        fontSize: 22,
        textAlign: 'center'
    }, 
    baseStyles: {
        fontFamily: 'Helvetica',
        color: '#ddd'
    }
});
```

The first Text object below combines `styles.title` with `styles.base` by including them 
as an array of objects. 

```
<View style={styles.container}>
    <Text style={[styles.title, styles.base]}>Hello World</Text>
    <Text style={styles.base}>Foo Bar</Text>
</View>
```

### Flex Box

React Native uses flex box for layout. Here is a good at a glance reference for Flex box. 

- https://medium.freecodecamp.com/an-animated-guide-to-flexbox-d280cf6afc35

React Native doesn't support all features of Flex Box supported by CSS. Here is a reference
for Flex Box and React Native: 

- https://facebook.github.io/react-native/docs/layout-props.html#props

## Challenges 

Try these examples in class. 

For practice try and recreate the examples shown here with View components. You need 
only size and position Views using flex box. The goal is to get a feel for laying out 
elements with Flex Box. The color don't matter. 

- [Example Images](./images/)

### Schedule 

| What            | Time |        | Activity   |
|-----------------|------|--------|------------|
| Intro           | 5 min|   5 min| Talk       |
| Flex box        |10 min|  15 min| Talk       |
| Flex Box Demo   |25 min|  40 min| We Do      |
| Flex Challenges |60 min| 100 min| Work       |
| Break           |10 min| 110 min| Stretch    |
| Wrap up         |10 min| 120 min| We Do      |


## Ideas for Simple apps 

Timer 
Tips
Currency
Notes
Simon Game




# ES6 intro

ES6 is the latest iteration of the JavaScript language. 

ES6 provides a different syntax for many features, while functionality remains 
the same. ES6 introduces a few new ideas. 

Below I have provided a short description of the most common features and new syntax of
ES6. Read through these and follow the links provided for more info. Be sure to test 
these new concepts yourself until you feel comfortable. 

# const

const - defines a constant

Rather than an immutable value a const is value whose bindng can not change. 
Using any of the assignment operators on a const will cause an error. In 
other words: 

```
const x = 10;
x = 99; // Throws an error!
```

# let 

Let defines a block scope. Variables defined with let inside of {} are scoped to 
that block. 

# String concatenation with ${}

Using the back quote \` and \` to define a string allows JavaScript expressions to be 
defined inside the ${}. This can save characters and make strings that contain variables
or other JS expressions easier to read. For example: 

```
var name = 'Smith';
var greeting = `Hello Mr ${name} glad to meet you`;
```

The ${} does NOT work in the ' (single quote) or " (double quote)!

# Fat arrow functions

Fat arrow functions provide a new abbreviated syntax for functions. You will be 
using Fat arrow functions with React! 

The original style of functions: 

```
function myFunction(param1, param2) {
    // ...
}
```

As a fat arrow function the function above would be written: 

```
myFunction = (param1, param2) => {
    // ...
}
```

Often you'll be writing anonymous functions (closures) that might look like: 

```
var newArray = array.map(function(item) {
    return item * 3;
});
```

Written with a fat arrow function: 

```
var newArray = array.map((item) => {
    return item * 3;
});
```

There are several more optimized syntaxes for fat arrow functions, you can read 
more about this here: 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions 

## ES6 Arrays

ES6 provides some new ways to handle arrays. 

Destructuring arrays 

```
const array = [11, 22];
const [a, b] = array; // a = 11, b = 22
```

Exploding an array with the ...

```
const array = [11, 22];
const array2 = [...array];      // Creates a copy!
const array3 = [...array, 33];  // Concatenate values
const array4 = [...array, ...array]; // Why not?
```

## ES6 Objects 

ES6 provides destructuring for Objects. 

```
const obj = {first:"Joe", last:"Smith"};
const {firstName, lastName} = obj;
```

You can also explode objects:

```
const obj = {first:"Joe", last:"Smith"};
const obj2 = {...obj}; // Create a new object with the properties from another object.
```

Overwrites properties!

```
const obj = {first:"Joe", last:"Smith"};
const obj2 = {age:22, first:"John", ...obj}; // First name John is overwritten with Joe.
```

- http://exploringjs.com/es6/ch_destructuring.html

# Challenges

- Rewrite the shopping example with fat arrow functions. 
    - Use the Fat arrow syntax in place of the function(){} everywhere. 
- Do the challenges in `colors.html`. For these challenges be sure to use: 
    - Fat Arrow functions
    - ...array deconstruction syntax
- Solve the problems in `styles.html`
    - When solving these challenges be sure to use the ...obj deconstruction syntax.










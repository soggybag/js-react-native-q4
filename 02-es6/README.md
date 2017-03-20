# ES6

ES6 is the latest iteration of the JavaScript language. 

ES6 provides a different syntax for many features, while functionality remains the same. 
ES6 introduces only a few new ideas. 

# const

const - defines a constant

# let 

{} Scope and let...

# Fat arrow functions

Fat arrow functions are JavaScript functions with an updated syntax introduced in ES5. 

We will be using Fat arrow functions with React! 

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

There are several more optimized syntaxes for fat arrow functions, you can read more 
about this here: 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## Fat Arrow Challenges 

- Rewrite the shopping example with fat arrow functions.  

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

## Challenges 

Imagine you have two 

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












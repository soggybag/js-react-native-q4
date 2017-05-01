# JavaScript - Tutorial

## A short introduction to JavaScript.

The goal of this section is to review JavaScript with an eye toward features that are 
appear often in React projects. In this section you will build the shopping cart 
described in the previous module. If you are familiar with JavaScript pay close attention 
to the section on map, filter, and reduce. If you found the shopping cart challenge to 
be challenging or you did not finish it pay closer attention to this module as to how it 
solves the shopping cart. 

After the shopping cart example there are some challenges to solve using map, filter, 
and reduce. 

## Shopping Cart solution 

As a review the shopping cart should fit this description: 

- Keeps a list of items stored in the cart
    - Each item in cart knows the name, price, and quantity
- Has methods to manage items in the cart 
    - Add item to cart
    - Remove Item from cart
    - Clear cart
    - Get count of items in cart
    - Get total cost for all items in cart
    - List items in cart. This should list items with:
        - Name, price, and quantity
        - Total cost for item of quantity
        
The completed project need only display the results in the console. The system 
should consist of a single JavaScript module that holds a collection, and 
methods that perform the operations listed above. 
        
## Creating the example

To follow this example you can create a text file with the .html file extension. 
Wrap all of your JavaScript in the <script> and </script> tags. 

`shopping-cart.html`

Test your work by opening the file in any web browser and looking at the results in 
the console. 

## Variables

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

Define a variable to hold your shopping cart. 

`var cart = [];` 

This defines a variable with an empty array.

## Objects 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

The cart will hold objects that represent items in the cart. Each item will be 
represented by:

- id
- name
- price
- quantity

An item might look like this: 

```
{
    id: 1, 
    name: 'Pencil',
    price: 1.99,
    qty: 1
}
```

Turn this into a class like this: 

```
function Item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = 1;
}
```

You can make also new instances of this class like this: 

`var item = new Item(1, "Apple", 0.99); // Returns an object as shown in the above`

## functions 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

We can use a function to generate objects. 

```
function addItem(id, name, price, qty) {
    var item = {
        id: id, 
        name: name,
        price: price,
        qty: qty
    }
    
    // or use this if you created the class function :
    // var item = new Item(id, name, price, 1); 

    cart.push(item);
}
```

Add an item to the end of the array with push().

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

## Managing items in an array

Use one of the methods above to create objects and add them to an array with 
array.push().  

```
var cart = [];
cart.push( addItem(1, "Apple", 0.99, 1) );
```

or 

```
var cart = [];
cart.push( new Item(1, "Apple", 0.99) );
```

### Increasing the quantity

You need to check the items in the cart array for the `id` of the new item. 
If this `id` exists you need to increment the `qty`. If the item doesn't exist 
add the new item with a `qty` of 1. 

There are several solutions to this. I chose `Array.map()`. Map returns a new 
array rather than mutating the existing array. This is an important distinction. 
When we are heading into React, which uses functional programming paradigm. 
Reduces side effects in app, enables one way directional data flow which makes state 
easier to manage. 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

```
function addItem(id, name, price, qty) {
    var newItem = {
        id: id, 
        name: name,
        price: price,
        qty: qty
    }
    
    var itemExists = false;
    
    var newCart = cart.map(function(item) {
        if (item.id === newItem.id) {
            item.qty ++;
            itemExists = true;
        } 
        
        return item;
    });
    
    if (!itemExists) {
        newCart.push(newItem);
    }

    cart = newCart;
}
```

Notice the function defined inside map(). This is an **anonymous function**, or 
**closure**. These are really common in JavaScript. Take a close look you will 
see this often. 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

# Array filter, map, reduce

The map, filter, and reduce methods are an introduction to functional programming ideas.
These methods are important to React and Redux.

**Array.map** creates a new array by transforming each element of a source array. 

**Array.filter** creates a new array by filtering the elements of a source array. 

**Array.reduce** returns a value accumulated by looking at all of the elements in a 
source array.

We can use these method with the shopping cart to remove items, calculate the total 
cost of the cart and more. 

## Removing an item from the cart

Use Array.map and Array.filter to remove items from the cart. 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

```
function removeItem(id) {
    // Transoform 
    var newCart = cart.map(function(item) {
        if (item.id === id) {
            item.qty --;
        }
        return item;
    });
    
    newCart = newCart.filter(function(item) {
        return item.qty > 0;
    })
    
    cart = newCart;
}
```

## Reducing cart data

Use Reduce to generate a single value from an array. In this case of the shopping cart 
we use reduce to count the number of items in the cart, get the total cost of the cart, 
and generate a string description of the cart. 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Get the total of the cost of the cart.  Since the array contains object we must set the 
initial value, this is the param to reduce. 

```
function getCartCount() {
    var count = cart.reduce(function(acc, item) {
        return acc + item.qty;
    }, 0);
    return count;
}
```

Get the total of the cart: 

```
function getCartTotal() {
    var total = cart.reduce(function(acc, item) {
        return acc + item.qty * item.price;
    }, 0);
    return total;
}
```

Reduce the cart to a string to display it. In this case we need to have an inital value
that is a string! 

```
function displayCart() {
    var total = cart.reduce(function(acc, item) {
        return acc + item.name + " $" + item.price + " x " + item.qty + " = " + item.price item.qty + "\n";
    }, "");
    return total;
}
```

Note! in this case reduce() is iterating through objects! This means the initial 
value must be set! Otherwise the initial value is the first item in the array, 
which is an object rather than an Number! The intial value is the second param 
to reduce().

Notice the 0 at the end of the line below: 

`cart.reduce(function(acc, item) {return acc + item.qty;}, 0);`

**Reduce the total value of the cart.** This requires you multiply the qty and 
price of each item and accumulate the total. 

```
function getCartTotal() {
    var total = cart.reduce(function(acc, item) {
        return acc + item.qty * item.price;
    }, 0);
    return total;
}
```

## Scope and Modules 

- https://developer.mozilla.org/en-US/docs/Glossary/Scope

In JavaScript all variables are global unless they are scoped to a function block. 
This is a big problem with a solution: Modules. Modules define scope for blocks 
of code.

There are many methods for working with Modules, and whole libraries dedicated to 
it. 

This section will cover the mechanics of modules. How and why they work.

### function scope

Variables defined in a function are scoped to that function that is they **only available
within that function.**

Functions can be be self executing with the following syntax. 

`(function(){ ... })();`

**Why use a module for the shopping cart?** By wrapping the shopping cart methods and 
associated variables in a module we can control which elements are private and which 
are public. 

Items returned from a "module" function become public, while everything else defined 
inside the module function private. 

```
var myCounter = (function () {
    var counter = 0;

    function increment() {
        counter++;
    }

    function decrement() {
        counter--;
    }

    function getCounter() {
        return counter;
    }

    return {
        increment: increment,
        decrement: decrement,
        getCounter: getCounter
    }
})();

myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCounter());

myCounter.decrement();
myCounter.decrement();
console.log(myCounter.getCounter());

// console.log(counter);            // error
// console.log(myCounter.counter);  // undefined
```

## Challenge

- Add a function that displays the cart as a string. Something like: 
> Apple $0.99 x 4 = $3.96
> Banana $1.11 x 3 = $3.33
> Total 7 items $7.29
- Use the Math Object to solve the following challenges
- Map, Filter, Reduce
    - Use map, filter, and reduce to solve your shopping cart challenge
        - Add to cart should use map to create a new cart. 
        - Use Reduce to count total number of objects in cart. 
        - Use Reduce to get the total cost of items in the cart. 
    - Data Challenges - Use Map, Filter, and Reduce to solve more challenges. 
        - Filter
            - All users above age 30
            - All male users between 18 and 30
            - All female users who joined after 2016 (all dates 2017)
            - Imagine the date is a birthday. Find all the users who's birthday is today. 
        - Map
            - Display user Name first and last
            - Display first name and date formatted: mm/dd/yy
            - Display male users as: First, Last, gender, age
            - Display users whos birthday is today as: Happy Birthday firstName lastName
        - Reduce
            - Average the age of all users
        - Extra Challenges 
            - Sort all users by gender
            - Sort all users by age
- Date 
    - Use the Date Object to solve the following challenges

## Schedule 

| What                  | Time |        | Activity   |
|-----------------------|------|--------|------------|
|Intro                  |10 min|  10 min| Talk       |
|Shopping Cart solution |20 min|  30 min| I do we do |
|Break                  |10 min|  40 min| Yoga       |
|JS Date Object         |10 min|  50 min| Talk       |
|JS Math Object         |10 min|  60 min| Talk       |
|Challenge Problems     |60 min| 120 min| Challenges |








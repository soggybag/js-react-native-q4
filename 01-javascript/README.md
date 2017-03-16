# JavaScript - Tutorial

This is a short introduction to JavaScript. 

To cover a range of features of the JavaScript Language you will create a simple 
shopping cart module. The shopping cart will have the following features: 

- Keeps a list of items stored in the cart
    - Each item in cart knows the name, price, and quantity
- Has methods to manage items in the cart 
    - Add item to cart
    - Remove Item from cart
    - Clear cart
    - Get count of items in cart
    - Get total cost for cart
    - List items in cart. This should list items with:
        - Name, price, and quantity
        - Total cost for item of quantity
        
The completed project need only display the results in the console. The system should 
consist of a single JavaScript module that holds a collection, and methods that perform
the operations listed above. 
        
# Creating the example

To follow this example you can create a text file with the .html file extension. 
Wrap all of your JavaScript in the <script> and </script> tags. 

Test your work by opening the file in any web browser and looking at the results in 
the console. 

# Variables

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

Define a variable to hold your shopping cart. 

`var cart = [];` 

This defines a variable with an empty array. 

# Objects 

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

# functions 

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

    cart.push(item);
}
```

Add an item to the end of the array with push().

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

# Managing items in an array

The function above makes it possible to add the same item to the cart more than once. 

`[{id:1, ..., qty: 1}, {id:1, ..., qty: 1}, ...]`

This would be better as: 

`[{id:1, ..., qty: 2}, ...]`

You need to check the items in the cart array for the id of the new item. If this id 
exists you need to increment the qty. If the item doesn't exist add the new item with
a qty of 1. 

There are several solutions to this. I chose map(). 

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

Notice the function defined inside map(). This is an anonymous function, or closure. 
These are really common in JavaScript. Take a close look you will see this often. 

# Removing an item from the cart 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

```
function removeItem(id) {
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

# Reducing cart data

To display the cart we need to calculate the total cost for an item, which is the qty 
times the price. For safety we don't want to pass the cart array to another service
that might inadvertently modify the cart. 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

```
function displayCart() {
    return cart.map(function(item) {
        item.total = item.qty * item.price;
        return item;
    });
}
```

You can use array.reduce() to get the total count of items in the cart. 

```
function getCartCount() {
    var count = cart.reduce(function(acc, item) {
        return acc + item.qty;
    }, 0);
    return count;
}
```

Note! in this case reduce() is iterating through objects! This means the initial value 
must be set! Otherwise the initial value is the first item in the array, which is an 
object rather than an Number! The intial value is the second param to reduce().

**Reduce the total value of the cart.** This requires you multiply the qty and price of 
each item and accumulate the total. 

```
function getCartTotal() {
    var total = cart.reduce(function(acc, item) {
        return acc + item.qty * item.price;
    }, 0);
    return total;
}
```

# Scope and Modules 

- https://developer.mozilla.org/en-US/docs/Glossary/Scope

In JavaScript all variables are global unless they are scoped to a function block. This 
is a big problem with a solution: Modules. Modules define scope for blocks of code. 

There are many methods for working with Modules, and whole libraries dedicated to it. 

This section will cover the mechanics of modules. How and why they work.

# function scope

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










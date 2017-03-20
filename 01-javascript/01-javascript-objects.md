# JavaScript Object Challenges

Objects are a key element in JavaScript. Understanding objects is core to understanding 
JavaScript.

> Objects are collections or properties and methods stored in key value pairs. 

`var obj = {name: "Hello"};`

Objects are dynamic you can add new properties to them at any time: 

`obj.price = 0.99;`

Objects can store values of different types including functions: 

```
obj.description = function() {
    return this.name + " " + this.price;
}
```

## Classes Objects and Instances

JavaScript is Object Oriented but does support class based inheritance. 

You can define a class in JavaScript like this: 

```
function Player(name) {
    this.name = name;
}

var player = new Player("Frango"); // Create an instance of Player. 
```

A class is defined as a function and properties are assigned to `this`. 

You can also define methods in a class but this creates a copy of those methods with each 
new instance. 

**Bad:** The description method is copied for each instance!

```
function Player(name) {
    this.name = name;
    this.description = function() {
        console.log("Player:"+this.name);
    }
}

var player1 = new Player("Frango"); // Create an instance of Player. 
player1.description(); 

var player2 = new Player("Random"); // Create an instance of Player.
player2.description();
```

**Good:** This time both instances call the same single copy of the description method that 
exists in prototype chain of the Player class. 

```
function Player(name) {
    this.name = name;
}

Player.prototype.description = function() {
    console.log("Player:"+this.name);
}

var player1 = new Player("Frango"); // Create an instance of Player. 
player1.description(); 

var player2 = new Player("Random"); // Create an instance of Player.
player2.description();
```

## Protype inheritance

JavaScript uses prototypical inheritence. When a method is called on an object we look for 
the method on the object, if the method does not exist we look at the object's prototype
property for the method. 

## Challenges

You can try the following challenges by writing JS to output tests to the console. 
Yout goal is to create an RPG game. Really you'll just define some characters that can 
be played. They need to share properties but also have class abilities and unique 
abilities. 

- Define a class for Fighter. Fighter is our base class. They define properties that all
other classes share. This class should have: 
    - name
    - hitpoints
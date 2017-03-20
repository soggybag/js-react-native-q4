# Intro - JavaScript React Native 

React Native is an exciting technology that you can use to create native apps for 
Android and iOS using a single code base written in JavaScript.

**To get the most out of React Native you will need to understand JavaScript.**

As a beginning step you should assess your skill level with JavaScript. Try to 
solve the following problems. If you don't understand the some of the concepts 
in the problems don't worry, just try and solve the problems to the best of your
ability. 

Your work should only print output to the console. You do not need to 
write any HTML or CSS (unless you want to, and have time to finish in class). 

- Write a module that acts as a shopping cart, providing the following features: 
    - Keeps a collection (the cart) of items, each with an id, name, price, and quantity
    - Provides a method to add items to the cart
        - Increase the quantity of an existing item or add a new item with a quantity of 1
    - Provide a method to remove an item from the cart
    - provide a method that writes a description of the cart to the console
    - Provide a method that returns the total cost of items in the cart
    
Your work should produce results somethinglike this:

```
shoppingCart.addItem(1, 'Pencil', 1.99, 1); // Adds a new item to the cart
shoppingCart.addItem(1, 'Pencil', 1.99, 1); // Should up the quantity for this item
shoppingCart.addItem(2, 'Apple', 0.99, 1);  // add another item to the cart
shoppingCart.addItem(3, 'Banana', 1.10, 1); // etc. 
shoppingCart.addItem(4, 'Shoe', 11.99, 1);
shoppingCart.addItem(4, 'Shoe', 11.99, 1);  // Should have 5 items with total count of 6
shoppingCart.removeItem(1); // Removes and item from the cart with id 1 should decrease the quantity
shoppingCart.removeItem(1); // Should remove the item when quantity is 0. 

console.log(shoppingCart.getCartCount()); // displays 4
console.log(shoppingCart.getCartTotal()); // displays 26.07 

console.log(shoppingCart.displayCart());  
/* displays: 
Apple 0.99 x 1 = 0.99
Banana 1.1 x 1 = 1.1
Shoe 11.99 x 2 = 23.98
*/
```
    
## Challenge 

Try your best to build as much of the shopping cart described above. This is an exercise
that should take an hour. Don't over build. This is also meant as a self assessment use to 
give yourself a measure of your current skill level with JavaScript. 

If you are not familiar with JavaScript you may not finish the problem which is ok. 

If you are new to JavaScript or find the challenge difficult don't worry we will be covering 
more JS in class. You should practice your JavaScript skills outside of class. 

Try these resources to build your JS skills. 

- http://www.learn-js.org
- https://www.codecademy.com/learn/javascript 

## Schedule 

| What            | Time |        | Activity   |
|-----------------|------|--------|------------|
|Intro            |10 min|  10 min| Talk       |
|Challenge Intro  | 5 min|  15 min| Q & A      |
|Challenge        |60 min|  75 min| Challenge! |
|Break            |10 min|  85 min| Meditate   |
|Challenge Review |30 min| 115 min| We Do      |
|Review project   | 5 min| 120 min| Talk       |



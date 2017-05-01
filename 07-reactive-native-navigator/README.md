# React Native - Navigator

React Native provides the ability to navigte between scenes. In this case I'm describing
scenes that will take up the whole screen. Scenes are always a component of some kind.
The Navigator component to swap one scene for another and keeps a history of the changes. 

## Navigator vs NavigatorIOS

React Native supplies a Navigator component to manage navigation. There are two versions:

- Navigator - works on both Android and iOS
- NavigatorIOS - only works on iOS provides better performance on iOS

# Navigator 

Navigator is a component that displays other components. Rather than adding child 
components/scenes as you would with normally, instead with Navigtor you will supply 
Navigator with an array of routes, and a handler to render those scenes: 

`renderScene(route, navigator)`

This method receives a route and a reference to the Navigator object. The idea is to 
use the route object to determine which component to render as the new Scene, and use 
the navigator object to display the scene. 

# Routes 

Routes are JavaScript objects that describe a scene to display. These are simple objects 
that you define. They have no special characteristics, only what you define. 

Use routes to describe what should be shown. 

# Navigator object and History

The navigator object acts as an array which holds your navigation history. You will 
display a new scene by pushing a new component, or return the previous scene with
pop. 

`navigator.push(route)`

or 

`navigator.pop()`

You can also manipulate routes in other ways. 

## Initial route

Navigator requires an initial or root scene. You must configure with an initial route. 
Set this as a prop on Navigator. 

`<Navigator initialRoute={someRoute}>`

## Rendering a route

The Navigator component requires that you define a renderScene prop. This is a method
that receives a route and navigator as parameters. The renderScene method should 
return a JSX component that will be displayed by Navigator as the next scene. 

You use the route object and navigator to determine the next scene.

# Strategies 

Here are a couple strategies you might employ when using Navigator. 

## Configure a single component 

You can use a single component to display different info by configuring the component 
with info supplied via the route object. 

## Displaying several different components.

Use information contained in the route to determine which component to display. The 
route might even contain the component as a property. 

## Challenges

- Use Navigator to create a series of scenes that are displayed in sequence by tapping 
a Next button. 
    - Add a Back button that navigates to the previous page. 
- Create a list of cells in one view and a detail view. Tapping a cell should display 
the detail view. 
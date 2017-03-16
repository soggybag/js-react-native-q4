# React Native

React Native combines React with a native compiler to create native apps from your 
JavaScript code. 

React and React Native were produced at Facebook. Read what they have to say about here:

- https://facebook.github.io/react-native/

## Installation 

You'll need to install some command line tools to work with React Native. 

You will need to install Node JS, and Homebrew. Follow the instructions here: 

- https://nodejs.org/en/
- https://brew.sh

Follow the instruction here: 

- https://facebook.github.io/react-native/docs/getting-started.html#content

## Initialize a new project 

Use the command line to create new projects with: 

```
react-native init MyProject
```

This creates a project named myProject. 

To run your project navigate the directory, and use: 

```
cd MyProject
react-native run-ios
```

The first time you run your project it may take some time build. 

Once the project is running you can make changes to the source js files and start the 
project over again **without** having to rebuild, just use: 

`Command + r`

This makes a nice work flow. Edit your JS then "Refresh" (Command+r) in the simulator. 
Often this is faster than rebuilding the project. 

## Errors and Debugging

If you have a syntax error the project will not build and the Screen will display 
red with an error message and a stack trace. You can use the error message for tracking 
problems. 

You can also log messages to the console using Chrome. In the simulator hit:

`command + d`

This should open an action sheet with some options. Choose 

> Debug JS Remotely

This should open Chrome with the server connected to your React Native project. Open
the Console with

`command + option + j`

or choose: View > Developer > JavaScript Console. 

You can monitor output to the console here. You write to the console for your js files 
with: 

`console.log("Hello Console!")`

# Challenges 

To get a feel for making apps with React Native try making a couple simple apps.
When working with React Native you will not be using Storyboard. Instead you will 
layout all of your visual elements with code. 

The first example app will stick to a single screen. We will cover navigation in a later
lesson. 

## Make a stopwatch 

This might seem simple for some. Starting with a simple app will let you focus on the 
way React Native works, get a feel for building components and composing with components.

> Think of this as a programming challenge rather than something to show. 

To complete this project you will need to use the following tools. 

- setInterval()
- Date()
- React Components
    - Text
    - Button
    - View
- Styles 
    - Flex
    - justifyContent
    - alignItems
    - fontSize
    - color
    - backgroundColor
    - fontWeight

The timer should provide the following functions: 

- Displays the time as MM:SS
- Start/Pause button

Apply your best judgment to the to the design and layout of your project. 

### Stopwatch stretch challenges

- Add pause button
- Make an egg timer. This should count down from a set time and flash the screen and or 
make a sound when the timer reaches 0. 
- Make a pomodoro timer. Read more about it here: 
https://en.wikipedia.org/wiki/Pomodoro_Technique
- Build the App for Android...



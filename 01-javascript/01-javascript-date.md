# JavaScript - Date

JavaScript provides a core object type for working with dates and times the Date Object. 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

Make a new Date Object like this: 

```
var date = new Date(); // A date object for the current date and time
console.log(date); // Sun Mar 19 2017 16:59:48 GMT-0700 (PDT)
```


The JavaScript Date object tracks time in milliseconds.
When creating a date from a Unix Timestamp you'll 
need to multiply by 1000.

```
var utc = 1473818524;
var date = new Date(utc * 1000);
console.log(date); // Tue Sep 13 2016 19:02:04 GMT-0700 (PDT)
```

With the date object you can get the current day and 
time. Create a date object representing any day and 
time. 

The Date object has methods to return all components of
a date and time. This would be:

- Year - `date.getYear(); // 117`
- Month - `date.getMonth(); // 2`
- Day - `date.getDay(); // 0`
- Date - `date.getDate(); // 19`
- Hours - `date.getHours(); // 16`
- Minutes - `date.getMinutes(); // 59`
- Seconds - `date.getSeconds(); // 48`
- Milliseconds - `date.getMilliseconds(); // 243`

These dates for: 

> Sun Mar 19 2017 16:59:48 GMT-0700 (PDT)

## Challenges 

- Calculate todays date and display it in the console.
- Format todays date as **mm/dd/yyyy** and display it in the console. 
- Write a function that takes a date and displays a formatted date as a string.
- Write a function that takes timestamp and returns a date timestamp: 134570929 and returns a formatted date string.
- Find your age by getting the difference in your birthdate and the current date.
 


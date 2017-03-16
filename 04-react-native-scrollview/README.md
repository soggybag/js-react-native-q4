# React Native Weather App

This second app will expand on what was covered previously. 

- Network requests with fetch()
- navigator.geolocation()
- ScrollView
- Image
- Date() 

The goal of this project is to display the weather data from https://darksky.net/

Your app should get the get the current location suer location pass this on to the 
darksky API, receive and parse the JSON response, and display the weather data on the 
screen. 

Your app should display current weather data including: 

- Date and Time
- Temperature
- Summary 
- Clouds 
- Percipitation
- icon (an image representing the weather)

## Challenges 

Once you have the base app features working try extending your app with these challneges.

- Display other data for other features. Choose a few from the list. 
    - nearestStormDistance
    - precipIntensity
    - precipIntensityError
    - precipProbability
    - precipType
    - apparentTemperature
    - dewPoint
    - humidity
    - windSpeed
    - windBearing
    - visibility 
    - cloudCover
    - pressure
    - ozone
- Display the Daily weather data. Use the ScrollView to make data that overflows the 
visible area. 
- Set the background color based on Temperature (choosing a color based on temperature is hard than it sounds)
- Use an API other than Darksky. Keep the scope narrow to just displaying data for now. 
- Build the app for Android...

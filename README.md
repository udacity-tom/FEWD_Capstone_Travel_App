# FEWD_Capstone_Travel_App Trip Manager

Front End Web Developer Nanodegree, Create an App To Collate and Manage Trips


## Introduction/Usage 

This project had a higher level of complexity than previous projects, more challenging in scope, app operation and project expectations and outcomes This was the capstone project of the Udacity Front End Web Developer Nanodegree. All the skills taught during the course (Javascript, Node, web development skills, etc) are utilised to create a functional Web App which creates a catalogue of 'trips'. The web app uses asynchronoous node based API calls to feed search results to the front-end and integrate the display of the information in a simple, clear display.


![Image of Summary Screen with two trips open](/master/readme-media/2021-05-07_Trip_Summary.png)



## Web APP Functionality

The web app accepts a starting location, a final location as well as departure and return dates as inputs. API information is collected on the server during input and used to create a simple list of planned trips, together with a summary of the trip details.  The user can add additional trips, delete individual, or all, trips, check the current departure date, the duration of the trip, the days until trip departure, as well as review the current location weather and a 7-day weather forecast for their destination. Location specific images links from [Pixabay.com](https://www.pixabay.com) are retrieved on the node server after a location has been selected.

API results provide additional information which is saved in the browsers local Storage as a set of trip objects. the app can be extended/enhanced by utilsing this data. For example, information is included in the 16 day  forecasts from [Weatherbit.io](https://www.weatherbit.io/) (wind speed and direction, precipitation, moon rise & set time, ozone & UV levels, etc) for both starting and final locations and additional data from [Geonames.org](https://www.geonames.org/) (local names, municipality information, etc) or an alternative API e.g. restcountries.eu contains much more country specific information.
(Suplementing the existing API data on the server with an additional API for flight prices/hotels/etc would also be possible without any major code refactoring. )


### Web APP Additional Features
- Add end date and display length of trip
- Pull in country image from Pixabay API when city location doesn't exist
- Allow user to remove trip
- Use Local Storage to save data
- Pull forecast for multiple days
- Incorporate icons into forecast
- Allow user to add additional trips
- Automatically sort trips by countdown
- Style change expired trips so it's clear it's expired
(-use session storage for building trip details object)


## Installation, Environment Setup & What's Installed

Clone the repository and make sure node and npm are installed in your local dev environment.
Install the relevant packages with the [node package manager](https://docs.npmjs.com/).
After installing the basic packages in a terminal run the following scripts from a terminal: 

* `npm run start`
This will initiate the node server to run on the default port (Currently set at 8081)
* `npm build-prod`
Will build the distribution folders according to the webpack production configuration (/dist)
* `npm build-dev`
A working copy of the development build will be run on the webpack dev server and opened in the default system browser

Additionally, valid API keys need to be placed in .env on the node server to allow API access.


## Technologies Used

No external UI-frameworks are used, front-end display elements use HTML fragments which means fast reflows and repaints, this makes the site fast to load and run. Axios is used for API connections from the Node server to external APIs and also between browser and the node server. 

JS code has been written to be as re-usable and DRY as possible. For example when the user creates a trip, user results are saved in a session storage object using a single JS inferface utilising Object keys, allowing property abstraction. Most of the code has been segmented into functional units AFAP to encourage maintainability.

The node endpoints use API calls constructed using interpolated template literals so the same API calls could request different API endpoints. For example, extending the Weatherbit API to include a 24hr weather report would utilise the same code base with an argument rather than re-writing or writing another piece of code.

A set of simple Jest tests (27) have been made for the app and the server which tests aspects of the functionality.

- Pure Javascript (async, axios, wait, etc in a modular design)
- Node (asynchronous endpoints for API access)
- Webpack (for development & production purposes for configuration/optimisation)
- Jest (for JS testing)
- Service Workers (for offline viewing of the webpage)
- Basic Error handling (pro-active data verification at input is preferred and used)
- HTML/SASS/CSS/DOM Manipulation (including HTML Fragments, Flexbox, media queries, etc)


## About Udacity's Front End Developer Nanodegree

The goal of the Front End Web Developer Nanodegree program is to equip learners with the unique skills they need to build and develop a variety of websites and applications. Graduates of this Nanodegree program will be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. Students will also build competency automating application build and deployment using Webpack and improving offline performance of websites using Service Worker. [Udacity Front End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)
# FEWD_Capstone_Travel_App Trip Manager

Front End Web Developer Nanodegree, Create an App To Collate and Manage Trips


## Introduction/Usage 

This was a fun project with a significantly higher level of complexity than previous projects. Although much more challenging in scope, app operation and project expectations and outcomes, I enjoyed the challenge this project presented. I would of preferred to spend more time on the UI than I was able to and additional refactoring would of allowed a more structured codebase. As a web app, it illustrates only the necessary first steps towards building a robust web-app.

This was the capstone project of the Udacity Front End Web Developer Nanodegree. 
All the skills taught during the course (Javascript, Node, web development skills, etc) are utilised to create a functional Web App to create a catalogue of 'trips'.

The web app uses asynchronoous Node based API calls to feed through to the front-end and integrate the display of the information in a simple, clear display.



## Web APP Functionality

The trips-app accepts a starting location, a final location and departure and return dates as inputs. 
Information from APIs are collected on the server and then used to create a simple list of planned trips together with a summary of the planned trips.

The user can add additional trips, delete individual, or all, trips, and check the current departure date, see the duration of the trip and the number of days until the trip departure, as well as review both the current location weather and a 7-day weather forecast for their destination, which includes hover effects with a weather description.
A location specific image from [Pixabay.com](https://www.pixabay.com) is automatically downloaded in the background for both the starting and final locations.

API results provide additional information which has been sotred as part of the trip objects allowing the simple app to be extended/enhanced by utilsing the data already stored but not yet displayed. For example, additional information is included in the 16 day full featured forecasts from [Weatherbit.io](https://www.weatherbit.io/) (wind speed and direction, precipitation, etc) for both starting and final locations and additional data from [Geonames.org](https://www.geonames.org/) (populations, municipality information, ect). 
Suplementing the existing API data on the server with an additional API for flight prices/hotels/etc would also be possible without any major code refactoring. 



## Installation, Environment Setup & What's Installed

Clone the repository, make sure node and npm is installed in your local dev environment.
Install the relevant packages with the [node package manager](https://docs.npmjs.com/).
After installing the basic packages in a terminal run the following scripts: 

* `npm run start`
This will initiate the node server to run on the default port (Currently set at 8081)
* `npm build-prod`
Will build the distribution folders according to the webpack production configuration (/dist)
* `npm build-dev`
A working copy of the development build will be run on the webpack dev server and opened in the default system browser


## Technologies Used

No external UI-frameworks are used, all front-end display elements are created using HTML fragments in javascript which means reflows and repaints are minimal, making the site fast.
Axios is used for API connections from the Node server to external APIs and also between front and back-ends. 

JS code has been written to be as re-usable and DRY as possible. For example on the front-end as the user creates a trip, ALL 'user-results' are written to a JS object in the browsers session storage using a single JS inferface code which utilises ES6 Object keys. All the code has been segmented into functional units to encourage maintainability.

The Node endpoints use URL API calls which are constructed on the fly so that using the same code API calls could be extended to include a diverse range of API calls based on demand. For example, extending the Weatherbit API to include a 24hr weather report would utilise the same code base with an extended argument rather than re-writing or writing another piece of code.

- Pure Javascript (async, axios, wait, etc in a modular design)
- Node (asynchronous endpoints for API access)
- Webpack (for development & production purposes for configuration/optimisation)
- Jest (for JS testing)
- Service Workers (for offline viewing of the webpage)
- Basic Error handling (pro-active data verification at input is preferred and used)
- HTML/SASS/CSS/DOM Manipulation (including HTML Fragments, Flexbox, media queries, etc)


## About Udacity's Front End Developer Nanodegree

The goal of the Front End Web Developer Nanodegree program is to equip learners with the unique skills they need to build and develop a variety of websites and applications. Graduates of this Nanodegree program will be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. Students will also build competency automating application build and deployment using Webpack and improving offline performance of websites using Service Worker. [Udacity Front End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)
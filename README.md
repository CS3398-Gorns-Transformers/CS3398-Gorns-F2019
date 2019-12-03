# CS3398-Gorns-F2019

# Transformers Hiking App
>  This App will give general information about hiking. It will include Austin hiking conditions, Austin water levels, and Austin weather conditions.

## Description
> Team Members: Andrew Baker, Daniel Greenberg, Nickson Mbwavi, Liliane Nzukou, Paxton Scott
  
 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

+ You will need an IDE, [VSCode](https://code.visualstudio.com/) is preferred.

## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* [Ionic](https://expressjs.com/) - The web framework used
* [Java](https://www.mongodb.com/) - Database management
* [TypeScript](https://nodejs.org/en/) - JavaScript runtime environment
* Ionic Framework - version 4.0
* Java - version 9.0
* HTML - version 5.0
* CSS version 3.0

## Deployment

Transformers Hiking is very easy to install and deploy in a Docker container.

Docker will expose port 3000, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd TransformersHikingApp
docker build -t transformersHiking .
```
This will create the transformersHiking image and pull in the necessary dependencies. Be sure to include '.' at the end of the Docker build command.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 3000 of the host to port 3000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -p 3000:3000 transformersHiking
```

Verify the deployment by navigating to your server address in your preferred browser.

```
http://localhost:3000
```


## Installing
1)  https://nodejs.org/en/ and install latest version of Node.js.
2)  Inside terminal or Command Run "npm install -g ionic"
3)  Upload code into directory
4)  Enter directory in CLI and run "ionic lab" for App version and "ionic serve" for webserver.


```sh
npm install standard --global
```

## Features
List of features ready and TODOs for future development
* Austin hiking conditions
* Austin water levels
* Austin weather conditions

To-do list:
* Add unit testing
* 

## Status
Project is: _In Progress_ - We are in the begining states of app development focusing mainly on front end development until we have a product to test against a back end.

* ![status](https://img.shields.io/badge/Paxton's-Status-blue) : Completed rough UI 
* ![nextsteps](https://img.shields.io/badge/Paxton's-Next%20Steps-brightgreen) : Working on backend for water level UI
* ![status](https://img.shields.io/badge/Liliane's-Status-blue) : Working on Clickable Google maps coordinates.
* ![nextsteps](https://img.shields.io/badge/Liliane's-Next%20Steps-brightgreen) : Adding Google maps coordinates like latitude, 
  longitude, and altitude on the app.
* ![status](https://img.shields.io/badge/Daniel's-Status-blue) : Creating code to compute estimated time for walk on a hiking trail.
* ![nextsteps](https://img.shields.io/badge/Daniel's-Next%20Steps-brightgreen) : Figuring out average speeds for walking, jogging, and biking.
* ![status](https://img.shields.io/badge/Nickson's-Status-blue) : Working on front end for user friendly UI.
* ![nextsteps](https://img.shields.io/badge/Nickson's-Next%20Steps-brightgreen) : Completing adding UI features.
* ![status](https://img.shields.io/badge/Andrew's-Status-blue) : working on overlaying tab menu at the bottom of the app.
* ![nextsteps](https://img.shields.io/badge/Andrew's-Next%20Steps-brightgreen) : Completing the creation of overlaying tab menu at the bottom of the app to help with a main form of routing for users.

## Achievements
 * Andrew Baker: -Successfully Implemented Geolocation to feed into OpenWeather API and return subsequent data.
                -Implmented Google Maps API and set up User Interface and themeing of app.

## Documentations
* [Sketch of App Appearance](./Appearance.jpg)
* [Sketch of Feature Hierarchy](./FeatureHierarchy.jpg)
* [List of Search Filter Criteria](./SearchFilters.jpg)
* [Sketch of Weather Panel Appearance](./Weather.jpg)
* [Sketch of clickable map](./ClickableMap.png)
* [UI - Sprint 2](./ui.png)


## Inspiration
Project inspired by Andrew Baker

## Contact
Andrew Baker -- asb104@txstate.edu
Daniel Greenberg -- dmg143@txstate.edu
Nickson Mbwavi -- nlm64@txstate.edu
Liliane Nzukou -- ldn24@txstate.edu
Paxton Scott -- pas151@txstate.edu

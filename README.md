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
In VSCode, install StandardJS

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
Project is: _in progress_, _finished_, _no longer continue_ and why?

## Inspiration
Project inspired by Andrew Baker

## Contact
Andrew Baker -- asb104@txstate.edu
Daniel Greenberg -- dmg143@txstate.edu
Nickson Mbwavi -- nlm64@txstate.edu
liliane Nzukou -- ldn24@txstate.edu
Paxton Scott -- pas151@txstate.edu

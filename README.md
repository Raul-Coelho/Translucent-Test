# Translucent Computing - FullStack Test

Web application developed in order to manage your game catalog.

## Used Technologies

For development, ReactJs with Typescript was used on the front-end with Material UI to build the UI, following the Material Design specifications for Theme and Responsiveness. React-Redux and Redux-Saga were used for data and request management.

To make the backend, Java was used with Spring Boot to create a REST API. we used a Docker container for our database and to deploy the application as well. The application has been Dockerized and documented with Swagger. You can access by following the next steps.

# How To Excecute - Application

## Before Excecute

Initially, make sure you have Maven, Docker and Docker-Compose installed on your machine. If not, below is some information on how to install them.

For linux, use this commands:

### Maven
```
sudo apt install maven 
```
This will show the Maven Apache version installed.
```
mvn -version
```
### Docker

You can find how to install Docker easily in this Repository developed by us.

<a href="https://github.com/MailsonD/devironment/tree/master/ferramentas/Docker">DEVIROMENT - DOCKER</a>

### Docker Compose

You can find how to install Docker-Compose in official Documentation.

<a href="https://docs.docker.com/compose/install/">Docker Compose</a>

## Swagger

About the API documentation, after the application is started you can find the end-point documentation in <a href="http://localhost:8080/swagger-ui.html">SWAGGER-UI </a>


## Excecution

As the application is Dockerized using Docker-Compose, I made the execution a little easier by creating a Script for execution.

On your first run you will need to start `CreateFirstTime.sh`. Then enter the project root and run the command in your terminal:

### Create First Time

```
sh CreateFirstTime.sh || ./CreateFirstTime.sh
```
#### `This way the script will create the images and containers needed to run the application.`

After this first creation, the application can be started with the `Start.sh` script and stopped with `Stop.sh`.
### Start

```
sh Start.sh || ./Start.sh
```
### Stop

```
sh Stop.sh || ./Stop.sh
```
## How To Excecute - Tests


```
cd back-end
```

```
mvn test
```
## Considerations

The application's responsiveness was based on the SideMenu component, it was necessary to modify this component so that it behaved as it was properly thought of in the prototyping process. The SideMenu if component was modified by me so that its behavior is relatively similar to the behavior of youtube. The application is not relying on test front-end with Jest, this part has not been finished.

The application has been dockerized to facilitate the process of managing development environments. Using docker compose to control docker containers (front-end, back-end and Database).

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FHmFPaCaxYMJB9RUqB8pCMx%2FFigma-Material-Design-UI-Game-Catalog-TC%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

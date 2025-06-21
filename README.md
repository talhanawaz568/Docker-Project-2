# Welcome to the Docker-Project-2
## Project Title: Dockerized Node.js App Serving a Professional Tech Website Interface with Environmental Variables and Volumes 

## Project Overview
- In this Project you will build the node.js app with a professional web page that will be containerized 
- Normally when container stop all of its data also vanished but we will mount on our local system that collect the logs and also available even the container is killed
- Also using Environmental variable in this Project as a separate file to make changes in app messages or port

## Instructions to perform this project 
- The first step is to build the node js app for the interactive interface of your web app as i have provided the complete code for app.js 
- Next create the env file as given in my repo also this env will help to change any message on the web app or the port 
- Next is to install the dependencies for that you can run npm install command or get it from my repo 
- Now after all the things are setup all the dependencies and the app and env file, create the dockerfile given in my repo 
- Build the image using this command (docker build -t nextgen.app .)
- Build the container from the image (docker run -p 3000:3000 -v(pwd)/logs:/usr/app/logs –env-file .env nextgen.app:latest)
- The last command is persisting the logs create a directory in your project directory named logs and this will save the logs in the output.txt in this directory

## Learning outcomes 
✅ Created a full Express.js app without any frontend files all HTML served from app.js
✅ Used .env to make message and port configurable
✅ Built and ran a Docker container using a clean Dockerfile
✅ Mounted persistent volumes to store logs outside the container
✅ Implemented request logging with timestamps into logs/output.log
✅ Tested the app locally and in a Dockerized environment 

Thank You

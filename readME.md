# Project Creation

***

## Project Initiation
First you will need to initialize/create the application. Create the directory where you would like this to live. Once you are in your new directory: 

***

### Global Creation
1. install express generator ```npm i express-generator -g```  
    - This sets it globally, only need to run once on your computer
    - This  will only need to be done once on your machine

***

### Project Framework
1. Start your project ```express "project-name-here" --view=ejs```
    - Express will create the framework / skeleton of your project
    - The package.json file will have dependencies list but will not install the dependencies  
1. cd into the project directory
1. Run  ```npm i```
    - Node will initiate the project and download dependencies
1. Run  ```code .```
    - This will open VS Code
1. BONUS
    - ./bin/www line 28, add
        > ```console.log("Server is live on port " + port)```
    - This will give you a message in terminal when you start your server
1. Run  ```nodemon```
    - This will start your project

***

### Verify Creation
1. Open your internet browser and go to [localhost 3000](http://localhost:3000/)
    - You should be presented with a page saying "Express  Welcome to Express"
    - Your project has started successfully

***

### Remove Code that you do not intend to use
This project will ultimately be an API backend and will not need a View Engine.Therefore will not be using EJS in this project. 
1. Comment or delete out lines:
    - 3
        > ```var path = require('path');```
    - 12, 13, 14
        > ```// view engine setup```
        >
        > ```app.set('views', path.join(__dirname, 'views'));```
        >
        > ```app.set('view engine', 'ejs');```
    - 20
        > ```app.use(express.static(path.join(__dirname, 'public')));```
1. Remove file paths:
    - ./public
    - ./views
1. Run  ```npm uninstall ejs```
    - This will uninstall EJS from your project
1. Verify view engine removed
    - Attempt to go to [localhost 3000](http://localhost:3000/)
    - Should receive an error in the browser
1. Change the index.js from render to JSON
    - Line 6
        > ```res.json({ index:"This is the index path" });```
    - Route will show as a JSON now
    - do for all res.render (no longer can render without view engine)
1. Change ```var``` to ```const```
    - var is less proper and adjustable
    - const means it cannot be changed

***

## Database
At this point we will be adding the db to our project. This project will be using Mongo db

***

### Mongoose
1. Run  ```npm i mongoose```
    - Node will install Mongoose

### Create Routers

1. Inside of ./routes
    - Create a folder called users
    - Drag users.js into ./routes/users
    - rename users.js to usersRouter.js
    - inside ./routes/users create 2 new folders
        - controller
        - model

### Create Model

### Install Mongo DB
```
const mongoose = require('mongoose');
mongoose
	.connect("mongodb://localhost:27017/new-project-demo")
	.then(() => {
		console.log("MONGODB CONNECTED");
	})
	.catch((e) => {
		console.log(e);
	});
```
***
***
***
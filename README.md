# Node-js-tutorial-app

### Assignment

1: Using express generator and generate an express app.

2: Give it a name of Nodejs Tutorial app

3: Install the following npm packages, nodemon, expressJs, body-parser
Installed using npm i nodemon, npm i express, and npm i body-parser

4: Using request params, add a user object to the request, the object should have a the following keys, name, age, sex, Return the user object as a json object as a response

const express = require("express");

const app = express();

app.get("/user/:name/:age/:sex", (req, res) => {
const { name, age, sex } = req.params;
res.json(userObject);
});


const express = require("express");

const app = express();

app.get("/user/:name/:age/:sex", (req, res) => {
const { name, age, sex } = req.params;
res.json(userObject);
});

app.listen(4000, () => {
    console.log("App is working on port 4000");
  });
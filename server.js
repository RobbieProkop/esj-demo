const express = require("express");
const app = express();
const PORT = 8080;

// set the view engine to ejs
app.set("view engine", "ejs");

//use res.render to load up an ejs view file
// res.render will look in a views folder for the view

//index page
app.get("/", (req, res) => {
  res.render("pages/index");
});

//about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

//choose which port to listen to
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

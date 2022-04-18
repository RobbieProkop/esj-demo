const express = require("express");
const app = express();
const PORT = 8080;

// set the view engine to ejs
app.set("view engine", "ejs");

//use res.render to load up an ejs view file
// res.render will look in a views folder for the view

//index page
app.get("/", (req, res) => {
  const mascots = [
    { name: "John", organization: "AVF", birth_year: 2012 },
    { name: "Billy", organization: "Linux", birth_year: 1996 },
    {
      name: "Bob",
      organization: "Nepal Life Improvement Foundation",
      birth_year: 1994,
    },
  ];
  const tagline =
    "No programming concept is complete without a cute cat mascot";

  res.render("pages/index", {
    mascots: mascots,
    tagline: tagline,
  });
});

//about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

//choose which port to listen to
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

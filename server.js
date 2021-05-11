const express = require("express");
const app = express();
const routes = require("./routes")
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  app.use(routes);


  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
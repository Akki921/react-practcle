//db connection on local

const mongoose = require("mongoose");

const mongoURI =
  "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const coonectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to mongo succesfully");
  });
};
module.exports = coonectToMongo;

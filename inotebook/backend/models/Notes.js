const mongoose = require("mongoose");
const { StrictMode } = require("react/cjs/react.production.min");
const { Schema } = mongoose;
//adding schemas from mongoosejs.com dcs/schs
const NotesSchema = new Schema({
  user: {
    //linnk the user id from user cause only  user gets his notes
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    require: true,
  },
  discription: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// convering schemas in to model
module.exports = mongoose.model("notes", NotesSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

//adding schemas from mongoosejs.com dcs/schs
const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// convering schemas in to model
const User = mongoose.model("user", UserSchema);

module.exports = User;

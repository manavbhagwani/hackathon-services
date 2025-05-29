const mongoose = require("mongoose");
const config = require("../config");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(config.mongo.userCollectionName, UserSchema);

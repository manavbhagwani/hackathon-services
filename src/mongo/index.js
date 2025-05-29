/* istanbul ignore file */
const config = require("../config");
const mongoose = require("mongoose");

mongoose.connect(config.mongo.uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  autoIndex: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("info", "MongoDB database connection established successfully");
});

connection.on("error", (err) => {
  console.error("Connection Error: ", err);
});

module.exports = {};

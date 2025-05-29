require("dotenv").config();

const load = (key, defaultValue = null) => {
  if (!process.env[key]) return defaultValue;
  return process.env[key];
};

module.exports.envs = {
  local: "local",
  prod: "prod",
};

module.exports.env = load("NODE_ENV", "local");

module.exports.business = {
  email: load("BUSINESS_EMAIL_ID"),
  password: load("BUSINESS_EMAIL_PASSWORD"),
};

module.exports.port = load("PORT", 9000);

module.exports.mongo = {
  uri: load("MONGO_URI"),
  userCollectionName: "user",
};

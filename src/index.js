const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const v1ApiRoutes = require("./routes");
const config = require("./config");
const logger = require("./middleware/logger");
const errorRoutes = require("./routes/error");
const cors = require("cors");
require("./mongo");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  optionsSuccessStatus: 200, // support for IE preflight request.
  origin: config.originWhitelist,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(logger);
app.use("/v1", v1ApiRoutes);
app.use(errorRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(config.port);

module.exports = app;

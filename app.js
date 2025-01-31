const express = require("express");
const router = require("./src/routes/api");

const app = new express();

const bodyParser = require("body-parser");

//security middlewares import
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const xss = require("xss-clean");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

//database import
const mongoose = require("mongoose");

//security middlewares implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// body parser implement
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//request rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

//database connection
let URL =
  "mongodb+srv://<username>:<password>@cluster0.uxwoc8j.mongodb.net/inventory?w=majority";
let options = {
  user: "saadrupai97",
  pass: "nisaad1703069",
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(URL, options).catch((err) => console.log(err));

//routing
app.use("/api/v1", router);

//undefined route
app.use("*", (req, res) => {
  res.status(404).json({ status: "Falied", data: "Not Found" });
});

module.exports = app;

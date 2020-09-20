const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const route = require("./api/routes/poll");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
//     return res.status(200).json({});
//   }
//   next();
// });
app.use("/", route);
dotenv.config();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    server.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });

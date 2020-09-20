const express = require("express");
const route = express.Router();
const pollController = require("../controllers/poll");

route.get("/", pollController.getPollList);
route.post("/create", pollController.createPoll);
route.delete("/delete", pollController.deletePoll);
route.patch("/update", pollController.updateVote);

module.exports = route;

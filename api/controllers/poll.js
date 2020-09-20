const Poll = require("../models/poll");

module.exports = {
  // get all polls
  getPollList: async (req, res) => {
    const polls = await Poll.find().sort({ createdAt: "desc" });
    res.status(200).json({
      polls,
    });
  },
  //   create a new poll
  createPoll: async (req, res) => {
    if (req.body) {
      const newPoll = {
        ques: req.body.ques,
        ansA: req.body.ansA,
        ansB: req.body.ansB,
        voteA: 0,
        voteB: 0,
        createdAt: new Date().toISOString(),
      };
      const result = await Poll.create(newPoll);
      res.status(200).json({
        message: "created poll",
        poll: result,
      });
    }
  },
  //   delete a poll
  deletePoll: async (req, res) => {
    const id = req.body.id;
    await Poll.deleteOne({ _id: id });
    res.status(200).json({
      message: "Deleted successfully",
    });
  },
  //   cast vote
  updateVote: async (req, res) => {
    const id = req.body.id;
    const voteFor = req.body.voteFor;
    const poll = await Poll.findById(id);
    if (poll) {
      if (voteFor === "A") {
        poll.voteA++;
      } else {
        poll.voteB++;
      }
      await poll.save();
      res.json({
        message: "updated",
      });
    }
  },
};

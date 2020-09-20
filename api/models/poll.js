const { model, Schema } = require("mongoose");

const pollSchema = new Schema({
  ques: { type: String, required: true },
  ansA: { type: String, required: true },
  ansB: { type: String, required: true },
  voteA: { type: Number, required: true },
  voteB: { type: Number, required: true },
  createdAt: { type: String, required: true },
});

module.exports = model("Poll", pollSchema);

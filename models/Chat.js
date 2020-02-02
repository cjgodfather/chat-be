const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  user1: {
    type: mongoose.ObjectId,
    ref: "User"
  },
  user2: {
    type: mongoose.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Chat", ChatSchema);

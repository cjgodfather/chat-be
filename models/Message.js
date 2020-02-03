const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String
  },
  sender: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true
  },
  chatId: {
    required: true,
    type: mongoose.ObjectId,
    ref: "Chat"
  }
});

module.exports = mongoose.model("Message", MessageSchema);

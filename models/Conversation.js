const mongoose = require("mongoose");

const ConvsersationSchema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String
  },
  sender: {
    type: mongoose.ObjectId,
    ref: "User"
  },
  chatId: {
    type: mongoose.ObjectId,
    ref: "Chat"
  }
});

module.exports = mongoose.model("Conversation", ConvsersationSchema);

const mongoose = require("mongoose");

const ConvsersationSchema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now
  },
  text: {
    type: [String]
  }
});

module.exports = mongoose.model("Conversation", ConvsersationSchema);

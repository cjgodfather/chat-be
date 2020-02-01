const mongoose = require("mongoose");

const ConvsersationSchema = new mongoose.Schema({
  time: {
    type: Date
  },
  text: {
    type: [String]
  }
});

module.exports = mongoose.model("Conversation", ConvsersationSchema);

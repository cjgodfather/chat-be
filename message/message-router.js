const router = require("express").Router();
const Message = require("../models/Message");
const checkSenderInChat = require("../middleware/message");

router.post("/", checkSenderInChat, async (req, res) => {
  const { text, sender, chatId } = req.body;
  try {
    const newMessage = await Message.create({ text, sender, chatId });
    res
      .status(200)
      .json({ message: `your message "${newMessage}" has been sent` });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:chatId", async (req, res) => {
  const { chatId } = req.params;
  console.log(chatId);
  try {
    const allMessages = await Message.find({ chatId });
    // console.log(allMessages);
    res.status(200).json(allMessages);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:chatId", async (req, res) => {
  const { chatId } = req.params;
  try {
    const deletedMessages = await Message.remove({ chatId });
    res
      .status(200)
      .json({ message: `deleted ${deletedMessages.deletedCount} messages` });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;

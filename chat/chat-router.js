const router = require("express").Router();
const Chat = require("../models/Chat");
const checkChatExist = require("../middleware/chat");

router.post("/", checkChatExist, async (req, res) => {
  const { user1, user2 } = req.body;
  try {
    const newChat = await Chat.create({ user1, user2 });
    console.log(newChat);
    res
      .status(200)
      .json({ message: `created chat between ${user1} and ${user2}` });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const allChats = await Chat.find();
    res.status(200).json(allChats);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const chatDeleted = await Chat.deleteOne({ _id: id });

    res.status(200).json({
      message: `chat with ${id} was successfully deleted`,
      chatDeleted
    });
  } catch (err) {}
});

module.exports = router;

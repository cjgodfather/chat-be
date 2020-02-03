const Chat = require("../models/Chat");

module.exports = async (req, res, next) => {
  const { sender, chatId } = req.body;
  try {
    const chat = await Chat.findById(chatId);
    if (!chat) {
      res.status(500).json({ error: `chat with ${chatId} doesn't exist` });
    }
    if (chat.user1.toString() === sender || chat.user2.toString() === sender) {
      next();
    } else {
      res
        .status(500)
        .json({ error: `the sender ${sender} doesn't belong to this chat` });
    }
  } catch (err) {
    console.log(err);
  }
};

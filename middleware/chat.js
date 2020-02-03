const Chat = require("../models/Chat");

module.exports = async (req, res, next) => {
  const { user1, user2 } = req.body;
  try {
    const chatExistOrNot = await Chat.findOne({ user1, user2 });
    if (!chatExistOrNot) {
      next();
    } else {
      res
        .status(500)
        .json({ error: `chat already exist between ${user1} and ${user2} ` });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = checkEmailExist = async (req, res, next) => {
  const { email, username, password } = req.body;

  const result = await User.find({ email });

  if (!result.length === 0) {
    return res.status(400).json({ error: "this email has been registered!" });
  } else {
    req.user = { email, username, password };
    next();
  }
};

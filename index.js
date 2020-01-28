const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const socket = require("socket.io");

dotenv.config();
connectDB();
const app = express();
const server = require("http").Server(app);
const authRouter = require("./auth/auth-router.js");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: process.env.MESSAGE || "deployed" });
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

const io = socket(server);

io.on("connection", socket => {
  console.log(`socket is on !`);
  socket.emit("welcome back", { msg: "welcome back" });
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
  server.close(() => process.exit(1));
});

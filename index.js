const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config();

const app = express();

// regular middleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie middleWare
app.use(cookieParser());

const userRouter = require("./routes/userRoutes");

app.use("/api", userRouter);

// route
app.get("/", (req, res) => {
  res.send("hello world");
});

// listen
app.listen(3000, () => {
  console.log("3000:", 3000);
});

// const { configDotenv } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bookRouter = require("./routes/book");
require("dotenv").config();

app.use(express.json());

app.use("/", bookRouter);

//connect to mongoose
mongoose.connect(process.env.MONGODB, {
  dbName: "Backend",
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

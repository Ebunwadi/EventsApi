require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const { errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/dbConnect");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3500;

connectDB();
// middlewares
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/auth", require("./routes/authRoute"));
app.use("/event", require("./routes/eventRoute"));
app.use("/user", require("./routes/userRoute"));

app.get('/', (req, res) => {
  res.redirect('https://documenter.getpostman.com/view/10653175/2s9Xy2QXg3')
})

// error handling middleware
app.use(errorHandler);

// ensure db is connected first before listening to our server
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

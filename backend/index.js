// Import packages
const dotenv = require("dotenv").config();
const PORT = process.env.port || 9001;

const express = require("express");
const home = require("./routes/institution");
const mongoose = require("mongoose");
const cors = require("cors");

// Middlewares
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/institution", home);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useNewUrlParser: true,
});

// connection
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

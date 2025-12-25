const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/lab9webdev")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get("/", (req, res) => {
    res.send("Course Management API is running");
});

const courseRoutes = require("./routes/courses");
app.use("/courses", courseRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));

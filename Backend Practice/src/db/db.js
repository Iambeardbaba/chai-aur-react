const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://learning:Sourabh9@complete-backend.gykx85b.mongodb.net/halley",
  );
  console.log("Connected to MongoDB");
}

module.exports = connectDB;

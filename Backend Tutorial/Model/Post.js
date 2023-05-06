const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  email: String,
});

const POST = mongoose.model("POST", postSchema);

module.exports = POST;

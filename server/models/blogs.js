const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide blog title"],
  },
  text: {
    type: String,
    required: [true, "Please provide blog text"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please provide blog image"],
  },
});

module.exports = mongoose.model("Blogs", blogSchema);

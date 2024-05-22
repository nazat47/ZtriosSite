const mongoose = require("mongoose");

const caseStudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide blog title"],
    },
    subTitle: {
      type: String,
    },
    text: {
      type: String,
      required: [true, "Please provide blog text"],
    },
    imageUrl: {
      type: String,
      required: [true, "Please provide blog image"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CaseStudy", caseStudySchema);

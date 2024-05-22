const { unlinkSync } = require("fs");
const { BadRequest, NotFound } = require("../errors");
const path = require("path");
const CaseStudy = require("../models/caseStudy");

const createCaseStudy = async (req, res) => {
  const { title, text, subTitle } = req.body;
  if (!title || !text || !subTitle) {
    throw new BadRequest("Plase insert case study title, sub title and text");
  }
  if (!req.file) {
    throw new BadRequest("Please upload case study image");
  }
  try {
    const caseStudy = await CaseStudy.create({
      title,
      text,
      subTitle,
      imageUrl: req.file?.filename,
    });
    if (!caseStudy) {
      throw new BadRequest("Unable to create case study, try again");
    }
    return res.status(201).json(caseStudy);
  } catch (error) {
    console.log(error);
  }
};
const getCaseStudy = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequest("Id not provided");
  }
  const caseStudy = await CaseStudy.findById(id);
  if (!caseStudy) {
    throw new NotFound("No case study found");
  }
  return res.status(200).json(caseStudy);
};
const getAllCaseStudy = async (req, res) => {
  const caseStudy = await CaseStudy.find({}).sort({ createdAt: -1 });
  if (!caseStudy) {
    throw new NotFound("No case study found");
  }
  return res.status(200).json(caseStudy);
};
const deleteCaseStudy = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequest("Id not provided");
  }
  const caseStudy = await CaseStudy.findByIdAndDelete(id);
  if (!caseStudy) {
    throw new NotFound("Unable to find blog");
  }
  if (caseStudy?.imageUrl) {
    const oldImage = path.join(__dirname, "..", "uploads", caseStudy.imageUrl);
    unlinkSync(oldImage, (err) => {
      if (err) console.log("unable to delete blog image");
    });
  }
  return res.status(200).json({ message: "Blog deleted" });
};

const updateCaseStudy = async (req, res) => {
  const { id } = req.params;
  const { title, text, subTitle } = req.body;
  if (!title || !text || !subTitle) {
    throw new BadRequest("Plase insert case study title, sub title and text");
  }
  try {
    const caseStudy = await CaseStudy.findById(id);
    if (!caseStudy) {
      throw new NotFound("No case study found");
    }
    if (req.file) {
      if (caseStudy.imageUrl) {
        const oldImage = path.join(
          __dirname,
          "..",
          "uploads",
          caseStudy.imageUrl
        );
        unlinkSync(oldImage, (err) => {
          if (err) console.log("oops");
        });
      }
      caseStudy.imageUrl = req.file.filename;
    }
    caseStudy.title = title;
    caseStudy.text = text;
    caseStudy.subTitle = subTitle;
    await caseStudy.save();
    return res.status(201).json(caseStudy);
  } catch (error) {
    console.log(error);
  }
};

const uploadImage = async (req, res) => {
  if (!req.file) {
    throw new BadRequest("Image not uploaded");
  }
  return res.status(200).json({ imageUrl: req.file?.filename });
};
module.exports = {
  createCaseStudy,
  deleteCaseStudy,
  updateCaseStudy,
  getAllCaseStudy,
  getCaseStudy,
  uploadImage,
};

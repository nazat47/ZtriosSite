const express = require("express");

const uploadOptions = require("../utils/multerConfig");
const authenticateUser = require("../middlewares/authenticate");
const {
  createCaseStudy,
  getAllCaseStudy,
  updateCaseStudy,
  getCaseStudy,
  deleteCaseStudy,
  uploadImage,
} = require("../controllers/caseStudy");
const router = express.Router();

router
  .route("/")
  .post(uploadOptions.single("image"), authenticateUser, createCaseStudy)
  .get(getAllCaseStudy);
router
  .route("/:id")
  .put(uploadOptions.single("image"), authenticateUser, updateCaseStudy)
  .get(getCaseStudy)
  .delete(authenticateUser, deleteCaseStudy);

router.post("/upload", uploadOptions.single("image"), uploadImage);
module.exports = router;

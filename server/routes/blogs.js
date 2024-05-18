const express = require("express");
const {
  createBlog,
  getAllBlogs,
  updateBlog,
  getBlog,
  deleteBlog,
} = require("../controllers/blogs");
const uploadOptions = require("../utils/multerConfig");
const router = express.Router();

router
  .route("/")
  .post(uploadOptions.single("image"), createBlog)
  .get(getAllBlogs);
router
  .route("/:id")
  .put(uploadOptions.single("image"), updateBlog)
  .get(getBlog)
  .delete(deleteBlog);

module.exports = router;

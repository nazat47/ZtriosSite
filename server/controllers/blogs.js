const { unlinkSync } = require("fs");
const { BadRequest, NotFound } = require("../errors");
const Blogs = require("../models/blogs");
const path = require("path");

const createBlog = async (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) {
    throw new BadRequest("Plase insert blog title and text");
  }
  if (!req.file) {
    throw new BadRequest("Please upload blog image");
  }
  try {
    const blog = await Blogs.create({
      title,
      text,
      imageUrl: req.file?.filename,
    });
    if (!blog) {
      throw new BadRequest("Unable to create blog, try again");
    }
    return res.status(201).json(blog);
  } catch (error) {
    console.log(error);
  }
};
const getBlog = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequest("Id not provided");
  }
  const blog = await Blogs.findById(id);
  if (!blog) {
    throw new NotFound("No blog found");
  }
  return res.status(200).json(blog);
};
const getAllBlogs = async (req, res) => {
  const blogs = await Blogs.find({});
  if (!blogs) {
    throw new NotFound("No blogs found");
  }
  return res.status(200).json(blogs);
};
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequest("Id not provided");
  }
  const blog = await Blogs.findByIdAndDelete(id);
  if (!blog) {
    throw new NotFound("Unable to find blog");
  }
  if (blog?.imageUrl) {
    const oldImage = path.join(__dirname, "..", "uploads", blog.imageUrl);
    unlinkSync(oldImage, (err) => {
      if (err) console.log("unable to delete blog image");
    });
  }
  return res.status(200).json({ message: "Blog deleted" });
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, text } = req.body;
  if (!title || !text) {
    throw new BadRequest("Plase insert blog title and text");
  }
  try {
    const blog = await Blogs.findById(id);
    if (!blog) {
      throw new NotFound("No blog found");
    }
    if (req.file) {
      if (blog.imageUrl) {
        const oldImage = path.join(__dirname, "..", "uploads", blog.imageUrl);
        unlinkSync(oldImage, (err) => {
          if (err) console.log("oops");
        });
      }
      blog.imageUrl = req.file.filename;
    }
    blog.title = title;
    blog.text = text;
    await blog.save();
    return res.status(201).json(blog);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createBlog, deleteBlog, updateBlog, getAllBlogs, getBlog };

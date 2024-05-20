import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdClose } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl, routeUrl } from "../../utils/links";

const EditBlog = ({ editOpen, setEditOpen, blog }) => {
  const [formData, setFormData] = useState({
    title: blog?.title,
    text: blog?.text,
    subTitle: blog?.subTitle ? blog?.subTitle : "",
  });
  const [file, setFile] = useState(null);
  const queryClient = useQueryClient();
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ script: "sub" }, { script: "super" }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "size",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "script",
    "sub",
    "super",
    "color",
    "background",
    "align",
    "link",
  ];
  const handleImage = (e) => {
    setFile(e.target.files[0]);
  };

  const { mutate, isPending, reset } = useMutation({
    mutationFn: async (forms) => {
      try {
        await axios.put(`${routeUrl}/blogs/${blog?._id}`, forms, {
          withCredentials: true,
        });
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      reset();
      setEditOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const forms = new FormData();
    forms.append("title", formData.title);
    forms.append("text", formData.text);
    forms.append("subTitle", formData.subTitle);
    if (file) forms.append("image", file);
    mutate(forms);
    setFile(null);
  };
  useEffect(() => {
    setFormData({
      title: blog?.title,
      text: blog?.text,
      subTitle: blog?.subTitle ? blog?.subTitle : "",
    });
  }, [blog]);
  return (
    <div
      className={`fixed inset-0  items-center justify-center bg-[#00000042] z-[5] transition-all duration-300 ${
        editOpen ? "flex" : "hidden"
      }`}
    >
      <div
        className={`relative bg-white rounded-lg max-h-[90vh] w-[95vw] sm:w-[85vw] lg:w-[70vw] p-3 animate-scaleUp overflow-hidden`}
      >
        <MdClose
          className="absolute top-2 right-2 cursor-pointer size-[25px] md:size-[35px]"
          onClick={() => setEditOpen(false) || setFile(null)}
          size={30}
        />
        <div className="overflow-y-auto max-h-[80vh] mt-12">
          <h1 className="font-bold text-lg md:text-2xl text-center">
            Edit Blog
          </h1>
          <div className="my-6 flex flex-col items-start justify-center gap-4 min-h-[80vh] px-2 md:px-6">
            {(file || blog?.imageUrl) && (
              <div className="relative group w-full h-auto">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : `${baseUrl}/${blog?.imageUrl}`
                  }
                  alt="blog"
                  className="w-[100%] md:w-[80%] h-[200px] rounded group-hover:brightness-50 mx-auto shadow-lg border border-gray-200"
                />
                <MdClose
                  onClick={() => setFile(null)}
                  className="cursor-pointer absolute top-2 right-[5%] md:right-[11%] text-white z-[2] hidden group-hover:block"
                  size={30}
                />
              </div>
            )}
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col gap-4 w-full h-auto"
            >
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                type="text"
                name="title"
                value={formData?.title}
                required
                placeholder="Title"
                className="p-3 w-full rounded border border-gray-200 outline-purple-200"
              />
              <input
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                type="text"
                name="subTitle"
                value={formData?.subTitle}
                required
                placeholder="Short Description"
                className="p-3 w-full rounded border border-gray-200 outline-purple-200"
              />
              <ReactQuill
                onChange={(value) => setFormData({ ...formData, text: value })}
                value={formData?.text}
                modules={modules}
                formats={formats}
                theme="snow"
                placeholder="Description"
                className="h-[400px] lg:h-[300px] mb-[120px] md:mb-[70px] xl:mb-12"
              />
              <label
                htmlFor="edit"
                className="w-full h-[50px] bg-gray-200 rounded-lg p-3 cursor-pointer flex justify-between items-center"
              >
                <p className="font-semibold text-gray-600 text-lg">Add Image</p>
                <RiImageAddFill size={35} className="text-gray-700" />
              </label>
              <input
                onChange={handleImage}
                hidden
                id="edit"
                type="file"
                accept="images/*"
                name="image"
              />

              <button
                disabled={isPending}
                type="submit"
                className={`p-2 w-[100px] mx-auto rounded border border-gray-200 outline-purple-200 bg-slate-600 text-white font-bold text-lg hover:bg-slate-700 ${
                  isPending ? "cursor-not-allowed" : ""
                }`}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;

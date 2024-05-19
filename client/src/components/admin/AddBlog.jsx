import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { routeUrl } from "../../utils/links";

const AddBlog = ({ addOpen, setAddOpen }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });
  const [file, setFile] = useState(null);
  const queryClient = useQueryClient();
  const handleImage = (e) => {
    setFile(e.target.files[0]);
  };

  const { mutate, isPending, reset } = useMutation({
    mutationFn: async (forms) => {
      try {
        await axios.post(`${routeUrl}/blogs`, forms, {
          withCredentials: true,
        });
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      reset();
      setAddOpen(false);
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
    forms.append("image", file);
    mutate(forms);
    setFile(null);
    e.target.reset();
  };
  const handleClose = () => {
    setAddOpen(false);
    setFile(null);
  };
  return (
    <div
      className={`fixed inset-0  items-center justify-center bg-[#00000042] z-[5] transition-all duration-300 ${
        addOpen ? "flex" : "hidden"
      }`}
    >
      <div
        className={`relative bg-white rounded-lg min-h-[50vh] w-[500px] p-3 flex flex-col items-center justify-center gap-4 animate-scaleUp`}
      >
        <MdClose
          className="absolute top-2 right-2 cursor-pointer"
          onClick={handleClose}
          size={35}
        />
        <h1 className="font-bold text-2xl">Add Blog</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 w-full mt-12"
        >
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            name="title"
            required
            placeholder="Title"
            className="p-3 w-full rounded border border-gray-200 outline-purple-200"
          />
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            name="text"
            required
            rows={6}
            placeholder="Blog description"
            className="p-3 w-full rounded border border-gray-200 outline-purple-200 resize-none"
          />
          {file && (
            <div className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt="blog"
                className="w-full h-[100px] rounded group-hover:brightness-50"
              />
              <MdClose
                onClick={() => setFile(null)}
                className="cursor-pointer absolute top-2 right-2 text-white z-[2] hidden group-hover:block"
              />
            </div>
          )}
          <label
            htmlFor="file"
            className="w-full h-[50px] bg-gray-200 rounded-lg p-3 cursor-pointer flex justify-between items-center"
          >
            <p className="font-semibold text-gray-600 text-lg">Add Image</p>
            <RiImageAddFill size={35} className="text-gray-700" />
          </label>
          <input
            onChange={handleImage}
            hidden
            id="file"
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
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;

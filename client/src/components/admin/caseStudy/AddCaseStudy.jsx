import React, { useMemo, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { baseUrl, routeUrl } from "../../../utils/links";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const AddCaseStudy = ({ addOpen, setAddOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset: formReset,
  } = useForm();
  const quillRef = useRef();
  const [file, setFile] = useState(null);
  const [quillValue, setQuillValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const queryClient = useQueryClient();

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("image", file);
      try {
        const { data } = await axios.post(
          `${routeUrl}/case-study/upload`,
          formData,
          {
            withCredentials: true,
          }
        );
        const imageUrl = data?.imageUrl;
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, "image", `${baseUrl}/${imageUrl}`);
      } catch (error) {
        toast.error(error?.response?.data?.msg || "Image upload failed");
      }
    };
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ script: "sub" }, { script: "super" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

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
    "image",
  ];
  const handleImage = (e) => {
    setFile(e.target.files[0]);
    setErrorMsg(null);
  };

  const { mutate, isPending, reset } = useMutation({
    mutationFn: async (forms) => {
      try {
        await axios.post(`${routeUrl}/case-study`, forms, {
          withCredentials: true,
        });
      } catch (error) {
        toast.error(error?.response?.data?.msg || "Something went wrong");
      }
    },
    onSuccess: () => {
      reset();
      setAddOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["case-studies"],
      });
    },
  });
  const onSubmit = (data) => {
    if (!file) {
      setErrorMsg("Please upload case study image");
    } else {
      const formsData = new FormData();
      formsData.append("title", data?.title);
      formsData.append("text", quillValue);
      formsData.append("subTitle", data?.subTitle);
      formsData.append("image", file);
      mutate(formsData);
      setFile(null);
      formReset();
    }
  };
  const handleClose = () => {
    setAddOpen(false);
    setFile(null);
    formReset();
  };
  return (
    <div
      className={`fixed inset-0  items-center justify-center bg-[#00000042] z-[5] transition-all duration-300 ${
        addOpen ? "flex" : "hidden"
      }`}
    >
      <div
        className={`relative bg-white rounded-lg max-h-[90vh] w-[95vw] sm:w-[85vw] lg:w-[70vw] p-3 animate-scaleUp overflow-hidden`}
      >
        <MdClose
          className="absolute top-2 right-2 cursor-pointer size-[25px] md:size-[35px]"
          onClick={handleClose}
        />
        <div className="overflow-y-auto max-h-[80vh] mt-12">
          <h1 className="font-bold text-lg md:text-2xl text-center">
            Add Case Study
          </h1>
          <div className="my-6 flex flex-col items-start justify-center gap-4 min-h-[80vh] px-2 md:px-6">
            {file && (
              <div className="relative group w-full h-auto">
                <img
                  src={URL.createObjectURL(file)}
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
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full h-auto"
            >
              {errors?.title && (
                <p className="text-red-600">* {errors?.title?.message}</p>
              )}
              <input
                {...register("title", {
                  required: "Case Study title is required",
                })}
                type="text"
                name="title"
                placeholder="Title"
                className="p-3 w-full rounded border border-gray-200 outline-purple-200"
              />
              {errors?.subTitle && (
                <p className="text-red-600">* {errors?.subTitle?.message}</p>
              )}
              <input
                {...register("subTitle", {
                  required: "Short description is required",
                })}
                type="text"
                name="subTitle"
                placeholder="Short Description"
                className="p-3 w-full rounded border border-gray-200 outline-purple-200"
              />
              {errors?.text && (
                <p className="text-red-600">* {errors?.text?.message}</p>
              )}
              <ReactQuill
                ref={quillRef}
                onChange={(value) => setQuillValue(value)}
                modules={modules}
                formats={formats}
                theme="snow"
                placeholder="Description"
                className="h-[400px] lg:h-[300px] mb-[120px] md:mb-[70px] xl:mb-12"
              />
              {errorMsg && <p className="text-red-600">{errorMsg}</p>}
              <label
                htmlFor="caseStudyFile"
                className="w-full h-[50px] bg-gray-200 rounded-lg p-3 cursor-pointer flex justify-between items-center"
              >
                <p className="font-semibold text-gray-600 text-lg">Add Image</p>
                <RiImageAddFill size={35} className="text-gray-700" />
              </label>
              <input
                {...register("image")}
                onChange={handleImage}
                hidden
                id="caseStudyFile"
                type="file"
                accept="images/*"
                name="image"
              />

              <button
                disabled={isPending || isSubmitting}
                type="submit"
                className={`p-2 w-[100px] mx-auto rounded border border-gray-200 outline-purple-200 bg-slate-600 text-white font-bold text-lg hover:bg-slate-700 ${
                  isPending || isSubmitting ? "cursor-not-allowed" : ""
                }`}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCaseStudy;

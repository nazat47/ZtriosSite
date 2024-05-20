import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import AddBlog from "./AddBlog";
import DeleteBlog from "./DeleteBlog";
import axios from "axios";
import { routeUrl } from "../../utils/links";
import EditBlog from "./EditBlog";
import { useNavigate } from "react-router-dom";

const AdminBlogs = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [blogData, setBlogdata] = useState({});
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs`, {
          withCredentials: true,
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="w-full min-h-screen bg-white">
        <div className="flex items-center justify-between border-b border-gray-400 min-h-[70px] px-4">
          <h1 className="font-bold text-2xl">Blogs</h1>
          <button
            onClick={() => setAddOpen(true)}
            className="flex gap-1 items-center justify-between p-2 px-6 text-white font-bold bg-black rounded hover:bg-purple-800"
          >
            <MdAdd size={30} />
            <p>Add</p>
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full p-3 mt-6">
          {data?.map((blog, i) => (
            <div
              className="p-4 flex justify-between items-center bg-white rounded shadow-md cursor-pointer"
              key={i}
            >
              <p
                onClick={() => navigate(`/blog/${blog?._id}`)}
                className="font-bold text-xl text-gray-700"
              >
                {blog?.title}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setEditOpen(true) || setBlogdata(blog)}
                  className="p-2 rounded hover:underline text-blue-600 font-bold"
                >
                  Edit
                </button>
                <button
                  onClick={() => setDeleteOpen(true) || setBlogdata(blog)}
                  className="p-2 rounded hover:underline text-red-600 font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddBlog addOpen={addOpen} setAddOpen={setAddOpen} />
      <DeleteBlog
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        blogId={blogData?._id}
      />
      <EditBlog editOpen={editOpen} setEditOpen={setEditOpen} blog={blogData} />
    </>
  );
};

export default AdminBlogs;

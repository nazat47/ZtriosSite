import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import AdminBlogs from "../../components/admin/AdminBlogs";

const AdminDashboard = () => {
  return (
    <div className="flex gap-2 w-full">
      <Sidebar />
      <AdminBlogs />
    </div>
  );
};

export default AdminDashboard;

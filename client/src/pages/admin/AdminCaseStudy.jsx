import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import AdminAllCaseStudies from "../../components/admin/caseStudy/AdminAllCaseStudies";

const AdminCaseStudy = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <Sidebar active={2} />
      <AdminAllCaseStudies />
    </div>
  );
};

export default AdminCaseStudy;

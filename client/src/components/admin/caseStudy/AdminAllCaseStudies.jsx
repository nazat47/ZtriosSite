import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import { routeUrl } from "../../../utils/links";
import { toast } from "react-toastify";
import AddCaseStudy from "./AddCaseStudy";
import DeleteCaseStudy from "./DeleteCaseStudy";
import EditCaseStudy from "./EditCaseStudy";
import AdminTablesSkeleton from "../../skeletons/AdminTablesSkeleton";

const AdminAllCaseStudies = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [caseStudyData, setCaseStudyData] = useState({});
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["case-studies"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/case-study`, {
          withCredentials: true,
        });
        return data;
      } catch (error) {
        toast.error("Failed to load case studies, try again later");
      }
    },
    staleTime: 1000 * 60 * 10,
  });
  const columns = [
    {
      field: "id",
      headerName: "Case Study Id",
      minWidth: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <p className="text-sm md:text-md lg:text-lg text-gray-800 cursor-pointer">
            {params.row.id}
          </p>
        );
      },
    },
    {
      field: "title",
      headerName: "Case Study title",
      minWidth: 250,
      flex: 1,
      renderCell: (params) => {
        return (
          <div
            onClick={() => navigate(`/casestudy/${params.id}`)}
            className="w-full h-full cursor-pointer flex items-center justify-start"
          >
            <p className="text-sm md:text-md lg:text-lg text-gray-600 cursor-pointer font-semibold">
              {params.row.title}
            </p>
          </div>
        );
      },
    },
    {
      field: "Edit",
      flex: 0.3,
      minWidth: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <button
            onClick={() => setEditOpen(true) || setCaseStudyData(params?.row)}
            className="p-2 rounded hover:underline text-blue-600 font-semibold text-sm lg:text-lg"
          >
            Edit
          </button>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.3,
      minWidth: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <button
            onClick={() => setDeleteOpen(true) || setCaseStudyData(params?.row)}
            className="p-2 rounded hover:underline text-red-600 font-semibold text-sm lg:text-lg"
          >
            Delete
          </button>
        );
      },
    },
  ];
  const row = [];
  data?.forEach((caseStudy) => {
    row.push({
      id: caseStudy?._id,
      title: caseStudy?.title,
      subTitle: caseStudy?.subTitle,
      text: caseStudy?.text,
      imageUrl: caseStudy?.imageUrl,
    });
  });

  return (
    <>
      <div className="w-full min-h-screen bg-white p-4">
        <div className="flex items-center justify-between border-b border-gray-400 min-h-[70px] px-4">
          <h1 className="font-bold text-2xl">Case Studies</h1>
          <button
            onClick={() => setAddOpen(true)}
            className="flex gap-1 items-center justify-between p-2 px-6 text-white font-bold bg-black rounded hover:bg-purple-800"
          >
            <MdAdd size={30} />
            <p>Add</p>
          </button>
        </div>
        {isLoading ? (
          <AdminTablesSkeleton />
        ) : (
          <div className="w-[100%] h-[75vh] sm:h-[80vh] pt-1 mt-2 bg-white">
            <DataGrid
              columns={columns}
              rows={row}
              pageSize={10}
              rowHeight={70}
              disableSelectionOnClick
            />
          </div>
        )}
      </div>
      <AddCaseStudy addOpen={addOpen} setAddOpen={setAddOpen} />
      <DeleteCaseStudy
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        caseStudyId={caseStudyData?.id}
      />
      <EditCaseStudy
        editOpen={editOpen}
        setEditOpen={setEditOpen}
        caseStudy={caseStudyData}
      />
    </>
  );
};

export default AdminAllCaseStudies;

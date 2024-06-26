import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudy from "./pages/CaseStudy";
import Blogs from "./pages/Blogs";
import Layout from "./components/layout/Layout";
import BlogDetails from "./pages/BlogDetails";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminProtected from "./protected/AdminProtected";
import AdminBlogs from "./pages/admin/AdminBlogs";
import AdminCaseStudy from "./pages/admin/AdminCaseStudy";
import CaseStudyDetails from "./pages/CaseStudyDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Landing />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/casestudy"
            element={
              <Layout>
                <CaseStudy />
              </Layout>
            }
          />
          <Route
            path="/blogs"
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Layout>
                <BlogDetails />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminProtected>
                <AdminDashboard />
              </AdminProtected>
            }
          />
          <Route
            path="/dashboard/blogs"
            element={
              <AdminProtected>
                <AdminBlogs />
              </AdminProtected>
            }
          />
          <Route
            path="/dashboard/case-study"
            element={
              <AdminProtected>
                <AdminCaseStudy />
              </AdminProtected>
            }
          />
          <Route
            path="/casestudy/:id"
            element={
              <Layout>
                <CaseStudyDetails />
              </Layout>
            }
          />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="*" element={<p>Route not found</p>} />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          theme="light"
        />
      </BrowserRouter>
    </>
  );
}

export default App;

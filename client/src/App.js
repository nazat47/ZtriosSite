import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudy from "./pages/CaseStudy";
import Blogs from "./pages/Blogs";
import Layout from "./components/layout/Layout";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/casestudy" element={<CaseStudy />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="*" element={<p>Route not found</p>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

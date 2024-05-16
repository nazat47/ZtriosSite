import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudy from "./pages/CaseStudy";
import Blogs from "./pages/Blogs";
import Blog from "./components/Blog";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<p>Route not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

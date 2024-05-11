import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudy from "./pages/CaseStudy";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="*" element={<p>Route not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

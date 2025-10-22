import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Khub from "./pages/Khub";
import KhubProjects from "./pages/KhubProjects";
import Stats from "./pages/khubStats";
import ProjectNest from "./pages/ProjectNest";
import Hackathons from "./pages/Hackathons";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/khub" element={<Khub />} />
        <Route path="/khub-projects" element={<KhubProjects />} />
        <Route path="/khub-stats" element={<Stats />} />
        {/* <Route path="/project-nest" element={<ProjectNest />} />
        <Route path="/hackathons" element={<Hackathons />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

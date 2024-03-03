import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/default/Navbar.jsx";
import Footer from "./components/default/Footer.jsx";

function App() {
  return (
    <div className="grid justify-center gap-12">
      <div className="mt-24 mb-8 max-w-3xl px-6 grid gap-8">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;

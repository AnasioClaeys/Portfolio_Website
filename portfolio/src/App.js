import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Aboutme } from "./components/aboutme/Aboutme";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <div className="App bg-primary">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="aboutme" element={<Aboutme />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

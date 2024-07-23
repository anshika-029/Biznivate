import "./App.css";
import Service from "./pages/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Blog from "./pages/Blog";
import JobDescription from "./pages/JobDescription";
import Carrers from "./pages/Carrers";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Carrers />} />
        <Route path="/jobdescription" element={<JobDescription />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

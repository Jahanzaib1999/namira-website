import "./App.css";
import "./index.css";

//pages and components
import Navbar from "./components/Navbar";
import HomePage from "./pages/homepage/HomePage";
import ServicesPage from "./pages/servicespage/ServicesPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import BranchesPage from "./pages/branches/BranchesPage";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/branches" element={<BranchesPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import DetailPorto from "./components/detail/Detail"; // Import komponen DetailPorto
import MainLayout from "./components/MainLayout"; // Import MainLayout

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman utama dengan layout */}
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <>
                <Intro />
                <Experience />
                <Portfolio />
                <Contact />
              </>
            }
          />
        </Route>

        {/* Route untuk halaman detail tanpa layout */}
        <Route path="/detail/:id" element={<DetailPorto />} />
      </Routes>
    </Router>
  );
};

export default App;
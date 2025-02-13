import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import DetailPorto from "./components/detail/Detail"; // Import komponen DetailPorto

const App = () => {
  return (
    <Router>
      <Header />
      <Topbar />
      <Routes>
        {/* Route untuk halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Experience />
              <Portfolio />
              <Contact />
            </>
          }
        />
        {/* Route untuk halaman detail portfolio */}
        <Route path="/detail/:id" element={<DetailPorto />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
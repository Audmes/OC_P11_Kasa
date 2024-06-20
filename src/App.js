import React from "react";
import "./css/style.css";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Logement from "./views/Logement";
import NoPage from "./views/NoPage";

import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
      <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate replace to="/accueil" />} />
                <Route path="/accueil" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
      </HashRouter>
  );
};

export default App
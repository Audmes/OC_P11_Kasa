import React from "react";
import "./css/style.css";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Logement from "./views/Logement";
import NoPage from "./views/NoPage";

const App = () => {
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Navigate replace to="/accueil" />} />
              <Route path="/accueil" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logement/:id" element={<Logement />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
      </HashRouter>
  );
};

export default App
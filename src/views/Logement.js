import React from "react";
import LogementDisplay from "../components/Logement";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Logement = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <LogementDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default Logement;
import React from "react";
import Error from "../components/Error";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NoPage = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <Error />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;
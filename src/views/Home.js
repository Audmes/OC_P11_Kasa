import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import imgBanner from "../assets/images/Banner.png";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main>
                <Banner texte="Chez vous, partout et ailleurs" image={imgBanner} />
                <Gallery />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
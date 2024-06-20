import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import imgBanner from "../assets/images/Banner.png";

const Home = () => {
    return (
        <div className="home">
            <main>
                <Banner texte="Chez vous, partout et ailleurs" image={imgBanner} />
                <Gallery />
            </main>
        </div>
    );
};

export default Home;
import React from "react";
import Banner from "../components/Banner";
import imgBannerAbout from "../assets/images/aboutBanner.png";
import Collapse from "../components/Collapse";
import CollapseData from "../datas/collapses.json";

const About = () => {
  return (
    <div className="about">
      <main>
        <Banner image={imgBannerAbout} titre="" />

        <div className="collapse">
          <div className="collapse__dropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
import React from "react";
import "./Home.css";
import Defualt_img from "./Home/home-bg.jpg";
function Home({ img }) {
  const background = {
    background: `url('${img ? img : Defualt_img}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="home" style={background}>
        <div className="container">
          <div className="home-information">
            <h2 className="home-title margin-bottom">Hamza Nabil</h2>
            <h4 className="home-info">Creative Director</h4>
            <p className="home-desc">
              Iam a professional <span>UX Designer</span> and Front-End
              Developer creating modern and resposive designs to Web and Mobile.
              Let us work together. Thank you.
            </p>
            <button className="home-btn">Let's Begin</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

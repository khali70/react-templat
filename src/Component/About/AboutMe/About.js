import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="creative">
      <div className="container">
        <div className="creative-info">
          <h2 className="info-title">
            <span>This is</span> Me
          </h2>
          <h4 className="info-dir">Creative Director</h4>
          <p className="info-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            <Link to="">explicabo</Link> maxime quibusdam quaerat nihil aliquid
            aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
            veritatis?
          </p>
          <p className="info-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

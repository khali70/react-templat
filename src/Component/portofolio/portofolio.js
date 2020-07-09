import React from "react";
import "./portofolio.css";
function Portofolio({ imgs = [] }) {
  const toggle = ({ currentTarget }) => {
    let target = currentTarget;
    const children = [...currentTarget.parentNode.children];
    children.forEach((item) => {
      if (item !== target) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  };
  return (
    <div className="portfolio">
      <h2 className="portfolio-title">
        <span>My</span> Portfolio
      </h2>
      <ul className="portfolio-list">
        <li
          onClick={(e) => {
            toggle(e);
          }}
          className="portfolio-item active"
        >
          All
        </li>
        <li
          onClick={(e) => {
            toggle(e);
          }}
          className={"portfolio-item"}
        >
          HTML
        </li>
        <li
          onClick={(e) => {
            toggle(e);
          }}
          className="portfolio-item"
        >
          Photoshop
        </li>
        <li
          onClick={(e) => {
            toggle(e);
          }}
          className="portfolio-item"
        >
          Wordpress
        </li>
        <li
          onClick={(e) => {
            toggle(e);
          }}
          className="portfolio-item"
        >
          Mobile
        </li>
      </ul>

      <div className="box">
        {imgs.length &&
          imgs.map((item) => (
            <div key={item.id}>
              <img src={`/react-templat${item.image}`} alt="" />
              <p className="overlay">
                <span>Show Image</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Portofolio;

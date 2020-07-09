import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Social-Media.css";

function Social_Media() {
  const [Social, setSocial] = useState([]);

  useEffect(() => {
    axios.get("data/Data.JSON").then((res) => {
      setSocial(res.data.social);
    });
  }, []);
  const social = Social;
  const type = ["face", "twitter", "pin"];

  return (
    <div className="social-media">
      {social.map((item, index) => (
        <div className={`social ${type[index]}`} key={item.id}>
          <i className={item.icon}></i>
          <p>
            <span className="info1">{item.title}</span>
            <span className="info2">{item.body} </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Social_Media;

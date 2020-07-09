import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";
function Profile() {
  const [Skills, setSkill] = useState([]);
  useEffect(() => {
    axios.get("data/Data.JSON").then((res) => {
      setSkill(res.data.skills);
    });
  }, []);
  return (
    <div className="profile_skills">
      <div className="container">
        <div className="profile">
          <h2 className="profile-title">
            <span>My </span>Profile
          </h2>
          <ul className="profile-list">
            <li className="profile-item">
              <span>Name</span>
              Hamza Nabil
            </li>
            <li className="profile-item">
              <span>Birthday</span>
              21/1/1996
            </li>
            <li className="profile-item">
              <span>Address</span>
              Ain shams
            </li>
            <li className="profile-item">
              <span>Phone</span>
              4444 5555 6666
            </li>
            <li className="profile-item">
              <span>Email</span>
              hamza@hamza.com
            </li>
            <li className="profile-item">
              <span>Website</span>
              <span className="web">www.google.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="skills">
        <h2 className="skills-title">
          Some <span>skills</span>
        </h2>
        <p className="skills-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          praesentium blanditiis esse cupiditate, omnis similique.
        </p>
        {Skills.length > 0 &&
          Skills.map((item, index) => (
            <div className="bar" key={item.id}>
              <span className="title">{item.title}</span>
              <span className="perc">{item.perentage}</span>
              <div className="parent">
                <span style={{ width: item.perentage }}></span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Profile;

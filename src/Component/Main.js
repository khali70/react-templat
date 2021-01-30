import Home from "./Home/Home";
import Works from "./Works/Works";
import Portofolio from "./portofolio/portofolio";
import Profile from "./Profile/Profile";
import About from "./About/AboutMe/About";
import SocialMedia from "./About/Social-Media/Social-Media";
import Contact from "./Contact/Contact";
import React, { useEffect, useState } from "react";

function Main() {
  const [PortofolioItem, setPortofolioItem] = useState([]);
  useEffect(() => {
    // axios.get("data/Data.JSON").then((res) => {
    //   setPortofolioItem(res.data.portfolio);
    // });
  }, []);
  return (
    <div>
      <Home />
      <Works />
      <Portofolio imgs={PortofolioItem} />
      <Profile />
      <About />
      <SocialMedia />
      <Contact />
    </div>
  );
}

export default Main;

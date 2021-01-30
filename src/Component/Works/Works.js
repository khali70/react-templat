import React, { Component } from "react";
// import axios from "axios";
import "./Works.css";
class Works extends Component {
  state = {
    works: [],
  };
  componentDidMount() {
    // axios.get("data/Data.JSON").then((res) => {
    //   console.log(res.data);
    //   this.setState({ works: res.data.works });
    // });
  }
  render() {
    const { works } = this.state;
    return (
      <div className="work">
        <div className="container">
          <h2 className="work-title">
            <span>My</span> Work
          </h2>
          {works.map((item, index) => (
            <div className={index === 0 ? "part first" : "part"} key={item.id}>
              <i className={item.icon_name}></i>
              <h4 className="part-title">{item.title} </h4>
              <hr className="line" />
              <p className="part-desc">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Works;

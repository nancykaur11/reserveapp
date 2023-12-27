import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import './Footer.css';
import image1 from "./icon/Frame 1.png";
import image2 from "./icon/Frame 3 (1).png";
import image3 from "./icon/Frame 4 (1).png";

export function Features() {
  return (
    <div style={{ background: "whitesmoke" }}>
      <div className="row pb-5 pt-5" style={{ color: "black" }}>
        <div className="col-4  bg-black" style={{ textAlign: "end" }}>
          <img src={image1} alt="Image 1" style={{ width: "40%" }} />
        </div>
        <div className="col-4 text-center ">
          <img src={image2} alt="Image 2" style={{ width: "40%" }} />
        </div>
        <div className="col-4 text-begin ">
          <img src={image3} alt="Image 3" style={{ width: "40%" }} />
        </div>
      </div>
      <div className="row text-center" style={{ fontSize: "large" }}>
      
        <div className="col-12 text-center bg-black ">
          <b> Here What a few of our customers say</b>
        </div>
        <div className="col-12 text-center bg-black ">
          <b> have to say about  us</b>
        </div>
      </div>
    </div>
  );
}

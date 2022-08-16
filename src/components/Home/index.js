import React from "react";
// import { Link, NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./index.css";

const Home = () => {
  // const { handleSectionSelect } = props;

  return (
    <>
      {/* <div className="wrap">
        <div className="top-plane"></div>
        <div className="bottom-plane"></div>
      </div> */}
      <Marquee gradient={false} speed={60}>
        <div className="title marquee-item">labchild</div>
        <div className="title marquee-item">labchild</div>
        <div className="title marquee-item">labchild</div>
        <div className="title marquee-item">labchild</div>
        <div className="title marquee-item">labchild</div>
        <div className="title marquee-item">labchild</div>
        <div className="title marquee-item">labchild</div>
      </Marquee>
      <div className="intro">
        <h2 class="subtitle text-center">Lelah Bates Childs</h2>
        <p>welcome to my website, where you can learn more about me</p>
      </div>
      <div className="skills">
        <p>
          html &#8226; css &#8226; javascript &#8226; ui/ux &#8226; server
          &#8226; database &#8226; photoshop &#8226; illustrator &#8226;
          indesign &#8226; net art &#8226; multi-media &#8226; paint &#8226;
          graphic design &#8226; fashion design &#8226; cocktail design
        </p>
      </div>
    </>
  );
};

export default Home;

import React from "react";
// import { Link, NavLink } from "react-router-dom";
import "./index.css";

const Home = () => {
  // const { handleSectionSelect } = props;

  return (
    <div className="bg-animation">
      <div className="wrap">
        <div className="top-plane"></div>
        <div className="bottom-plane"></div>
      </div>
      <h1 className="title">labchild</h1>
      <h2 class="subtitle">Lelah Bates Childs</h2>
      <p>welcome to my website, where you can learn more about me</p>
      {/* <div className="section-list">
        <NavLink to="/about" className="section-btn" onClick={() => handleSectionSelect('About')}>
          about me
        </NavLink>
        <Link to="/portfolio" className="section-btn">
          my work
        </Link>
        <Link to="/resume" className="section-btn">
          my experience
        </Link>
        <Link to="/contact" className="section-btn">
          get in touch
        </Link>
      </div> */}
      {/* <div className="text-block">
        <p>
          html css javascript &#8226; ui ux server database &#8226; adobe ps ai
          id &#38; more &#8226; copy writing &#38; editing &#8226; graphics
          menus &#38; fashion &#8226; net art multi-media &#38; paint
        </p>
      </div> */}
      <div className="marquee">
        <p className="marquee-1">
          html &#8226; css &#8226; javascript &#8226;{" "}
        </p>
        <p className="marquee-2">
          ui/ux &#8226; server &#8226; database &#8226;{" "}
        </p>
        <p className="marquee-3">
          photoshop &#8226; illustrator &#8226; indesign &#8226;{" "}
        </p>
        <p className="marquee-4">
          net art &#8226; multi-media &#8226; paint &#8226;{" "}
        </p>
        <p className="marquee-5">
          graphic design &#8226; fashion design &#8226; cocktail design &#8226;{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;

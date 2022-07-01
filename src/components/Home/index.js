import React from "react";
// import { Link, NavLink } from "react-router-dom";
import "./index.css";

const Home = () => {
  // const { handleSectionSelect } = props;

  return (
    <>
      {/* <div className="wrap">
        <div className="top-plane"></div>
        <div className="bottom-plane"></div>
      </div> */}
      <h1 className="marquee">
        {/* <div className="marquee-row"> */}
          <div className="title marquee-item">labchild</div>
          <div className="title marquee-item">labchild</div>
          <div className="title marquee-item">labchild</div>
          <div className="title marquee-item">labchild</div>
          <div className="title marquee-item">labchild</div>
          <div className="title marquee-item">labchild</div>
          <div className="title marquee-item">labchild</div>
        {/* </div> */}
      </h1>
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
      <div>
        <p>html &#8226; css &#8226; javascript</p>
        <p>ui/ux &#8226; server &#8226; database</p>
        <p>photoshop &#8226; illustrator &#8226; indesign</p>
        <p>net art &#8226; multi-media &#8226; paint</p>
        <p>graphic design &#8226; fashion design &#8226; cocktail design</p>
      </div>
    </>
  );
};

export default Home;

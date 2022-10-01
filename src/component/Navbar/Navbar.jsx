import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Bar from "@iconscout/react-unicons/icons/uil-bars";
import Minus from "@iconscout/react-unicons/icons/uil-minus";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
          <div className="n-name">Hitesh</div>
        </Link>
        <Toggle />
      </div>
      <div className="n-right">
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <Minus /> : <Bar />}
        </button>
        <div className={isMobile ? "n-list-mobile" : "n-list"}>
          <ul onClick={() => setIsMobile(false)}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experiance" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

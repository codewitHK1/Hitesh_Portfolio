import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import {} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="footer-content">
        <span>kumarhk1002@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.linkedin.com/in/hitesh-jaiswal-042390240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/codewitHK1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <Insta />
        </div>
        <div className="warnings">
          <span>
            All rights reserved to AXE-HITESH || Made with React,SwiperJS and
            Love
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

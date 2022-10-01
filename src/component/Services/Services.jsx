import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmozi from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          quis?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis?
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emozi={HeartEmozi}
            heading={"Design"}
            detail={"Figma,Sketch,Photoshop,adobe Illustrater"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "12rem", left: "-10rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emozi={Glasses}
            heading={"Developer"}
            detail={`Html,JavaScript,React,Node JS,MongoDB`}
          />
        </motion.div>
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ left: "12rem", top: "18rem" }}
        >
          <Card
            emozi={Humble}
            heading={"UI/UX"}
            detail={`XD,Template,Figma,PS,Coral Draw,SASS`}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

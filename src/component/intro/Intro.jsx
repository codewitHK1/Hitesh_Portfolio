import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thump from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Flotingdiv from "../flotingdiv/Flotingdiv";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "yellow" : "" }}>Hy! I Am</span>
          <span>Hitesh Kumar</span>
          <span>
            Frontent Developer with high level of experiance in web designing
            and development, producting the Quality work.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <a
            href="https://github.com/codewitHK1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/hitesh-jaiswal-042390240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="instagram.com">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector" />
        <img src={Vector2} alt="Vector2" />
        <img src={Boy} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="glassboy"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="flotingdiv"
          style={{ top: "-24%", left: "78%" }}
        >
          <Flotingdiv image={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "-5rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          className="flotingdiv"
          style={{ top: "18rem", left: "-2rem" }}
        >
          <Flotingdiv image={Thump} text1="Best Design" text2="Websites" />
        </motion.div>
        <div className="blur" style={{ background: "rbg(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5f5",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

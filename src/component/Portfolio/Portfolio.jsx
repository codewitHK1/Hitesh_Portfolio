import React from "react";
import "./PortFolio.css";
import Ecommerce from "../../img/ecommerce.png";
import Todo from "../../img/TODO LIST.png";
import Instabook from "../../img/Instabook.png";
import weatherapp from "../../img/HKWEATHER.png";
import food from "../../img/FOOD.jpg";
import portfolio from "../../img/PORTFOLIO.png";

import "swiper/css";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/*Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="mern">
        <h3>Main Project -MERN SOCIAL MEDIA APP</h3>

        <img src={Instabook} alt="" />
        <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
        <p style={{ color: darkMode ? "white" : "" }}>
          (React, Node JS, Express, MongoDB, Redux, Redux-thunk, Material UI )
        </p>
        <p>
          This is full stack SOCIAL MEDIA app developed using MERN stack. In
          this app i have emplemented almost every fuctionality which should be
          have a social media platform,
          <br /> you could login & signUp using your details ,add new posts,
          fallow the other users & like there posts . you can set your profile
          picture as well as your profile details.
          <br />
          In this app i have used Redux for whole app state management which
          allow us to control our data flow globlly
        </p>
        <button className="button">
          <a
            href="https://instabook001.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View This Project
          </a>
        </button>
      </div>
      {/*slider*/}
      <div className="projects">
        <div>
          <h3>Food Order Website</h3>
          <img src={food} alt="" />

          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>
            (HTML,CSS,JavaScript,AOS JS)
          </p>
          <p>
            This is a Animated Food Ordering Website developed using plain
            HTML,CSS & JavaScript.For animation i have used AOS motion library
          </p>
          <button className="button">
            <a
              href="https://codewithk1.github.io/FoodWeb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this Project
            </a>
          </button>
        </div>
        <div>
          <h3>E-Commerce Shop</h3>
          <img src={Ecommerce} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>(React,Tailwind CSS)</p>
          <p>
            This is a Shop UI developed using React and Tailwind CSS. In this i
            have created cart page,checkout page ,category wise item page etc.
          </p>
          <button className="button">
            <a
              href="https://webstore001.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this Project
            </a>
          </button>
        </div>
        <div>
          <h3>TO-DO App </h3>
          <img src={Todo} alt="" />

          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>
            (React Js, Bootstrap, Material UI , Context Api)
          </p>
          <p>
            This is Todo list app using react and context Api. you can add as
            well as delete you item in list
          </p>
          <button className="button">
            <a
              href="https://codewithk1.github.io/Todoapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this Project
            </a>
          </button>
        </div>
        <div>
          <h3>Live Weather Forecast App</h3>
          <img src={weatherapp} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>
            (React , Bootstrap, Live Weather Apis)
          </p>
          <p>
            This is the Live Weather Forecast app. You can Enter your location
            accross the globe to Get your live Location Weather info.
          </p>
          <button className="button">
            <a
              href="https://codewithk1.github.io/HKweather/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this Project
            </a>
          </button>
        </div>
        <div>
          <h3>React Portfolio</h3>
          <img src={portfolio} alt="" />

          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>
            (React , react-router-dom)
          </p>
          <p>
            This is the single page Portfolio Website created with using React
          </p>
          <button className="button">
            <a
              href="https://reactresumehk.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./PortFolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Todo from "../../img/TODO LIST.png";
import Instabook from "../../img/Instabook.png";
import weatherapp from "../../img/HKWEATHER.png";
import food from "../../img/FOOD.jpg";
import portfolio from "../../img/PORTFOLIO.png";
// import portfolio from "../../img";
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
        <h3>main Project -MERN SOCIAL MEDIA APP</h3>
        <a
          href="https://instabook001.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instabook} alt="" />
        </a>
      </div>
      {/*slider*/}
      <Swiper
        spaceBetween={27}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://codewithk1.github.io/FoodWeb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={food} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://webstore001.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://codewithk1.github.io/Todoapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Todo} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://codewithk1.github.io/HKweather/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weatherapp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://reactresumehk.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={portfolio} alt="" />
          </a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;

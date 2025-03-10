import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import picture4 from "../../img/picture4.PNG";
import picture3 from "../../img/picture3.PNG";
import picture5 from "../../img/picture5.png"
import picture6 from "../../img/picture6.jpeg"
import picture7 from "../../img/picture7.jpeg"
import picture8 from "../../img/picture8.jpeg"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}


      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="slider-slide">
          <h2 style={{ fontWeight: "bold" }}>Procurement Management System</h2>
            <a
              href="https://github.com/yesitha/ProcurementManagementSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img className="slider-image" src={picture4} alt="" />
            </a>
            <br/>
            <div className="slider-text">
              A software solution that helps organizations streamline and
              automate the process of purchasing goods, from the requisition of
              items to the payment to vendors, ensuring efficient procurement
              operations. This process also includes the selection of vendors
              and the filtering of appropriate items and services required by an
              organization.<br/> Role: Team Member|Full-Stack Developer <br/>
              Technologies: ReactJS, ASP.Net Core, MSSQL
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
          <h2 style={{ fontWeight: "bold" }}>Smart Ventilator</h2>



            <a
              href="https://github.com/yesitha/Smart-Ventilator"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img className="slider-image" src={picture3} alt="" />
            </a>
            <br />
            <div className="slider-text">
              A smart ventilator system that automates the supply of oxygen to
              patients with minimum professional attention. The oxygen supply is
              automated depending on whether the patient’s blood oxygen level is
              sufficient. Sensors measure the patient’s vital information, and
              solenoid valves control the oxygen supply when required. <br />
              Role: Group Leader|Programmer<br/>
              Technologies: C language, Atmel Studio,Proteus Simulation, KiCad, EasyEDA
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
          <h2 style={{ fontWeight: "bold" }}>Password Management & Generation Solution</h2>



            <a
              href="https://github.com/shakila2030/Password-Manager"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img className="slider-image" src={picture5} alt="" />
            </a>
            <br />
            <div className="slider-text">
            This project is a solution that helps you securely store, organize, and manage your passwords for different websites and
            platforms. It allows you to easily access and view your credentials with a user-friendly interface. Additionally, it includes
            a robust password generator, enabling you to create strong, unique passwords for each account.<br />
            Technologies: ReactJS, MongoDB, NodeJS

            </div>
          </div>
        </SwiperSlide>

        
        
      </Swiper>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="slider-slide">
          <h2 style={{ fontWeight: "bold" }}>Testing Project</h2>
            <a
              href="https://github.com/RashiniNethmini/ITQA-API-UI-Testing"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img className="slider-image" src={picture6} alt="" />
            </a>
            <br/>
            <div className="slider-text">
              This is a project that we used to write multiple API test cases for a project. It also includes multiple UI test cases written for https://practicesoftwaretesting.com/.
              <br />
              Technologies: Cucumber, Gerkin, Playwright
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
          <h2 style={{ fontWeight: "bold" }}>Car Rental Website</h2>



            <a
              href="https://github.com/Anuja-2000/car-rental-app"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img className="slider-image" src={picture7} alt="" />
            </a>
            <br />
            <div className="slider-text">
            A car rental system where users can select cars from a filtered list based on car type, rental and return locations, and
            rental dates. The system supports secure payment processing and allows users to make bookings seamlessly.
            <br />
              
              Technologies: NextJS, ASP.Net Core, MYSQL
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-slide">
          <h2 style={{ fontWeight: "bold" }}>Game Zone</h2>



            <a
              href="https://github.com/shakila2030/Game-Zone"
              target="_blank"
              rel="noopener noreferrer"
              className="image-link"
            >
              <img className="slider-image" src={picture8} alt="" />
            </a>
            <br />
            <div className="slider-text">
            A gaming software with accessibility features for visually impaired people that includes a variety of casual games, including tic-tac-toe, jump and dash, memory game and falling ball game.
            <br/>
            Technologies: ReactJS, NodeJS

            </div>
          </div>
        </SwiperSlide>

        
        
      </Swiper>

      
    </div>
  );
};

export default Portfolio;

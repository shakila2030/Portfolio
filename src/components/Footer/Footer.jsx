import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shakilakularathna6@gmail.com</span>
        <div className="f-icons">
          
        <a href="https://www.linkedin.com/in/shakila-kularathna-7523b5200/" target="_blank" rel="noopener noreferrer">
    <Linkedin color="white" size={"3rem"} />
  </a>
  <a href="https://github.com/shakila2030" target="_blank" rel="noopener noreferrer">
    <Gitub color="white" size={"3rem"} />
  </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import React from "react";
import { useEffect } from "react";
import { FaHardHat, FaTools, FaHome, FaBuilding } from "react-icons/fa";
// import HeaderImage from "../../assets/image0 (1).png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
// import { BsGithub } from "react-icons/bs";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <header id="header">
      {/* <div className="header-back"></div> */}
      <div className="container header-container" data-aos="fade-in">
        
        <div className="header-content">
          <h1>AXIUM</h1>
          <h2>GENERAL CONTRACTING</h2>
          <p>Residential & Commercial Construction, Remodeling, and Custom Builds in Los Angeles</p>
        </div>

        <div className="header-cta">
          <a href="#contact" className="btn primary">
            Request a Quote
          </a>
          <a href="#projects" className="btn light">
            View Projects
          </a>
        </div>

      </div>
      <div className="header-services">

  <div className="header-service">
    <FaHardHat className="service-icon" />
    <span>Construction</span>
  </div>

  <div className="service-divider"></div>

  <div className="header-service">
    <FaTools className="service-icon" />
    <span>Remodeling</span>
  </div>

  <div className="service-divider"></div>

  <div className="header-service">
    <FaHome className="service-icon" />
    <span>Additions & ADUs</span>
  </div>

  <div className="service-divider"></div>

  <div className="header-service">
    <FaBuilding className="service-icon" />
    <span>Commercial</span>
  </div>

</div>
    </header>
  );
};

export default Header;

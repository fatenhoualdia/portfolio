import React from "react";
import "./footer.css";
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer___logo">
        {" "}
      Faten khoualdia
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#home"> Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about">About </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#experience"> Experience</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#services"> Services</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#portfolio"> Portfolio</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"> <FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; fatenkhoualdia. All right are reserved.
        </small>

       
      </div>

     <div id="container">
  Make 
  <div id="flip">
    <div><div>wOrK</div></div>
    <div><div>lifeStyle</div></div>
    <div><div>Everything</div></div>
  </div>
  AweSoMe!
</div>

    </footer>
  );
};

export default Footer;

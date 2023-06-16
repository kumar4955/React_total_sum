import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo">
              <img
                src={require("../components/photo.png").default}
                alt="Logo"
                className="logo"
              />
              <span className="h5 font-weight-bold">Riwaj Boys Hostel</span>
            </div>
            <p className="footer-description">
              Welcome to the Riwaj Boys Hostel website! We have created a simple
              and user-friendly platform to provide you with all the information
              you need. Whether you're a student looking for a comfortable and
              convenient place to stay or a visitor interested in learning more
              about our facilities, you've come to the right place
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">Clickable Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Our Team</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Whys Riwaj Boys Hostel?</a>
              </li>
              <li>
                <a href="/">Google Map</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="/" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="/" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className="footer-text">
            &copy; Devwares, 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

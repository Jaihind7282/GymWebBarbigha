import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <h2>The Gym | Barbigha</h2>
          <p>
            Empowering individuals to achieve fitness goals and lead a healthy
            lifestyle.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/membership">Membership Plan</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: contact@stayfitgym.com</p>
          <p>Phone: +91 9876543210</p>
          <p>
            Address:
            <br />
            Near Hatiya More, Barbigha
          </p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Stay Fit Stay Healthy. All rights
          reserved.
          <br /> Developed By @im_JAI SINGH
        </p>
      </div>
    </footer>
  );
};

export default Footer;

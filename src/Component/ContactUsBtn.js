import React from "react";
import "./CTAButton.css";

const CTAButton = () => {
  return (
    <div className="cta-container">
      <div className="cta-text">
        <h2>The Gym | Barbigha</h2>
        <p>
          Transform your body, mind, and life. Contact Us for a healthier
          future!
        </p>
      </div>
      <button className="cta-button">Contact Us</button>
    </div>
  );
};

export default CTAButton;

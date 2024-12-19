import React from "react";
import "./CTAButton.css";

const CTAButton = () => {
  return (
    <div className="cta-container">
      <div className="cta-text">
        <h2>Why The Gym?</h2>
        <p>
          Transform your body, mind, and life. Join now for a healthier future!
        </p>
      </div>
      <button className="cta-button">Join Now</button>
    </div>
  );
};

export default CTAButton;

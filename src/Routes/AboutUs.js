import React from "react";
import "./AboutUs.css";

const GymMembersCard = () => {
  const members = [
    {
      role: "Founder",
      name: "Rajesh Kumar",
      image: "images/founder.jpg",
      message:
        "Welcome to our gym! We're here to help you achieve your fitness goals.",
    },
    {
      role: "Trainer",
      name: "Piyush Pandey",
      image: "images/photo1.jpg",
      message: "Let’s work together to get stronger and healthier every day!",
    },
    {
      role: "Trainer",
      name: "Rohan Singh",
      image: "images/photo1.jpg",
      message: "I’m excited to guide you on your fitness journey!",
    },
    {
      role: "Trainer",
      name: "Anjali Kumari",
      image: "images/photo1.jpg",
      message:
        "No matter where you start, we will push you to reach your full potential!",
    },
  ];

  return (
    <>
      <div className="our-gallery-container">
        <div className="our-gallery-header">
          <h1>About Us</h1>
          <p>
            Welcome to our fitness community! We are dedicated to helping you
            achieve your health and fitness goals with personalized training.
          </p>
        </div>
      </div>
      <div className="about-us-container">
        <div className="card-container">
          {members.map((member, index) => (
            <div className="card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="card-image"
              />
              <div className="card-info">
                <h3 className="card-role">{member.role}</h3>
                <h2 className="card-name">{member.name}</h2>
                <p className="card-message">{member.message}</p>{" "}
                {/* New section for message */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GymMembersCard;

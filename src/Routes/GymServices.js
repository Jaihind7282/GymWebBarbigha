import React from "react";
import "./GymServices.css";
import ContactUsBtn from "../Component/ContactUsBtn";

const services = [
  {
    title: "Personal Training",
    description:
      "One-on-one training sessions with certified personal trainers to help you achieve your fitness goals.",
    image: "images/photo1.jpg",
  },
  {
    title: "Group Classes",
    description:
      "Join group fitness classes for a fun, energetic workout with others.",
    image: "images/photo2.jpg",
  },
  {
    title: "Cardio Equipment",
    description:
      "We offer a variety of cardio machines like treadmills, bikes, and ellipticals for your cardio workouts.",
    image: "images/photo3.jpg",
  },
  {
    title: "Strength Training",
    description:
      "Lift weights and build muscle with our extensive range of strength training equipment.",
    image: "images/photo4.jpg",
  },
  {
    title: "Yoga & Pilates",
    description:
      "Relax and improve flexibility with our yoga and pilates sessions, guided by expert instructors.",
    image: "images/photo3.jpg",
  },
  {
    title: "Nutrition Coaching",
    description:
      "Get personalized nutrition advice from our expert coaches to optimize your workout results.",
    image: "images/photo2.jpg",
  },
  {
    title: "Sauna & Steam Room",
    description:
      "Unwind and recover in our sauna and steam rooms after a tough workout.",
    image: "images/photo1.jpg",
  },
  {
    title: "Locker Rooms & Showers",
    description:
      "Our clean and spacious locker rooms and showers provide a comfortable space for you to refresh.",
    image: "images/photo2.jpg",
  },
];

const GymServices = () => {
  return (
    <div>
      <div className="gym-services-container">
        <h2>Our Gym Services</h2>
        <p className="intro-paragraph">
          We offer a variety of services designed to help you reach your fitness
          goals.
        </p>
        <div className="services-list">
          {services.map((service, index) => (
            <div
              className={`service-item ${
                index % 2 === 0 ? "white-bg" : "black-bg"
              }`}
              key={index}
            >
              <div className="service-description">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUsBtn />
    </div>
  );
};

export default GymServices;

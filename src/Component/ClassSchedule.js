import React from "react";
import "./ClassSchedule.css";

const ClassSchedule = () => {
  const classes = [
    {
      name: "Weight Loss Training",
      description: "A focused program for losing weight and improving stamina.",
      instructor: "Sunny",
      schedule: [
        { time: "Morning: 6:00 AM - 7:00 AM" },
        { time: "Evening: 6:00 PM - 7:00 PM" },
      ],
    },
    {
      name: "Weight Gain Training",
      description: "Training for building muscle and increasing weight.",
      instructor: "Rohit",
      schedule: [
        { time: "Morning: 7:30 AM - 8:30 AM" },
        {
          time: "Evening: 7:30 PM - 8:30 PM",
        },
      ],
    },
    {
      name: "Lifting",
      description:
        "Strength training focused on building muscle and lifting techniques.",
      instructor: "Guru",
      schedule: [
        { time: "Morning: 5:30 AM - 6:30 AM" },
        { time: "Evening: 6:30 PM - 7:30 PM" },
      ],
    },
    {
      name: "Mixing",
      description:
        "Combination of strength training, cardio, and flexibility exercises.",
      instructor: "Abhisekh",
      schedule: [
        { time: "Morning: 7:00 AM - 8:00 AM" },
        { time: "Evening: 7:00 PM - 8:00 PM" },
      ],
    },
  ];

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h1>Class Schedules</h1>
        <p>Find the perfect class for your fitness goals!</p>
      </div>
      <div className="schedule-cards">
        {classes.map((classItem, index) => (
          <div
            className={`schedule-card ${
              index % 2 === 0 ? "white-background" : "black-background"
            }`}
            key={index}
          >
            <h2>{classItem.name}</h2>
            <p className="class-description">{classItem.description}</p>
            <p className="instructor">Instructor: {classItem.instructor}</p>
            <ul className="schedule-timing">
              {classItem.schedule.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.time}</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSchedule;

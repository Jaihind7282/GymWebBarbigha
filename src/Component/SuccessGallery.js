import React from "react";
import Slider from "react-slick";
import "./SuccessGallery.css";

// Import the necessary slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stories = [
  {
    name: "Aarav Sharma",
    image: "images/success1.jpg", // Client's image
    journey:
      "Aarav joined our gym a year ago. Through regular workouts and dedication, he lost 18 kg and increased his stamina. Now he's focusing on strength training for competitive fitness events!",
  },
  {
    name: "Priya Patel",
    image: "images/success2.jpg",
    journey:
      "Priya was new to fitness when she joined our gym. With the right guidance and a balanced diet, she lost 12 kg, improved her strength, and built confidence to lead an active lifestyle.",
  },
  {
    name: "Rohan Desai",
    image: "images/success3.jpg",
    journey:
      "Rohan struggled with inconsistent fitness habits until joining our gym. Over six months, he lost 15 kg, improved his endurance, and has now set a goal to run his first half-marathon.",
  },
  {
    name: "Ananya Iyer",
    image: "images/success4.jpg",
    journey:
      "Ananya had always prioritized her work over fitness. With a structured fitness program and proper guidance, she lost 10 kg, gained strength, and felt re-energized to balance work and health effectively.",
  },
];

const ClientSuccessStories = () => {
  // Slick carousel settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 2000, // On smaller screens
        settings: {
          arrows: false, // Hide arrows on small screens
          centerMode: true, // Center the slide
          centerPadding: "0px", // Space around the center slide
        },
      },
    ],
  };

  return (
    <div className="client-success-stories">
      <h2 className="section-title">Client Success Stories</h2>
      <p className="section-title-p">
        Find the perfect class for your fitness goals!
      </p>

      <Slider {...settings}>
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <div className="client-image">
              <img src={story.image} alt={story.name} />
            </div>
            <div className="client-info">
              <h3>{story.name}</h3>
              <p className="journey">{story.journey}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSuccessStories;

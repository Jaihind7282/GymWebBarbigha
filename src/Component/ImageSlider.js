import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import AnimatedText from "./AnimatedText";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "images/photo1.jpg",
    "images/photo4.jpg",
    "images/photo3.jpg",
    "images/photo2.jpg",
    "images/photo5.jpg",
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <AnimatedText />
      </div>
    </div>
  );
};

export default ImageSlider;

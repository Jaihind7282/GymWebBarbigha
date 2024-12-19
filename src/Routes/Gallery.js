import React from "react";
import "./Gallery.css";

const galleryItems = [
  { id: 1, src: "images/photo1.jpg", quote: "Strength starts from within" },
  { id: 2, src: "images/photo2.jpg", quote: "Push yourself beyond limits" },
  { id: 3, src: "images/photo5.jpg", quote: "Stay strong, stay motivated" },
  { id: 4, src: "images/photo3.jpg", quote: "Every day is a workout" },
  { id: 5, src: "images/photo4.jpg", quote: "No pain, no gain" },
  // Add more images and quotes as needed
];

const OurGallery = () => {
  return (
    <div className="our-gallery-container">
      <div className="our-gallery-header">
        <h1>Our Gallery</h1>
        <p>
          Discover the power of consistency and commitment in our gym. Here's a
          collection of our fitness journey, showcasing strength and
          determination.
        </p>
      </div>

      <div className="our-gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="our-gallery-item">
            <img
              src={item.src}
              alt={`Gym workout ${item.id}`}
              className="our-gallery-image"
            />
            <div className="our-quote-overlay">
              <p>{item.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGallery;

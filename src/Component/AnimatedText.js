import { useState, useEffect } from "react";
import "./AnimatedText.css";

const AnimatedText = () => {
  const words = ["EAT", "SLEEP", "REPEAT"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every 1 second

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <>
      <div className="quote-overlay">{words[index]}</div>
      <p className="quote-overlay-p">Stay Fit, Stay Healthy</p>
    </>
  );
};

export default AnimatedText;

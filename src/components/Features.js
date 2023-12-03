import React from 'react';
import { FaCheckCircle, FaBullseye, FaHeart } from "react-icons/fa";
import "./FeatureStyles.css";

const Features = () => {
  // Define the color you want for the icons
  const iconColor = "#ef8172"; // Use the desired color

  return (
    <div>
      <div className="container">
        <div className="brand-section-slider">
          <div className="slide">
            <FaCheckCircle size={130} style={{ color: iconColor }} />
            <h3 className="feature-title">Easy to use.</h3>
            <p className='des'>So easy to use, even your dog could use it.</p>
          </div>
          <div className="slide">
            <FaBullseye size={130} style={{ color: iconColor }} />
            <h3 className="feature-title">Elite Clientele.</h3>
            <p className='des'>We have all the dogs, the greatest dogs.</p>
          </div>
          <div className="slide">
            <FaHeart size={130} style={{ color: iconColor }} />
            <h3 className="feature-title">Guaranteed to work..</h3>
            <p className='des'>Find the love of your dog's life or your money back..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

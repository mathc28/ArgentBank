import React from 'react';
import './style.css';


const features = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p className="feature-txt">{description}</p>
    </div>
  );
};

export default features;
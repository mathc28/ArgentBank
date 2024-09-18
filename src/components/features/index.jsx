import React from 'react';
import './style.css';
import Chat from "./icon-chat.png"
import Money from "./icon-money.png"
import Security from "./icon-security.png"


const features = () => {
  return (
    <div className='bankinfo'>
      <div className="feature-item">
        <img src={Chat} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">You are our #1 priority</h3>
        <p className="feature-txt">Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes.</p>
      </div>    
      <div className="feature-item">
        <img src={Money} alt="Money Icon" className="feature-icon" />
          <h3 className="feature-item-title">More savings means higher rates</h3>
          <p className="feature-txt">The more you save with us, the higher your interest rate will be!</p>
      </div> 
      <div className="feature-item">
        <img src={Security} alt="Security Icon" className="feature-icon" />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p className="feature-txt">We use top of the line encryption to make sure your data and money
          is always safe.</p>
      </div> 
    </div>
  );
};

export default features;
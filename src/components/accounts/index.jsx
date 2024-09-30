import React from 'react';
import './style.css';

const accounts = ({ title, amount, amountDescription }) => {
  return (
    <div className='background'>
      <div className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{amountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </div>
    </div>      
  );
};

export default accounts;
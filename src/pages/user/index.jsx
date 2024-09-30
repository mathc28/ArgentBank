import React, { useEffect } from 'react';
import Greetings from '../../components/greetings';
import Accounts from '../../components/accounts';
import './style.css';
import { useNavigate } from 'react-router-dom';


const User = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // Si le token n'est pas présent, redirige vers la page d'accueil
    if (!token) {
      console.log('Token not found, redirecting to homepage.');
      navigate('/'); // Redirige vers la page d'accueil
    }
  }, [navigate]);

  return (
    <div className='backgroundcolor'>
      <Greetings />   
      <div classNsame="accounts-list">
        <Accounts 
          title="Argent Bank Checking (x8349)" 
          amount="$2,082.79" 
          amountDescription="Available Balance" 
        />
        <Accounts 
          title="Argent Bank Savings (x6712)" 
          amount="$10,928.42" 
          amountDescription="Available Balance" 
        />
        <Accounts 
          title="Argent Bank Checking (x8349)" 
          amount="$184.30" 
          amountDescription="Current Balance" 
        />
    </div>
    </div>
  );
};

export default User;
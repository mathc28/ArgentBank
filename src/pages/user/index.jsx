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
      <Accounts />
    </div>
  );
};

export default User;
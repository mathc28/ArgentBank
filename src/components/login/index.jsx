import Icon from './circle-user-solid.svg';
import './style.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserAuth, setUserInfos } from '../../feature/login';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setRememberMe(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("Submitting login form...");
    
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
    
                console.log("Login successful, received token:", token);
    
                // Call API pour obtenir les données du profil de l'utilisateur
                const profilInfos = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`, // Inclure le token dans les en-têtes
                    },
                });
    
                if (!profilInfos.ok) {
                    throw new Error('Failed to fetch user profile data');
                }
                // Extraire les données du profil de la réponse
                const profilData = await profilInfos.json();
                console.log("User profile data retrieved:", profilData);
    
                // Dispatch des informations d'authentification
                dispatch(setUserAuth({ email, token }));
                console.log("Dispatched setUserAuth with:", { email, token });
                
                // Dispatch des informations utilisateur (firstName au lieu de userName)
                dispatch(setUserInfos({
                    email: profilData.body.email,
                    firstName: profilData.body.firstName, // Utilisation du firstName
                    lastName: profilData.body.lastName,
                }));
                console.log("Dispatched setUserInfos with:", {
                    email: profilData.body.email,
                    firstName: profilData.body.firstName,
                    lastName: profilData.body.lastName,
                });
    
                navigate('/user');
                resetForm();
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Une erreur est survenue. Veuillez réessayer.");
                console.error("Login error:", errorData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Une erreur réseau est survenue. Veuillez vérifier votre connexion.");
        }
    };
    
    return (
        <section className="main-login">
            <div className="sign-in-content">
                <img src={Icon} alt="user icon" className='usericon'/>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="form-username">Username</label>
                        <input 
                            id='form-username' 
                            type='email' 
                            value={email} 
                            onChange={(event) => setEmail(event.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                            id='password' 
                            type='password' 
                            value={password} 
                            onChange={(event) => setPassword(event.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-remember">                       
                        <input 
                            id='remember-me' 
                            type='checkbox' 
                            checked={rememberMe} 
                            onChange={(event) => setRememberMe(event.target.checked)} 
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default Login;

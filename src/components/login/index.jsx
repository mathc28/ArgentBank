import Icon from './circle-user-solid.svg';
import './style.css';
import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { setToken } from '../../feature/user';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate(); 
     
    useEffect(() => {
 
    const response = fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
        });
        if (response.ok) {
            const data = response.json();    
            const token = data.body.token;
            dispatch(setToken({token, rememberMe}));
            navigate('/user');
        } else {
            setError(true)
        }   
    }, []);

    return (
        <section className="main-login">
            <div className="sign-in-content">
                <img src={Icon} alt="user icon" className='usericon'/>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input id='username' type='text' value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input id='password' type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="input-remember">
                        <label for="remember-me">Remember me</label>
                        <input id='remember-me' type='checkbox' value={rememberMe} onChange={(event) => setRememberMe(event.target.value)} />
                    </div>
                    <a href="./user" className="sign-in-button">Sign In</a>
                    {error && <p>Une erreur est survenue</p>}
                </form>
            </div>
        </section>
    );
};

export default Login;
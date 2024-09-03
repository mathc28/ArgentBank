import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png';
import Iconuser from './circle-user-solid.svg';
import Iconlogout from './arrow-right-from-bracket-solid.svg';
import './style.css';
import { logout } from '../../feature/login';
import { Link } from 'react-router-dom';

const Header = () => {
    const { token, firstName } = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("firstName from Redux:", firstName); // Ajoutez ce log pour vérifier


    const handleLogout = () => {
        // Dispatcher l'action de déconnexion
        dispatch(logout());

        // Redirection vers la page d'accueil
        navigate('/');
    };

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {token ? (
                    <div className='nav-right'>
                        <div className="main-nav-item">
                            <img className="usericon" src={Iconuser} alt="icone user" />              
                            {firstName}
                        </div>
                        <button className="main-nav-item btn-nav" onClick={handleLogout}>
                            <img className="usericon" src={Iconlogout} alt="icone logout" />
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link className="main-nav-item" to="/signin">
                            <img
                                className="usericon"
                                src={Iconuser}
                                alt="icone user"
                            />
                            Sign In
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;

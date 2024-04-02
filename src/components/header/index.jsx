import React from 'react';
import Logo from './logo.png';
import Iconuser from './circle-user-solid.svg'
import './style.css'


const header = () => {
    return (
    <div className='main-nav'>
        <a className="main-nav-logo" href="/">
            <img src={Logo} alt="Argent Bank Logo"/>
        </a>
        <a className="main-nav-item" href="./signin">
          <img src={Iconuser} alt="icone utilisateur" className='usericon'/>  
            Sign In
        </a>
    </div>
    );
};

export default header;
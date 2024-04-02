import React from 'react';
import { useState } from 'react';
import {useSelector,} from 'react-redux';
import './style.css'
import { setUserInfos } from '../../feature/user';

const Greeting = () => {

    const user = useSelector(state => state.user);
    const [display, setDisplay] = useState(true);

    // TODO : Faire le formulaire, récupérer le token et envoyer le fetch pour modifier les infos
    // Si OK, on modifie dans redux les infos nom / prénom

    return (
        <div className='background'>
            <div className="header">
            <h1>Welcome back<br />{user.firstname} {user.lastname}!</h1>
            <button className="edit-button" onClick={() => setDisplay(!display)} >Edit Name</button>
        </div>
        <div>
            <h2>Edit user info</h2>
                <form>
                    <div className="edit-input">
                        <label htmlFor="username">User name:</label>
                        <input type="text" id="username" defaultValue={user.username} />
                    </div>
                    <div className="edit-input">
                        <label htmlFor="firstname">First name:</label>
                        <input type="text" id="firstname" defaultValue={user.firstname} />
                    </div>
                    <div className="edit-input">
                        <label htmlFor="lastname">Last name:</label>
                        <input type="text" id="lastname" defaultValue={user.lastname} />
                    </div>
                    <div className="buttons">
                        <button className="edit-username-button" onClick={setUserInfos}>Save</button>
                        <button className="edit-username-button" onClick={() => setDisplay(!display)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Greeting;
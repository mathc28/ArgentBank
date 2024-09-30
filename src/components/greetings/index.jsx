import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Greeting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { firstName, lastName, userName } = useSelector((state) => state.login);

  const [display, setDisplay] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);


  const handleSave = (e) => {
    e.preventDefault();

    console.log('Saving new user info:', { newUserName });

    dispatch({
      type: 'login/setUserInfos',
      payload: {
        firstName, // Nouveau prénom
        lastName,
        userName: newUserName, // Nouveau username
      },
    });
    setDisplay(false);
  };

  const handleCancel = () => {
    setNewUserName(userName);   // Réinitialise à l'ancien username
    setDisplay(false);
  };

  return (
    <div className="background">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        {!display && (
          <button className="edit-button" onClick={() => setDisplay(true)}>
            Edit Info
          </button>
        )}
      </div>
      {display && (
        <div className="hidden-form">
          <h2 className="hidden-form-title">Edit User Info</h2>
          <form className="form" onSubmit={handleSave}>
            <div className="edit-input">
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                value={newUserName} // Utilise l'état local pour gérer le username
                onChange={(e) => setNewUserName(e.target.value)} // Permet la modification du username
              />
            </div>
            <div className="edit-input">
              <label htmlFor="firstname">First name:</label>
              <input
                type="text" id="firstname" value={firstName} readOnly />
            </div>
            <div className="edit-input">
              <label htmlFor="lastname">Last name:</label>
              <input type="text" id="lastname" value={lastName} readOnly />
            </div>
            <div className="buttons">
              <button type="submit" className="edit-username-button">
                Save
              </button>
              <button
                type="button"
                className="edit-username-button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Greeting;

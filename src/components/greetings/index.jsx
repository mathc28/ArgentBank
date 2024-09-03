import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';

const Greeting = () => {
  const { firstName, lastName } = useSelector((state) => state.login);
  const [display, setDisplay] = useState(false);



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
            Edit Name
          </button>
        )}
      </div>
      {display && (
        <div className="hidden-form">
          <h2 className="hidden-form-title">Edit User Info</h2>
          <form className="form">
            <div className="edit-input">
              <label htmlFor="username">User name:</label>
              <input type="text" id="username" value=""  /> 
            </div>
            <div className="edit-input">
              <label htmlFor="firstname">First name:</label>
              <input type="text" id="firstname" value={firstName} readOnly />
            </div>
            <div className="edit-input">
              <label htmlFor="lastname">Last name:</label>
              <input type="text" id="lastname" value={lastName} readOnly />
            </div>
            <div className="buttons">
              <button type="submit" className="edit-username-button">
                Save
              </button>
              <button type="button" className="edit-username-button" >
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
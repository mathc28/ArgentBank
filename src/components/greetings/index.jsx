import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { setUserInfos } from '../../feature/login';

const Greeting = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [editedUser, setEditedUser] = useState({ username: user.username });
  const [error, setError] = useState('');

  // Effect to check token and fetch user info
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('API Response:', data); // Debug
          if (data.success) {
            console.log('User data fetched:', data.body); // Debug
            dispatch(setUserInfos(data.body)); // Assurez-vous que setUserInfos prend un objet utilisateur complet
          } else {
            setError('Failed to fetch user info');
          }
        })
        .catch((error) => {
        });
    }
  }, [dispatch]);


  const handleChange = (event) => {
    const { id, value } = event.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Update API Response:', data); // Debug
        if (data.success) {
          // Mettre à jour les informations dans Redux
          dispatch(setUserInfos(editedUser));
          // Masquer le formulaire
          setDisplay(false);
          setError('');
        } else {
          // Gérer les erreurs côté serveur
          setError('Update error, please try again');
        }
      })
      .catch((error) => {
        console.error('Erreur :', error);
        setError('Erreur lors de la mise à jour, veuillez réessayer.');
      });
  };

  const handleCancel = () => {
    setDisplay(false);
  };

  return (
    <div className="background">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.firstname} {user.lastname}!
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
          <form className="form" onSubmit={handleSubmit}>
            <div className="edit-input">
              <label htmlFor="username">User name:</label>
              <input type="text" id="username" value={editedUser.username} onChange={handleChange} />
            </div>
            <div className="edit-input">
              <label htmlFor="firstname">First name:</label>
              <input type="text" id="firstname" value={user.firstname} readOnly />
            </div>
            <div className="edit-input">
              <label htmlFor="lastname">Last name:</label>
              <input type="text" id="lastname" value={user.lastname} readOnly />
            </div>
            <div className="buttons">
              <button type="submit" className="edit-username-button">
                Save
              </button>
              <button type="button" className="edit-username-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default Greeting;
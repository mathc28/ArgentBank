import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { setUserInfos } from '../../feature/login';


import Greetings from '../../components/greetings';
import Accounts from '../../components/accounts';

import './style.css';


const User = () => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        const fetchUserInfos = async () => {
            if (token) {
                const response = await fetch('http://localhost:3001/api/v1/user/signup', {
                    method: 'POST',    
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = response.json();
                dispatch(setUserInfos({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    userName: data.userName,
                }));
            }
        };

        fetchUserInfos();
    }, [token, dispatch]);


        // Récupérer le token (redux)

        /*
        fetch('http://locahost:3001/api/v1/user/profile', {
            method: 'GET',
            headers: {...}

        })
        .then(response => response.json())
        .then(data => {
            dispatch(setUserInfos({
                firstname: data.firstname,
                lastname: data.lastname,
            }));
            setIsLoding(false)
        })
        */

        // Si ca ce passe pas bien => Soit affichage d'une erreur soit redirection vers /connexion

    


    // TODO : 1er truc à faire, on récupère le token de redux, et on tente un fetch pour récupérer les infos du user => on les stocks dans redux
    // Si le résultat est OK, alors on affiche la page avec setIsLoading(false)
    // Si le résultat est KO, alors on redirige vers la page connexion

    return (
        <div className='backgroundcolor'>
         <Greetings />   
         <Accounts />
        </div>
    );
};

export default User;
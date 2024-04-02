import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import Greetings from '../../components/greetings';
import Accounts from '../../components/accounts';

import {setUserInfos} from '../../feature/user'

import './style.css';


const User = () => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    const [isLoading, setIsLoding] = useState(false);

    useEffect(() => {

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

    }, [])


    // TODO : 1er truc à faire, on récupère le token de redux, et on tente un fetch pour récupérer les infos du user => on les stocks dans redux
    // Si le résultat est OK, alors on affiche la page avec setIsLoading(false)
    // Si le résultat est KO, alors on redirige vers la page connexion

    if(isLoading) {
        return (<p>Chargement en cours..</p>)
    }

    return (
        <div className='backgroundcolor'>

            {user.token}
         <Greetings />   
         <Accounts />
        </div>
    );
};

export default User;
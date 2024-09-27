// Importation des composants et des éléments nécessaires depuis React Router
import { Routes, Route } from "react-router-dom";

import Accueil from "../pages/home";
import User from "../pages/user";
import Connexion from "../pages/signin"

/**
 * Configuration des routes de l'application
 */
function Router (){
  return <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/signin" element={<Connexion />} />
    <Route path="/user" element={<User />} />
  </Routes>
}

export default Router
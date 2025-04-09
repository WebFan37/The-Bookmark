import { useState } from 'react';
import './Appli.scss';
// import Header from './Header';
// import ListeDossier from './ListeDossier';
import { useEffect } from 'react';
// import Dossier from './Dossier';

import Accueil from './Accueil';
import PageUtilisateur from './PageUtilisateur';
import { observerEtatConnexion } from '../code/utilisateur';

function Appli() {
  
 //State pour savoir si on est connecte
 const [utilisateur, setUtilisateur] = useState(null);

 //Observer l'etat de la connexion
 // Passer la fonction observerEtatConnexion
 useEffect(() => observerEtatConnexion(setUtilisateur), [])

  return (
    <div className='Appli'>
     {/* ON retourne Accueil sil pas connecte  */}

     {utilisateur ? <PageUtilisateur utilisateur={utilisateur}/> : <Accueil />  }
     
     
    </div>
     
   
  )
}

export default Appli;

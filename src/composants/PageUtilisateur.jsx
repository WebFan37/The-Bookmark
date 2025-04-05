import { useState } from 'react';
import './PageUtilisateur.scss';
import Header from './Header';
import ListeDossier from './ListeDossier';
import { useEffect } from 'react';
import Dossier from './Dossier';

function PageUtilisateur({utilisateur}) {
  
  const [dossiers, setDossiers] = useState(
    ()=> {
     return JSON.parse(localStorage.getItem('signets-dossier')) || []
    }
  )
  useEffect(
    ()=> window.localStorage.setItem('signets-dossier', JSON.stringify(dossiers)), [dossiers]
  )
 

  return (
    <div className='PageUtilisateur'>
     <Header utilisateur={utilisateur}/>
     <ListeDossier dossiers={dossiers} setDossiers={setDossiers}/>
    </div>
     
   
  )
}

export default PageUtilisateur;

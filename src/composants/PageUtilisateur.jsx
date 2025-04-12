import { useState } from 'react';
import './PageUtilisateur.scss';
import Header from './Header';
import ListeDossier from './ListeDossier';
import { useEffect } from 'react';
import { lire } from '../code/dossier';

function PageUtilisateur({utilisateur}) {
  
  const [dossiers, setDossiers] = useState([])
  //Pas besoin de UseEffect

  //LIRE DOSSIER dans FireStore
  async function lireDossiers(){
    const dossierFS = await lire(utilisateur.uid)


    //Map le dossierFS
    setDossiers(
      dossierFS.map(
        dossier => ({id: dossier.id, ...dossier.data()})
      )
    )
    
  }

  useEffect(
    ()=> {lireDossiers()}, //Accolat == return qqch. {}
     []
    
  )
 

  return (
    <div className='PageUtilisateur'>
     <Header utilisateur={utilisateur}/>
     <ListeDossier utilisateur={utilisateur} dossiers={dossiers} setDossiers={setDossiers}/>
    </div>
     
   
  )
}

export default PageUtilisateur;

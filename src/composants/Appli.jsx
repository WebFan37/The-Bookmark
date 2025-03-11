import { useState } from 'react';
import './Appli.scss';
import Header from './Header';
import ListeDossier from './ListeDossier';
import { useEffect } from 'react';
import Dossier from './Dossier';

function Appli() {
  
  const [dossiers, setDossiers] = useState(
    ()=> {
     return JSON.parse(localStorage.getItem('signets-dossier')) || []
    }
  )
  useEffect(
    ()=> window.localStorage.setItem('signets-dossier', JSON.stringify(dossiers)), [dossiers]
  )
 

  return (
    <div className='Appli'>
     <Header/>
     <ListeDossier dossiers={dossiers} setDossiers={setDossiers}/>
    </div>
     
   
  )
}

export default Appli;

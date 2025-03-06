import './ListeDossier.scss';
import Dossier from './Dossier.jsx';
import Dossiers from '../data/liste-dossiers.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function ListeDossier() {

  const [etatBouton, setEtatBouton] = useState(false);

  function ajouterSignet(){

    setEtatBouton(!etatBouton);
    console.log('Ajouter un signet', etatBouton);
  }

    
  return (

    <div className="ListeDossier">
      <ul >
       {
       Dossiers.map(doss => (
        <Dossier key={doss.id} {...doss}/>
        )
       )
       } 
      </ul>
    <Fab color="primary" aria-label="add" onClick={ajouterSignet} className='boutonAjouter' >
      <AddIcon/> 
    </Fab>  

    </div>
    
  )
}

export default ListeDossier;

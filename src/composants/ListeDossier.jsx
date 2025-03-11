import './ListeDossier.scss';
import Dossier from './Dossier.jsx';
// import Dossiers from '../data/liste-dossiers.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Form from './Form.jsx';

function ListeDossier({dossiers, setDossiers}) {

  const [etatBouton, setEtatBouton] = useState(false);

  function ajouterSignet(){

    setEtatBouton(true);
    console.log('Ajouter un signet', etatBouton);
  }

  //FONCTION IMPORTANTE
  function ajouter(titre, couverture, couleur){
    const nouveauObjet = {
      id: crypto.randomUUID, 
      titre: titre,
      couleur: couleur, 
      couverture: couverture,
      dateModif: Date.now(), 
    } 
    setDossiers([...dossiers, nouveauObjet])

    console.log(nouveauObjet)
  }

  function supprimer(id){
    setDossiers(dossiers.filter((doss)=> doss.id!=id ));
  }
  

    
  return (

    <div className="ListeDossier">
      <ul >
       {
       dossiers.map(doss => (
        <Dossier key={doss.id} {...doss} supprimer={supprimer}/>
        )
       )
       } 
      </ul>
    <Fab color="primary" aria-label="add" onClick={ajouterSignet} className='boutonAjouter' >
      <AddIcon/> 
    </Fab>  

    {etatBouton && <Form etatBouton={etatBouton} setEtatBouton={setEtatBouton} action={ajouter}/>}

   

    </div>
    
  )
}

export default ListeDossier;

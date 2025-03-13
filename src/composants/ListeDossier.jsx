import './ListeDossier.scss';
import Dossier from './Dossier.jsx';
// import Dossiers from '../data/liste-dossiers.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Form from './Form.jsx';

function ListeDossier({dossiers, setDossiers}) {

  const [ouvert, setOuvert] = useState(false);

  function ajouterSignet(){

    setEtatBouton(true);
    console.log('Ajouter un signet', etatBouton);
  }

  //FONCTION IMPORTANTE AJOUTER
  function ajouter(titre, couverture, couleur){
    const nouveauObjet = {
      id: crypto.randomUUID(), 
      titre: titre,
      couleur: couleur, 
      couverture: couverture,
      dateModif: Date.now(), 
    } 
    //Etaler l'ancien tableau
    //Ajouter nouveau element
    setDossiers([...dossiers, nouveauObjet])

    // console.log(nouveauObjet)
  }

  //========FONCTION
  function supprimer(id){

    //doss.id!=id retourne false quand ils sont egaux
    setDossiers(dossiers.filter((doss)=> doss.id!=id ));
  }

  //=====FONCTION MODIFIER==//
  //=======================//
  function modifier(id, titre, couverture, couleur){
    setDossiers(dossiers.map(
      doss => {
        //Si id du map n'est pas la meme
        //ne fait rien 
        if(doss.id != id){
          return doss;

          //Si meme,
          //retourner ces elements 
        } else {
          return {
            id: id,
            titre: titre,
            couverture: couverture,
            couleur: couleur,
            dateModification: Date.now()
          }
        }
      }
    ))
  }
  

    
  return (

    <div className="ListeDossier">
      <ul >
       {
       dossiers.map(doss => (

        <Dossier 
        key={doss.id} 
        {...doss} 
        supprimer={supprimer} 
        modifier={modifier}
        />

        )
       )
       } 
      </ul>
    <Fab color="primary" aria-label="add" onClick={ajouterSignet} className='boutonAjouter' >
      <AddIcon/> 
    </Fab>  

    {ouvert && <Form ouvert={ouvert} setOuvert={setOuvert} action={ajouter}/>}

   

    </div>
    
  )
}

export default ListeDossier;

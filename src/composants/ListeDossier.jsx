import './ListeDossier.scss';
import Dossier from './Dossier.jsx';
// import Dossiers from '../data/liste-dossiers.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Form from './Form.jsx';
import { create, supprimerDoss } from '../code/dossier.js';

function ListeDossier({dossiers, setDossiers, utilisateur}) {

  const [ouvert, setOuvert] = useState(false);

  function ajouterSignet(){

    setOuvert(true);
    console.log('Ajouter un signet', etatBouton);
  }

  //FONCTION IMPORTANTE AJOUTER en async mode
   async function ajouter(titre, couverture, couleur){
    const nouveauObjet = {
      titre: titre,
      couleur: couleur, 
      couverture: couverture,
    
    } 

    //!!!!========!!/
    //FIRESTORE create
    const dossier = await create(utilisateur.uid, nouveauObjet)

    //Etaler l'ancien tableau
    //Ajouter nouveau element
    setDossiers([...dossiers, nouveauObjet])

    // console.log(nouveauObjet)
  }

  //========FONCTION
  function supprimer(id){
    //Supprimer le dossier du FireStore
    supprimerDoss(utilisateur.uid, id);

    //doss.id!=id retourne false quand ils sont egaux
    setDossiers(dossiers.filter((doss)=> doss.id!=id ));
  }

  //=====FONCTION MODIFIER==//
  //=======================//
  function modifier(id, titre, couverture, couleur){
    //Modifier dans firestore
     changer(utilisateur.uid, id, {id, titre, couverture, couleur});

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

      {
        // Si le tableau est vide
        // Afficher le message Aucun dossier
        // Sinon, afficher le tableau
        dossiers.length == 0 ? 
        <div className="aucunDossier">
          WHOOO PAS DE SIGNET ! AJOUTER UN SIGNET
          </div> :

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

      }
      
    <Fab color="primary" aria-label="add" onClick={ajouterSignet} className='boutonAjouter' >
      <AddIcon/> 
    </Fab>  

    {ouvert && <Form ouvert={ouvert} setOuvert={setOuvert} action={ajouter}/>}

   

    </div>
    
  )
}

export default ListeDossier;

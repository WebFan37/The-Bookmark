import './Dossier.scss';
import Rotate from '@mui/icons-material/ThreeSixty';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import Form from './Form.jsx'
import { useState } from 'react';
import * as ModelSignets from '../code/signet.js'

//FAIT DE LA MAISON
import couvertureDefault from '../images/img-default.jpg';
import { formaterDate } from '../code/util.js';

function Dossier({id, titre, dateModif, couleur, supprimer, couverture, modifier, top3, utilisateur}) {

  const [ouvert, setOuvert] = useState(false)

  const [etatTourner, setEtatTourner] = useState(false);

  const [carteActive, setCarteActive] = useState(false)

  //ETAT SIGNET DANS CE DOSSIER
  //Si top3 existe, on execute top3. sinon tableau vide
  const [signets, setSignets] = useState(top3 || []);

  function tourner(){
    setEtatTourner(true)
    // console.log(etatTourner);
    
  }
  function action(){
    modifier(id);
  }

  function action2(){
    supprimer(id)
  }

  //==========================//
  function dragEnter (event) {
    event.preventDefault();

    //NOUVEAU//
    event.dataTransfer.effectAllowed = "link"
  }
  function dragOver (event) {
    event.preventDefault();
  }
  function dragLeave (event) {
    event.preventDefault();
  }


  async function dropGestion (event) {
    event.preventDefault();
    
    //NOUVEAU//
    let url = event.dataTransfer.getData('URL')
    
    //Nouveau//
    //TITRE de la page a partir de la page url

    const proxy = "https://cors-anywhere.herokuapp.com/"

    //1) url
    const reponseUrl = await fetch(proxy + url)
    

    //2) text from url
    const reponseText = await reponseUrl.text()

    //3) Analyser syntaxiquement (parse) le code source HTML a la recherche du titre
    const reponseDom = new DOMParser().parseFromString(reponseText, "text/html")
    const titre = reponseDom.querySelector("head>title").innerText;

    //4) Ajouter signet
    ajouterSignet(id, url, titre)
  }

  //fonction
  function ajouterSignet(idDossier, url, titre){
    const derniers3 = [...signets, {url, titre}].slice(-3);

    //Sauvergarder dans FireStore
    ModelSignets.creer(utilisateur.uid, id, derniers3)

    //Modifier Etat local des signets
    setSignets(derniers3)
  } 

  return (
    <li key={id} className="Dossier" onDragEnter={dragEnter} onDragOver={dragOver} onDragLeave={dragLeave} onDrop={dropGestion}>
      {/* {`Dossier ${tourner ? 'AnimationTourner' : ''}`} */}

      

      {/* Si la carteActive est true, ajouter active avec (&& 'active') */}
      <div className={`carte ${carteActive && 'active'}`}>
        <div className="endroit">

        <div className="couverture" >
          <IconButton  aria-label="add" className='rotation' onClick={()=> setCarteActive(true)}>
            <Rotate/>
          </IconButton> 
          <IconButton  aria-label="add" className='edit' onClick={()=>setOuvert(true)}>
            <ModeEditIcon/>
          </IconButton> 
          {ouvert && <Form dossier={{id, titre, couverture, couleur}} ouvert={ouvert} setOuvert={setOuvert} action={modifier}/>}
            
            <img 
            src={ couverture || couvertureDefault} 
            alt={titre} 

            // SI JAMAIS IL Y A PROCESSSUS D'ERREUR
            // Changer l'image par une autre dans la section dossier src 
            onError={event => event.target.src  = couvertureDefault}
            />
            
        </div>

        <div className="info" style={{backgroundColor: couleur}}>
            <h2>{titre}</h2>

            {/* FORMATER LA DATE AVEC FONCTION UTIL.JS formaterDate */}
            {/* AVEC "Langue" */}
            <p>Modified:{formaterDate(dateModif.seconds*1000, "fr")} </p>

            <IconButton aria-label="add" className='suppression' onClick={action2}>
            <DeleteIcon/>
            </IconButton> 
            
        </div>

        </div>
        
        <div className="envers">
        <IconButton  aria-label="add" className='rotation' onClick={()=> setCarteActive(false)}>
            <Rotate/>
          </IconButton>

          {
            // Si signets est plus que 0
            signets.length > 0 ?

            //Map les signets sur a href
            signets.map(
              signet => <a target='_blank' href={signet.url}>{signet.titre}</a>
            )
            //Si signet length = 0
            :
            <span>Dossier Vide</span>
          }
        </div>
      </div>

        
         
    </li>
  )
}

export default Dossier;

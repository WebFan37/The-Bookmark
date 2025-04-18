import './Dossier.scss';
import Rotate from '@mui/icons-material/ThreeSixty';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import Form from './Form.jsx'
import { useState } from 'react';

//FAIT DE LA MAISON
import couvertureDefault from '../images/img-default.jpg';
import { formaterDate } from '../code/util.js';

function Dossier({id, titre, dateModif, couleur, supprimer, couverture, modifier}) {

  const [ouvert, setOuvert] = useState(false)
console.log(ouvert);

  const [etatTourner, setEtatTourner] = useState(false);

  const [carteActive, setCarteActive] = useState(false)

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

  return (
    <li key={id} className="Dossier">
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
          <a href="">Item 1</a>
          <a href="">Item 2</a>
          <a href="">Item 3</a>
        </div>
      </div>

        
         
    </li>
  )
}

export default Dossier;

import './Dossier.scss';
import Rotate from '@mui/icons-material/ThreeSixty';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import Form from './Form.jsx'
import { useState } from 'react';

function Dossier({id, titre, dateModif, couleur, supprimer, couverture, modifier}) {

  const [ouvert, setOuvert] = useState(false)
console.log(ouvert);

  const [etatTourner, setEtatTourner] = useState(false);

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
    <li key={id} className={`Dossier ${tourner ? 'AnimationTourner' : ''}`}>

        <div className="couverture" >
          <IconButton  aria-label="add" className='rotation' onClick={tourner}>
            <Rotate/>
          </IconButton> 
          <IconButton  aria-label="add" className='edit' onClick={()=>setOuvert(true)}>
            <ModeEditIcon/>
          </IconButton> 
          {ouvert && <Form dossier={{id, titre, couverture, couleur}} ouvert={ouvert} setOuvert={setOuvert} action={modifier}/>}
            
            <img src={couverture} alt={titre} />
        </div>

        <div className="info" style={{backgroundColor: couleur}}>
            <h2>{titre}</h2>
            <p>Modified: {dateModif}</p>

            <IconButton aria-label="add" className='suppression' onClick={action2}>
            <DeleteIcon/>
            </IconButton> 
            
        </div>
         
    </li>
  )
}

export default Dossier;

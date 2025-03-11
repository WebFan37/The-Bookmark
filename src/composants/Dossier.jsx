import './Dossier.scss';
import Rotate from '@mui/icons-material/ThreeSixty';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

function Dossier({id, titre, dateModif, couleur, supprimer, couverture}) {

  const [etatTourner, setEtatTourner] = useState(false);

  function tourner(){
    setEtatTourner(true)
    // console.log(etatTourner);
    
  }
  function edit(){
    alert('Is in progress ')
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
          <IconButton  aria-label="add" className='edit' onClick={edit}>
            <ModeEditIcon/>
          </IconButton> 
            
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

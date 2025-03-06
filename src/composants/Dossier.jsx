import './Dossier.scss';
import Rotate from '@mui/icons-material/ThreeSixty';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';

function Dossier({id, titre, dateModif, couleur }) {

  return (
    <li className="Dossier">

        <div className="couverture" >
          <IconButton  aria-label="add" className='rotation'>
            <Rotate/>
          </IconButton> 
          <IconButton  aria-label="add" className='edit'>
            <ModeEditIcon/>
          </IconButton> 
            
            <img src={`images/${id}.png`} alt={titre} />
        </div>

        <div className="info" style={{backgroundColor: couleur}}>
            <h2>{titre}</h2>
            <p>Modified: {dateModif}</p>

            <IconButton aria-label="add" className='suppression'>
            <DeleteIcon/>
            </IconButton> 
            
        </div>
    </li>
  )
}

export default Dossier;

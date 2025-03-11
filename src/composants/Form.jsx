
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Colorful from '@uiw/react-color-colorful'
import { useState } from 'react';

export default function Form({etatBouton, setEtatBouton, action}) {

  const [titre, setTitre] = useState('')
  const [couverture, setCouverture] = useState('')
  const [couleur, setCouleur] = useState('#000')

    function fermer(){
        setEtatBouton(false);
    }
    function ajouter(){
       //1) etape Ajouter
       action(titre, couverture, couleur)

       //2) etape fermer
       fermer()
    }


    
    
  return (
   
      <Dialog 
      className="Form"
      open={etatBouton}
      onClose={fermer}
        // onClose={handleClose}
        
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="titre"
            name="titre"
            label="Titre"
            type="text"
            fullWidth
            variant="standard"
            
            //====HERE====//
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="Couverture"
            name="Couverture"
            label="Image Couverture"
            type="Couverture"
            fullWidth
            variant="standard"

            value={couverture}
            onChange={(e) => setCouverture(e.target.value)}
          />

          <Colorful 
          className="palette" 
          // colors={["#900, #fff, #009"]}
          placement=''
          color={couleur}
          onChange={(color) => setCouleur(color.hex)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={fermer}>Cancel</Button>
          <Button type="submit" onClick={ajouter}>ADD</Button>
        </DialogActions>
      </Dialog>
    
  );
}
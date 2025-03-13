
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Colorful from '@uiw/react-color-colorful'
import { useState } from 'react';

export default function Form({ouvert, setOuvert, action, dossier={}}) {

  const [titre, setTitre] = useState(dossier.titre || '')
  const [couverture, setCouverture] = useState(dossier.couverture || '')
  const [couleur, setCouleur] = useState(dossier.couleur || '#000')

  const etiquette = (dossier.id) ? "Modifier" : "Ajouter"


  function fermer(){
      setOuvert(false);
  }
  
  function ajouter(){

    //Si dossier avec id existe 
    if(dossier.id){
      //Ouvrir le prompt avec dossier id ainsi que les autres info
      action(dossier.id, titre, couverture, couleur)
    } else {
       //Sinon, seulement titre, couverture et couleur
      action(titre, couverture, couleur)
    }
    

      //2) etape fermer
      fermer()
  }


    
    
  return (
   
      <Dialog 
      className="Form"
      open={ouvert}
      onClose={fermer}
        // onClose={handleClose}
        
      >
        <DialogTitle>{etiquette}Subscribe</DialogTitle>
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
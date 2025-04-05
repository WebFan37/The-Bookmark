import './Header.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../code/init';
import { deconnexion } from '../code/utilisateur';


function Header({utilisateur}) {

  return (
    <div className='Header'>
      <div className="logo">Signets</div>
      <div className="utilisateur">
        <p>{utilisateur.displayName}</p>
        <Avatar alt={utilisateur.displayName} src={utilisateur.photoURL}/>

        <button onClick={deconnexion}>Log Out</button>
      </div>
    </div>
  )
}

export default Header;

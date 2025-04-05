import './Header.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function Header({utilisateur}) {

  return (
    <div className='Header'>
      <div className="logo">Signets</div>
      <div className="utilisateur">
        <p>{utilisateur.displayName}</p>
        <Avatar alt={utilisateur.displayName} src={utilisateur.photoURL}/>
      </div>
    </div>
  )
}

export default Header;

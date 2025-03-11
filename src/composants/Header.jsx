import './Header.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function Header() {

  return (
    <div className='Header'>
      <div className="logo">Signets</div>
      <div className="utilisateur">
        
        <Avatar alt='Testing' src='images/avatar.png'/>
        User
      </div>
    </div>
  )
}

export default Header;

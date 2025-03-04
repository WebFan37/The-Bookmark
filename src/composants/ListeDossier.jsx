import './ListeDossier.scss';
import Dossier from './Dossier.jsx';
import Dossiers from '../data/liste-dossiers.json';

function ListeDossier() {


    
  return (
    <ul className="ListeDossier">
       {
       Dossiers.map(doss => (
        <Dossier key={doss.id} {...doss}/>
        )
       )
       } 
    </ul>
  )
}

export default ListeDossier;

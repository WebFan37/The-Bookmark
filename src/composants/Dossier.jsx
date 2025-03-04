import './Dossier.scss';

function Dossier({id, titre, dateModif, couleur }) {

  return (
    <li className="Dossier">

        <div className="couverture" >
            <img src={`images/${id}.png`} alt={titre} />
        </div>

        <div className="info" style={{backgroundColor: couleur}}>
            <h2>{titre}</h2>
            <p>Modified: {dateModif}</p>
        </div>
    </li>
  )
}

export default Dossier;

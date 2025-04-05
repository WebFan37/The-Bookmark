import './Accueil.scss';

import logo from '../images/logo.png';
import logo2 from '../images/logo-sign.png';
import { connexion } from '../code/utilisateur';

export default function Accueil() {
  return (
    <div className="Accueil">
      <h1>Bienvenue sur The Bookmark</h1>
      <p>Votre gestionnaire de signets</p>

      <img src={logo} alt="logo Google" />
      <h1>Signet <span>Beta</span></h1>

      <h3>
        <span>Organisez vos signets</span>
        <span>Simple comme bonjour !</span>
      </h3>

      <section className="connexion">
        <h2>Connexion à Signets</h2>
        <button className="btn-Google" onClick={connexion}>
            <img src={logo2} alt="logo" />
            Connexion avec Google
        </button>
      </section>
    </div>
  );
}


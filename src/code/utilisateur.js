import {firebaseAuth, googleProvider} from './init.js';
import { signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';


export function connexion(){
    signInWithPopup(firebaseAuth, googleProvider)

}

export function deconnexion(){
    signOut(firebaseAuth)
}

export function observerEtatConnexion(mutateurUtilisateur){
    onAuthStateChanged(firebaseAuth, 
       (utilisateur) => mutateurUtilisateur(utilisateur) // on met a jour l'etat de l'utilisateur
    )
}
import {firebaseAuth, googleProvider, bd, collUtil} from './init.js';
import { signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import { setDoc, doc, serverTimestamp} from 'firebase/firestore';


export function connexion(){
    signInWithPopup(firebaseAuth, googleProvider)

}

export function deconnexion(){
    signOut(firebaseAuth)
}

export function observerEtatConnexion(mutateurUtilisateur){
    onAuthStateChanged(firebaseAuth, 
       (utilisateur) => {
        
        if (utilisateur){
            //Si true, enregistrer les donnes de cette utilisateurs dans cette bd
            const referenceUtilisateur = doc(bd, collUtil, utilisateur.uid)

            setDoc(referenceUtilisateur, {
                nom: utilisateur.displayName,
                avatar: utilisateur.photoURL,
                courriel: utilisateur.email,
                dateCreation: serverTimestamp()
            }, {merge: true})

        }
        mutateurUtilisateur(utilisateur)
    
    } // on met a jour l'etat de l'utilisateur
    )
}
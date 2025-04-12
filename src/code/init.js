import objetConfig from './config.js';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Initialiser les services de Firebase
export const appli = initializeApp(objetConfig);

// Initialiser Firebase Authentication
export const firebaseAuth = getAuth(appli);

// Initialiser service de Google
export const googleProvider = new  GoogleAuthProvider();

//Initialiser les autres services Firebase si nécessaire

//Firebase
export const bd = getFirestore(appli)

//1 collection utilise
export const collUtil = "signet-utilisateur"

//2 collection dossier
export const collDossier = "dossiers"
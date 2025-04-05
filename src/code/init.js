import objetConfig from './config.js';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Initialiser les services de Firebase
export const appli = initializeApp(objetConfig);

// Initialiser Firebase Authentication
export const firebaseAuth = getAuth(appli);

// Initialiser service de Google
export const googleProvider = new  GoogleAuthProvider();

//Initialiser les autres services Firebase si nécessaire
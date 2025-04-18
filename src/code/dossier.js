// DATA MANAGEMENT
import {doc, collection, query, setDoc, addDoc, getDoc, updateDoc, deleteDoc, serverTimestamp, getDocs} from "firebase/firestore"
import { bd, collDossier, collUtil } from "./init"
import { ref } from "firebase/storage"



/**
 * Ajouter un dossier dans FireStore
 * idUtil
 * infoDossier
 * @param {string} idUtil: identifiant de l'utilisateur
 * @param {string} infoDossier: objet contenant les caracteristique du dossier
 * 
 * @returns {Promise<string>}
 */
export async function create (idUtil, infoDossier) {
     //TimeStamp
    infoDossier.dateModif = serverTimestamp();

    const refDoss = await addDoc(collection(bd, collUtil, idUtil, collDossier), infoDossier);

    const dossier = await getDoc(refDoss)

  
    //Retourn identifiant du document
    return ({...dossier.data(), id: dossier.id});
}
/***
 * Retourne tous les dossiers d'un utilisateur
 * @param {string} idUtil: identifiant utilisateur
 * @returns {array} : tableau des dossiers de cet utilisateur
 * 
 */
export async function lire(idUtil){
    //Query peut faire des recherches
 const dossiers = await getDocs(query(collection(bd, collUtil, idUtil, collDossier)))

 //Return dossier avec mapping chaque dossier 
 return dossiers.docs.map(dossFS => ({... dossFS.data(), id: dossFS.id}));
}


export async function changer (idUtil, idDoc, infoDossier){
    const refDossier = doc(bd, collUtil, idUtil, collDossier, idDoc)
    await updateDoc(refDossier, infoDossier)


    const dossier = await getDoc(refDossier)

  
    //Retourn identifiant du document
    return ({...dossier.data(), id: dossier.id});
}

/**
 * Supprime un dossier pour un utilisateur
 * @param {string} idUtil : identifiant utilisateur
 * @param {string} idDoc : identifiant doc supprimer
 */
export async function supprimerDoss (idUtil, idDoc){
    await deleteDoc(doc(bd, collUtil, idUtil, collDossier, idDoc))
}
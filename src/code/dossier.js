// DATA MANAGEMENT
import {doc, collection, query, setDoc, addDoc, getDoc, updateDoc, deleteDoc, serverTimestamp} from "firebase/firestore"
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
    const refDoss = doc(collection(bd, collUtil, idUtil, collDossier));

    //TimeStamp
    infoDossier.dateModif = serverTimestamp();
    await setDoc(refDoss, infoDossier);

    return refDoss.id;
}
/***
 * @param {string} idUtil: identifiant utilisateur
 * @returns {array} : tableau des dossiers de cet utilisateur
 * 
 */
export async function lire(idUtil){
    //Query peut faire des recherches
 const dossiers = await getDoc(query(collection(bd, collUtil, idUtil, collDossier)))
 return dossiers.doc;
}


export function modifier (){

}

export function supprimer (){

}
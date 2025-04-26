// Manipulation des 
import {doc, setDoc} from "firebase/firestore"
import { bd, collDossier, collUtil } from "./init"


export async function creer(idUtilisateur, idDossier, signets){
 const refDoc = doc(bd, collUtil, idUtilisateur, collDossier, idDossier)

 await setDoc(refDoc, {top3: signets}, {merge: true})
}
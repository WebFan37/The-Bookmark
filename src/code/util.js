//Fonction variable et constantes utiles a l'application


/**
 * Retour la date formate
 * 
 * @param {number} TimeStamp : timestamp
 * @param {string} langue : code locale
 * 
 * @return {string} : chaine formatee
 */
export function formaterDate(TimeStamp, langue="fr-CA"){
    const dateJS = new Date(TimeStamp);

    return dateJS.toLocaleDateString(langue, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

}
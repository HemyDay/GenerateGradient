
grid_generation_HTML_Code = "";
grid_size_row = 20;                // Nombre de lignes
grid_size_col = 20;                // Nombre de colonnes


// Fonction qui génère un tableau 
function Generate_Grid(){
    
    id_nb_generation=0; 

    for (let i = 0; i < grid_size_row; i++) {

        grid_generation_HTML_Code += `<tr>`;

        for (let j = 0; j < grid_size_col; j++) {

        
        grid_generation_HTML_Code += `<td id="${id_nb_generation}" class="cell"> </td>`;
        

        id_nb_generation++
        }

        grid_generation_HTML_Code += `</tr>`;
    }

    return grid_generation_HTML_Code;

}


// Génération d'un tableau dans la table .gridContainer
document.querySelector(".gridContainer").innerHTML = Generate_Grid();



function getColorforEachInterval (initR, initG, initB, targR, targG, targB) {
    // Calcul de l'intervale nécessaire pour chaque couleur (R, G, B)
    intervalR = ((targR - initR) / ((grid_size_col*grid_size_row)-1));
    intervalG = ((targG - initG) / ((grid_size_col*grid_size_row)-1));
    intervalB = ((targB - initB) / ((grid_size_col*grid_size_row)-1));

    // Initialise les couleurs pour assurer qu'elle commence bien à la valeur initiale
    let currentR = initR-intervalR;
    let currentG = initG-intervalG;
    let currentB = initB-intervalB;

    
    for (let i = 0; i < grid_size_col*grid_size_row; i++) {
        // Pour chaque cellule, incrémente les valeurs R, G et B avec leurs intervales repectifs
        currentR += intervalR;
        currentG += intervalG;
        currentB += intervalB;

        // Concaténation de la formule RGB pour chaque cellule
        currentBackgroundColor = `rgb(${currentR}, ${currentG}, ${currentB})`;
        
        // Redéfinit la backgroundColor de chaque cellule
        document.getElementById(i).style.backgroundColor = currentBackgroundColor;
    }
}


// Génère une valeur aléatoire entre 0 et 255
function generateRandomRGBValue(){
    return `${Math.ceil(Math.random() * 255)}`;
}


getColorforEachInterval(generateRandomRGBValue(),generateRandomRGBValue(),generateRandomRGBValue(),generateRandomRGBValue(),generateRandomRGBValue(),generateRandomRGBValue())

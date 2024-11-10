
function calculateurIMc (poids ,taille)
{
let poidsKg = poids/1000; 
tailleCarre = taille*taille ;
let result = poidsKg/tailleCarre ;
return result ;

};


let poids = prompt('Quelle est ton poids en g ?');
poids = Number(poids); //conversion string en int 

let taille = prompt('Quelle est ton taille en cm ?');
taille = Number(taille); //conversion string en int 
tailleEnMetre = taille/100 ;  //conversion taille en metre

result = calculateurIMc (poids ,tailleEnMetre);
result = parseFloat(result.toFixed (2) );  //conversion int en float
alert ('Le resulta de votre IMC = '+ result);
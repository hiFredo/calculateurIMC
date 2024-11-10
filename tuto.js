
function calculeIMC (poids ,taille)
{
tailleEnMetres = taille/100 ;  //conversion taille en metre
tailleCarre = Math.pow(tailleEnMetres,2); //taille au carré 
let result = poids/tailleCarre ;
return result ;

};


let poids = prompt('Quelle est ton poids en kg ?');
//poids = Number(poids); //conversion string en int 

let taille = prompt('Quelle est ton taille en cm ?');
//taille = Number(taille); //conversion string en int 


result = calculeIMC (poids ,taille);
result = parseFloat(result.toFixed (2) );  //conversion int en float
alert ('Le resulta de votre IMC = '+ result);
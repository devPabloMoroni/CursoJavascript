//Es necesario colocar los var antes de declarar una variable
'use strict'

var pais = "Argentina";
var continente = "America del Sur";
var antiguedad = 1810;
var pais_y_continente = pais+' '+continente;

//incluida en typescript
let prueba = "Hola";
alert(prueba);

//Re defino las variables
pais = "Brazil";
continente = "Latinoamerica";

console.log(pais,continente,antiguedad);
//Muestra las variables originales
alert(pais_y_continente);
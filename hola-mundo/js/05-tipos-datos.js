'use strict'

//Operadores
var numero1 = 7;
var numero2 = 12;
var operacion1 = numero1 + numero2;
var operacion2 = numero1 % numero2;

alert("El resultado es: " + operacion1);
alert("El resultado es: " + operacion2);

//Tipos de datos
var numero_entero = 44;
var cadena_texto = "Hola que tal";
var verdadero_falso = true; //booleano

//Convertir de un tipo a otro
var numero_falso = "33";

//Suma el resultado
console.log(Number(numero_falso)+15.5);
console.log(parseInt(numero_falso)+15.5);

//Concatena el resultado
console.log(String(numero_falso)+4);

//Detectar el tipo de dato
console.log(typeof cadena_texto);
console.log(typeof verdadero_falso);

'use strict'

//Prueba con let y var

//Prueba con var
var numero = 40;
console.log(numero);

if(true){
	var numero = 50;
	console.log(numero); //Valor 50
}

console.log(numero);

//Prueba con let (Crea la variable a nivel de articulo, con alcance limitado)
var texto = "Esto es el primer valor";
console.log(texto);

if(true){
	let texto = "Cambio el valor dentro del If";
	console.log(texto);
}

console.log(texto);
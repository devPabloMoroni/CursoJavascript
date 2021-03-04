/*
Programa que pida 2 numeros y diga cual es mayor o menor
PLUS: detectar solo numeros y que sean mayor que 0
*/
'use strict'

var numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
	numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));
}

if(numero1 == numero2){
	alert("Los numeros son iguales");
}
else if(numero1 > numero2){
	alert("El numero mayor es " + numero1 + " y el menor es el " + numero2);
}
else if(numero2 > numero1){
	alert("El numero mayor es " + numero2 + " y el menor es el " + numero1);
}
else{
	alert("Introduce numero correctos");
}
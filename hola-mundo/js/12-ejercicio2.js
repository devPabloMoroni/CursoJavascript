/* 
usando un bucle mostrar la suma y la media de los numero introducidos hasta un negativo
*/

'use strict'

var suma = 0;
var contador = 0;

do{
	var numero = parseInt(prompt("Introduce numeros (numero negativo para salir)"), 0);
	if(isNaN(numero)){
		numero = 0;
	}
	else if(numero >= 0){
		suma += numero;
		contador++;
	}

	console.log(suma);
	console.log(contador);
}while(numero >= 0)

alert("La suma es: " + suma);
alert("La media es: " + (suma/contador));
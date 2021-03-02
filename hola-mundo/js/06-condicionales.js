'use-strict'

//IF
var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
	console.log("Edad uno es mayor que edad dos...");
}
else{
	console.log("Edad dos en mayor que edad uno...");
}

var edad = 33;
var nombre = 'David Suarez';

//IF anidado - else if
if(edad >= 18 ){
	console.log(nombre + " es mayor de edad, su edad es " +edad);
	if(edad == 33){
		console.log("Tiene 33 años!!!");
	}
	else if(edad >= 70){
		console.log("Eres anciano!");
	}
	else{
		console.log("No tienes 33 ni eres anciano");
	}
}
else{
	console.log(nombre + "Es menor de edad...");
}


/*Operadores logicos
AND : &&
OR: ||
NOT !=
*/

var year = 2018;

//Negacion
if(year != 2016){
	console.log("El año no es 2016 es el " +year);
}

//AND
if(year >= 2000 && year <= 2020){
	console.log("Estamos en la era actual");
}
else{
	console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028) ){
	console.log("El año termina en 8");
}
else{
	console.log("Año no registrado");
}
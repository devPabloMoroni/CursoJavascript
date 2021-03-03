'use strict'

var year =2018;

while(year <= 2051){
	console.log("Estamos en el año " + year);

	year++;
}

while(year != 1991){
	console.log("Estamos en el año " + year);

	//Break corta la ejecucion de un bucle
	if(year == 2000){
		break;
	}

	year--;
}


//DO WHILE
var years = 30;

do{
	alert("Mayor de 25");
	years--;
}while(years > 25)
//Condicional simple: if

// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero.
// let numero=Number(prompt("Introdueix un numero:"));
// if (numero < 0){
//     console.log("el número llegit és negatiu");
// }

// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell.
// let numero=Number(prompt("Introdueix un numero:"));
// if (numero > 0){
//     console.log("el número llegit és positiu");
//  }

// 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
// és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if
// per cada cas.
// let numero=Number(prompt("Introdueix un numero:"));
// if (numero > 0){
//   console.log("el número llegit és positiu");
//   }
// if (numero < 0){
//     console.log("el número llegit és negatiu");
//  }

// 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
// gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.
// let numero1=Number(prompt("Introdueix un numero: "));
// let numero2=Number(prompt("Introdueix un altre número: "))
// if (numero1>numero2){
//     console.log(numero1)
// }
// if (numero2>numero1){
//     console.log(numero2)
// }

// 13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola
// el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels
// números és el més gran.
// let numero1=Number(prompt("Introdueix un numero: "));
// let numero2=Number(prompt("Introdueix un altre número: "))
// let numero3=Number(prompt("introdueix un 3r número"))
//  if (numero1>numero2 && numero1>numero3){
//      console.log(numero1)
//  }
//  if (numero2>numero1 && numero2>numero3){
//      console.log(numero2)
//  }
// if (numero3>numero1 && numero3>numero2){
//      console.log(numero2)
// }

// 13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes,
// entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 
// let num= Number(prompt("Escriu un número del 1 al 12"))
// if (num === 1){
//     console.log("Gener")
// }
// if (num === 2){
//     console.log("Febrer")
// }
// if (num === 3){
//     console.log("Març")
// }
// if (num === 4){
//     console.log("Abril")
// }
// if (num === 5){
//     console.log("Maig")
// }
// if (num === 6){
//     console.log("Juny")
// }
// if (num === 7){
//     console.log("Juliol")
// }   
// if (num === 8){
//     console.log("Agost")
// }   
// if (num === 9){
//     console.log("Setembre")
// }
// if (num === 10){
//     console.log("Octubre")
// }
// if (num === 11){
//     console.log("Novembre")
// }
// if (num === 12){
//     console.log("Desembre")
// }

//Condicional doble: if - else
// 14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el
// número llegit és positiu” en cas contrari.
// let numero=Number(prompt("Introdueix un numero:"));
// if (numero < 0){
//     console.log("el número llegit és negatiu");
// }
// else {
//     console.log("el número llegit és positiu")
// }

// 14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.
// let numero=Number(prompt("Introdueix un numero:"));
// if ((numero % 2) == 0){
//     console.log("el número llegit és parell");
// }
// else {
//     console.log("el número llegit és senar")
// }

// 14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// quin és el més gran. Només pots fer servir una instrucció if-else.


// 14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola
// quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així,
// comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el
// tercer.

// 14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la
// consola els tres números ordenats.

// 14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona
// pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el
// valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir
// si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25

// 13.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el resultat de restar al nombre més gran el nombre més petit.
// 14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una
// quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
// En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que
// el cost total és de 30€ donat que el transport és gratis.
// En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que
// consistirà en l’introduït més 4.95€ en concepte de cost d’enviament.

// 14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
// posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”
// Si totes les dades són correctes, escriurà el preu final

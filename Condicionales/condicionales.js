/*Ejercicio 1*/
function primerPrograma(x, y) {
    if (x > y) {
        console.log(`${x} es mayor que ${y}`);
    } else {
        console.log(`${x} no es mayor que ${y}`);
    }
}
primerPrograma(5, 3);
primerPrograma(7, 1);

/*Ejercicio 2*/
function segundoPrograma(x, y) {
    if (x == y) {
        console.log(`${x} es igual a ${y}`)
    } else {
        console.log(`${x} es diferente a ${y}`)
    }
}
segundoPrograma(5, 5);
segundoPrograma(7, 1);

/*Ejercicio 3*/
function tercerPrograma(x, y) {
    if (x > y) {
        console.log(`${x} es mayor a ${y}`);
    } else if (x < y) {
        console.log(`${y} es mayor a ${x}`)
    } else {
        console.log(`${x} son iguales ${y}`)
    }
}
tercerPrograma(10, 5);
tercerPrograma(-15, 3);
tercerPrograma(7, 7);

/*Ejercicio 4*/
function cuartoPrograma(x, y, z) {
    if (x < y && x < z) {
        console.log(`${x} es el más chico`);
    } else if (y < x && y < z) {
        console.log(`${y} es el más chico`);
    } else {
        console.log(`${z} es el más chico`);
    }
}
cuartoPrograma(7, 5, 8);
cuartoPrograma(3, 9, 12);
cuartoPrograma(12, 6, 1);

/*Ejercicio 5*/
var personaUno = {
    nombre: "Daniel",
    edad: 65,
    altura: 170,
};
var personaDos = {
    nombre: "Marcos",
    edad: 50,
    altura: 175,
};
function quintoPrograma(obj1, obj2) {
    obj1.altura > obj2.altura ?
        console.log(`${obj1.nombre} es más alto que ${obj2.nombre}`) :
        console.log(`${obj2.nombre} es más alto que ${obj1.nombre}`);
    obj1.edad > obj2.edad ?
        console.log(`${obj1.nombre} es mayor que ${obj2.nombre}`) :
        console.log(`${obj2.nombre} es mayor que ${obj1.nombre}`);
}
quintoPrograma(personaUno, personaDos);

/*Ejercico 6*/
function sextoPrograma() {
    let nombre = prompt("Ingresa tu nombre");
    let edad = Number(prompt("Ingresa tu edad"));
    let altura = Number(prompt("Ingresa tu altura en cm"));
    let vision = Number(prompt("Califica tu vision del 1 al 10"));
    if (edad >= 18 && altura > 150 && vision >= 8) {
        alert(`${nombre} estas capacitado para conducir`);
    } else {
        alert(`${nombre} no estas capacitado para conducir`);
    }
}
//sextoPrograma()

/*Ejercico 7*/
function septimoPrograma() {
    let nombre = prompt("Ingrese su nombre");
    let pase = prompt("Indique su tipo de pase: vip o normal");
    let entrada = prompt("Indique con 'si' o 'no' si posee entrada");
    if (nombre == "Israel" || pase == "vip") {
        alert("Bienvenido tiene ingreso libre");
    } else if (entrada == "si") {
        let respuesta = prompt("Desea utilizar su entrada?");
        if (respuesta == "si") {
            alert("Bienvenido tiene ingreso");
        } else {
            alert("Le esperamos pronto");
        }
    } else {
        let compra = prompt("Desea compar una entrada?");
        if (compra == "si") {
            let dinero = prompt("De cuanto dinero dispone?");
            if (dinero >= 1000) {
                alert("La compra fue exitosa, bienvenido!");
            } else {
                alert("Su compra fue rechazada")
            }
        } else {
            alert("Le esperamos pronto");
        }
    }
}
//septimoPrograma();

/*Ejercico 8*/
function adivinanza() {
    alert("Tienes 3 intentos para adivinar un numero del 1 al 10. Suerte!");
    let numeroIncognita = 6;
    let numeroIngresado = prompt("Primer intento :)");
    if (numeroIncognita == numeroIngresado){
        alert("Ganaste, has adivinado el número.");
    } else if (numeroIngresado > numeroIncognita) {
        alert(`El numero por adivinar es menor a ${numeroIngresado}`);
        numeroIngresado = prompt("Segundo intento");
        if(numeroIncognita == numeroIngresado){
            alert("Ganaste, has adivinado el número.");
        } else if (numeroIngresado > numeroIncognita) {
            alert(`El numero por adivinar es menor a ${numeroIngresado}`);
            numeroIngresado = prompt("Tercer intento");
            if(numeroIncognita == numeroIngresado){
                alert("Ganaste, has adivinado el número.");
            } else{
                alert(`Lo siento perdiste, el numero era ${numeroIncognita}`);
            }
        } else {
            alert(`El numero por adivinar es mayor a ${numeroIngresado}`);
            numeroIngresado = prompt("Tercer intento");
            if(numeroIncognita == numeroIngresado){
                alert("Ganaste, has adivinado el número.");
            } else{
                alert(`Lo siento perdiste, el numero era ${numeroIncognita}`);
            }
        }
    } else {
        alert(`El numero por adivinar es mayor a ${numeroIngresado}`);
        numeroIngresado = prompt("Segundo intento");
        if(numeroIncognita == numeroIngresado){
            alert("Ganaste, has adivinado el número.");
        } else if (numeroIngresado > numeroIncognita) {
            alert(`El numero por adivinar es mayor a ${numeroIngresado}`);
            numeroIngresado = prompt("Tercer intento");
            if(numeroIncognita == numeroIngresado){
                alert("Ganaste, has adivinado el número.");
            } else{
                alert(`Lo siento perdiste, el numero era ${numeroIncognita}`);
            }
        } else {
            alert(`El numero por adivinar es menor a ${numeroIngresado}`);
            numeroIngresado = prompt("Tercer intento");
            if(numeroIncognita == numeroIngresado){
                alert("Ganaste, has adivinado el número.");
            } else{
                alert(`Lo siento perdiste, el numero era ${numeroIncognita}`);
            }
        }
    }
}
//adivinanza();

/*Ejercico 9*/
function novenoPrograma(){
    let edad = prompt("Ingresa tu edad");
    if ( edad >= 0 && edad <= 12) {
        alert("Eres un infante");
    } else if (edad >= 13 && edad <= 18){
        alert("Eres un adolecente");
    } else if (edad >= 19 && edad <= 45){
        alert("Eres un joven mayor");
    } else if (edad > 45 && edad <= 100){
        alert("Eres un anciano");
    } else {
        alert("De verdad tienes esa edad?");
    }
}
//novenoPrograma();

/*Ejercico 10*/
function juego(){
    let jugadorUno = prompt("Jugador 1 --> PIEDRA, PAPEL O TIJERA");
    let jugadorDos = prompt("Jugador 2 --> PIEDRA, PAPEL O TIJERA");
    if (jugadorUno == jugadorDos) {
        alert("Empate")
    } else if ((jugadorUno == "PIEDRA" && jugadorDos == "PAPEL") || (jugadorUno == "PAPEL" && jugadorDos == "TIJERA") || (jugadorUno == "TIJERA" && jugadorDos == "PIEDRA") ){
        alert("Jugador 2 has ganado");
    } else if ((jugadorUno == "PAPEL" && jugadorDos == "PIEDRA") || (jugadorUno == "TIJERA" && jugadorDos == "PAPEL") || (jugadorUno == "PIEDRA" && jugadorDos == "TIJERA") ){
        alert("Jugador 1 has ganado");
    } 
}
juego();